// ParentForm.tsx
import { Outlet,Form,useLoaderData } from '@remix-run/react';
import { useState } from 'react';
import { supabase } from '~/utils/supabaseClient';
import { ActionFunction } from '@remix-run/node';
import { deleteUserData,insertUserOperations,insertSupplementaryTexts } from '~/services/delsertOperationData';
import { redirect } from '@remix-run/react';
import { UserExperienceType,createDefaultUserExperience, createDefaultUserJobHistory, createInitialUserJobHistory } from '~/types/curriculumDatas';
import { useExperienceItems } from '~/hooks/useExperienceItems';
import { upsertUserExperienceData } from '~/services/upsertUserExperienceData';
import { useUserAddedFormManager } from '~/hooks/useUserAddInfo';
import { upsertOrderNum } from '~/services/upsertOrderNum';
import { upsertFormData } from '~/services/upsertFormData';
import { createDefaultUserJobSummary,createInitialUserJobSummary } from '~/types/curriculumDatas';
import { createInitialSkillExperience } from '~/types/curriculumDatas';
import { useUserForm } from '~/hooks/useUserForm';
import { HeaderComp } from '~/components/userinfo/HeaderComp';

const userId = 1;
export const loader = async () => {

    const { data:categories } = await supabase.from("categories").select("id, name , operations(id,name)");

    const {data:initialSelectedIdsObj} = await supabase.from("user_operations").select("operation_id").eq("user_id",userId);

    let initialSelectedIds= []
    if(initialSelectedIdsObj){
        initialSelectedIds = initialSelectedIdsObj.map((item) => item.operation_id);
    }
    
    const {data:otherInitialDataObj} = await supabase.from("supplementary_texts").select("operation_id,input_text").eq("user_id",userId);
    const otherInitialData = otherInitialDataObj?.reduce((acc,item) => {
        acc[item.operation_id] = item.input_text;
        return acc;
    },{} as Record<number,string>);

    const {data:tempUserExperienceFormData} = await supabase.from("user_experiences").select("*").eq("user_id",userId);
    const {data:tempUserJobHistory} = await supabase.from("job_histories").select("*").eq("user_id",userId).order("order_num",{ascending:true});

    const {data:tempUserJobSummary} = await supabase.from("job_summaries").select("*").eq("user_id",userId);
    
    const {data:tempSkills} = await supabase.from("skills_experiences").select("*").eq("user_id",userId);

    return {categories,initialSelectedIds,otherInitialData,tempUserExperienceFormData,tempUserJobHistory,tempUserJobSummary,tempSkills}
}

export const action:ActionFunction = async ({request}) => {
    const formData = await request.formData();
    const selectedItems = formData.get("selectedItems") as string;
    const otherTexts = JSON.parse(formData.get("otherTexts") as string);
    const experienceFormData = JSON.parse(formData.get("experienceFormData") as string);
    const jobHistoryFormDatas = JSON.parse(formData.get("jobHistoryFormData") as string);
    const jobSummaryFormData = JSON.parse(formData.get("jobSummaryFormData") as string);
    const itemIds = selectedItems ? selectedItems.split(',').map(Number) : [];
    const skillsFormData = JSON.parse(formData.get("skillsFormData") as string);

    let result = await deleteUserData(userId, "user_operations");
    
    if (result.status === "error") {
        
        return new Response(result.message, { status: 500 })

    } 
    result = await deleteUserData(userId, "supplementary_texts");

    if (result.status === "error") {
        return new Response(result.message, { status: 500 })

    } 

    result = await insertUserOperations(userId,itemIds,"user_operations");

    if (result.status === "error") {
        return new Response(result.message, { status: 500 })

    } 

    result = await insertSupplementaryTexts(userId,otherTexts,"supplementary_texts");

    if (result.status === "error") {
        return new Response(result.message, { status: 500 })

    } 

    await upsertFormData(experienceFormData,"user_experiences");

    // 全てのupsertOrderNumを並行して実行
    await Promise.all(
        jobHistoryFormDatas.map((jobHistoryFormData:any) => 
            upsertOrderNum(jobHistoryFormData, "job_histories")
        )
        
    );
    // 全てのupsertOrderNumを並行して実行


    await upsertFormData(jobSummaryFormData,"job_summaries");

    await upsertFormData(skillsFormData,"skills_experiences");
    return redirect("/");

}

