// ParentForm.tsx
import { Outlet,Form,useLoaderData, useOutletContext } from '@remix-run/react';
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
import prisma from '~/utils/prismaClient';
import { Prisma } from '@prisma/client';
import { deleteUserDataPrisma, insertSupplementaryTextsPrisma, insertUserOperationsPrisma } from '~/services/delsertOperationDataPrisma';
import { upsertFormDataPrisma } from '~/services/upsertFormDataPrisma';
import { upsertOrderNumPrisma } from '~/services/upsertOrderNumPrisma';
import { syncEmploymentsWithJobHistories } from '~/utils/transferEmploymentsToJobHistories';
import { sessionStorage } from '~/utils/session';


export const loader = async ({request}) => {
  const session = await sessionStorage.getSession(request.headers.get("Cookie"));
  const userId = session.get("userId");
  if(userId)
    try {
      const [
        categories,
        initialSelectedIdsObj,
        otherInitialDataObj,
        tempUserExperienceFormData,
        tempUserJobHistory,
        tempUserJobSummary,
        tempSkills,
      ] = await Promise.all([

        // categoriesのデータ取得
        prisma.categories.findMany({
          include: {
            operations: true, // リレーションされたoperationsを含めて取得
          },
        }),
  
        // user_operationsのデータ取得
        prisma.user_operations.findMany({
          where: { user_id: userId },
          select: { operation_id: true },
        }),
  
        // supplementary_textsのデータ取得
        prisma.supplementary_texts.findMany({
          where: { user_id: userId },
          select: {
            operation_id: true,
            input_text: true,
          },
        }),
  
        // user_experiencesのデータ取得
        prisma.user_experiences.findMany({
          where: { user_id: userId },
        }),
  
        //job_history
        syncEmploymentsWithJobHistories(userId),
        

        // job_summariesのデータ取得
        prisma.job_summaries.findMany({
          where: { user_id: userId },
        }),
  
        // skills_experiencesのデータ取得
        prisma.skills_experiences.findMany({
          where: { user_id: userId },
        }),

      ]);
  
      // user_operationsの処理
      let initialSelectedIds = [];
      if (initialSelectedIdsObj) {
        initialSelectedIds = initialSelectedIdsObj.map((item) => item.operation_id);
      }
  
      // supplementary_textsの処理
      type SupplementaryText = Prisma.PromiseReturnType<typeof prisma.supplementary_texts.findMany>[0];
      const otherInitialData = otherInitialDataObj?.reduce((acc, item: SupplementaryText) => {
        if (item.operation_id !== null) {
          acc[item.operation_id] = item.input_text;
        }
        return acc;
      }, {} as Record<number, string>);
  
      return {
        categories,
        initialSelectedIds,
        otherInitialData,
        tempUserExperienceFormData,
        tempUserJobHistory,
        tempUserJobSummary,
        tempSkills,
      };
    } catch (err) {
      console.error("Error loading data:", err);
      throw new Response("Error loading data", { status: 500 });
    }
  };
  

export const action:ActionFunction = async ({request}) => {
    const formData = await request.formData();
    const selectedItems = formData.get("selectedItems") as string;
    const otherTexts = JSON.parse(formData.get("otherTexts") as string);
    const experienceFormData = JSON.parse(formData.get("experienceFormData") as string);
    const jobHistoryFormDatas = JSON.parse(formData.get("jobHistoryFormData") as string);
    const jobSummaryFormData = JSON.parse(formData.get("jobSummaryFormData") as string);
    const itemIds = selectedItems ? selectedItems.split(',').map(Number) : [];
    const skillsFormData = JSON.parse(formData.get("skillsFormData") as string);
    const {userId} = useOutletContext<any>();
    let result = await deleteUserDataPrisma(userId, "user_operations");
    
    if (result.status === "error") {
        
        return new Response(result.message, { status: 500 })

    }

    result = await deleteUserDataPrisma(userId, "supplementary_texts");

    if (result.status === "error") {
        return new Response(result.message, { status: 500 })

    } 

    if(itemIds.length > 0){
        result = await insertUserOperationsPrisma(userId,itemIds,"user_operations");


        if (result.status === "error") {
            return new Response(result.message, { status: 500 })
        } 
    }

    result = await insertSupplementaryTextsPrisma(userId,otherTexts,"supplementary_texts");

    if (result.status === "error") {
        return new Response(result.message, { status: 500 })

    } 

    await upsertFormDataPrisma(experienceFormData,"user_experiences");

    // 全てのupsertOrderNumを並行して実行
    console.log(jobHistoryFormDatas)
    await Promise.all(
        jobHistoryFormDatas.map((jobHistoryFormData:any) => 
            upsertOrderNumPrisma(jobHistoryFormData, "job_histories")
        )
        
    );
    // 全てのupsertOrderNumを並行して実行
    await upsertFormDataPrisma(jobSummaryFormData,"job_summaries");

    await upsertFormDataPrisma(skillsFormData,"skills_experiences");
    return redirect("/top");

}

export default function ParentForm() {
    const {categories,initialSelectedIds,
        otherInitialData,tempUserExperienceFormData,
        tempUserJobHistory,tempUserJobSummary,tempSkills
    }= useLoaderData<any>();

    const userId = useOutletContext<any>();

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

    type jobHistoryType = Prisma.PromiseReturnType<typeof prisma.job_histories.findMany>[0]
    const initialJobHistoryFormData = tempUserJobHistory;

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
                <Form method='post'>
                    <div className="w-full px-4 py-2 mt-4">
                        <div className="flex items-center justify-center gap-4 py-2">
                            {/* `selectedItems`と`otherTexts`を文字列に変換して送信 */}
                            <input type="hidden" name="selectedItems" value={Array.from(selectedItems).join(',')} />
                            <input type="hidden" name="otherTexts" value={JSON.stringify(otherTexts)} />
                            <input type="hidden" name="experienceFormData" value={JSON.stringify(experienceFormData)} />
                            <input type="hidden" name="jobHistoryFormData" value={JSON.stringify(jobHistoryFormData)} />
                            <input type="hidden" name="jobSummaryFormData" value={JSON.stringify(jobSummaryFormData)} />
                            <input type="hidden" name="skillsFormData" value={JSON.stringify(skillsExperienceFormData)} />
                            <button className="w-[110px] h-10 bg-[#e1e1e1] rounded-[20px] font-bold text-white text-sm">
                                保存する
                            </button>
                            <button className="w-[110px] h-10 bg-[#e1e1e1] rounded-[20px] font-bold text-white text-sm">
                                プレビュー
                            </button>
                        </div>
                    </div>
                </Form>
                <div className="w-full border-b border-[#24b6ae] mt-2"></div>
                <p className="text-[#3d3d3d] text-[10px] px-4 py-2 mt-2 text-center">
                    Copyright © 2024 LOGICA Inc. All Rights Reserved.
                </p>
                
            </div>
        </div>
    );
}