export default function ParentForm() {
    const {categories,initialSelectedIds,
        otherInitialData,tempUserExperienceFormData,
        tempUserJobHistory,tempUserJobSummary,tempSkills
    }= useLoaderData<any>();

    // console.log(initialSelectedIds)
    // console.log(otherInitialData);

    // const initialSelectedIds = [1, 3, 5,53,20];
    // const otherInitialData = {20:"aaaaa"};


      // `categories`から「その他」のIDと初期テキストを動的に生成
    const otherIds = categories.flatMap((category:any) =>
        category.operations
        .filter((operation:any) => operation.name === 'その他')
        .map((operation:any) => operation.id)
    );

    const [selectedItems, setSelectedItems] = useState<Set<number>>(new Set(initialSelectedIds));

    // 「その他」のテキスト入力内容を保持する状態
    const [otherTexts, setOtherTexts] = useState<{ [key: number]: string }>(otherInitialData);

    const initialExperienceFormData = tempUserExperienceFormData?.length > 0 ? tempUserExperienceFormData[0]:createDefaultUserExperience(userId);
    const [experienceFormData,updateExperienceFormData] = useExperienceItems<any>(initialExperienceFormData);

    const initialJobHistoryFormData = tempUserJobHistory?.length > 0 ? tempUserJobHistory:createInitialUserJobHistory(userId);
    const [jobHistoryFormData,updateJobHistoryFormData] = useUserAddedFormManager<any>(initialJobHistoryFormData,createDefaultUserJobHistory(userId));

    const initialJobSummaryFormData = tempUserJobSummary?.length > 0 ? tempUserJobSummary[0]:createInitialUserJobSummary(userId);
    const [jobSummaryFormData,updateJobSummaryFormData] = useUserForm(initialJobSummaryFormData);

    const initialSkillsExperience = tempSkills?.length > 0 ? tempSkills[0]:createInitialSkillExperience(userId);
    const [skillsExperienceFormData,updateSkillsExperienceFormData] = useUserForm(initialSkillsExperience);

    const handleCheckboxChange = (id: number) => {
        setSelectedItems((prevSelectedItems) => {
            const updatedSelectedItems = new Set(prevSelectedItems);

            if (updatedSelectedItems.has(id)) {
                updatedSelectedItems.delete(id);
                // 「その他」のチェックが外された場合、otherTextsから削除
                if (otherIds.includes(id)) {
                        setOtherTexts((prevTexts) => {
                        const { [id]: _, ...rest } = prevTexts; // 該当IDを削除
                        return rest;
                    });
                }

            } else {
                updatedSelectedItems.add(id);

                // 「その他」がチェックされた場合、otherTextsに追加
                if (otherIds.includes(id)) {
                    setOtherTexts((prevTexts) => ({
                        ...prevTexts,
                        [id]: otherInitialData[id], // 初期値を追加
                    }));
                }
            }
            return updatedSelectedItems;
        });
    };

    return (
        <div className="bg-white flex flex-col items-center w-full min-h-screen overflow-y-auto">
            <div className="bg-white w-full max-w-[375px]">
                {/* ヘッダーコンポーネント */}
                <HeaderComp className="w-full" group="/img/userinfo/group-3-1.png" />


                <Outlet context={{ 
                    categories, selectedItems, 
                    handleCheckboxChange, setOtherTexts, otherTexts,
                    experienceFormData,updateExperienceFormData,
                    jobHistoryFormData,updateJobHistoryFormData,
                    jobSummaryFormData,updateJobSummaryFormData,
                    skillsExperienceFormData,updateSkillsExperienceFormData,
                }} />



                {/* フッター */}
                <div className="w-full px-4 py-2 mt-4">
                    <div className="flex items-center justify-center gap-4 py-2">
                        <button className="w-[110px] h-10 bg-[#e1e1e1] rounded-[20px] font-bold text-white text-sm">
                            保存する
                        </button>
                        <button className="w-[110px] h-10 bg-[#e1e1e1] rounded-[20px] font-bold text-white text-sm">
                            プレビュー
                        </button>
                    </div>
                </div>

                <div className="w-full border-b border-[#24b6ae] mt-2"></div>
                <p className="text-[#3d3d3d] text-[10px] px-4 py-2 mt-2 text-center">
                    Copyright © 2024 LOGICA Inc. All Rights Reserved.
                </p>
                
            </div>
        </div>
    );
}