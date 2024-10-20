import { json,ActionFunction,redirect } from "@remix-run/node";
import { useLoaderData, Outlet,Form, useActionData } from "@remix-run/react";
import { UserEducations, UserEmployments,UserLicenses } from "~/types/user";  //型定義のインポート
import { createInitialUserInfo,createInitialUserEducation,
    createInitialEmployment,createInitialLicense,createInitialUserSelfPr } from "~/types/user";
import { createDefaultEducation,createDefaultEmployment,createDefaultLicense } from "~/types/user";
import { useUserInfo } from "~/hooks/useUserInfo"; //カスタムフック
import { useUserAddedFormManager } from "~/hooks/useUserAddInfo";
import { supabase } from "~/utils/supabaseClient";
import { upsertUserBasicInfomation,upsertUserBackgroundData } from "~/services/upsertUserData";
import { userInfoSchema } from "~/utils/userInfoSchema";
import { upsertOrderNum } from "~/services/upsertOrderNum";
import { useUserForm } from "~/hooks/useUserForm";
import { upsertFormData } from "~/services/upsertFormData";
import { HeaderComp } from "~/components/userinfo/HeaderComp";
import { SavePreviewComp } from "~/components/userinfo/SavePreviewComp";
import prisma from "~/utils/prismaClient";
import { Prisma } from "@prisma/client";
import { upsertFormDataPrisma } from "~/services/upsertFormDataPrisma";
import { upsertOrderNumPrisma } from "~/services/upsertOrderNumPrisma";
import { convertToPrismaType } from "~/utils/convertToPrismaType";
// バリデーションエラーデータの型定義
type ValidationError = {
    [key: string]: string;
  };
// ActionDataの型定義
type ActionData = {
    error?: string;
};


const userId = 1;
export const action:ActionFunction = async ({request}) => {
    const formData = await request.formData();
    const receivedFormData = JSON.parse(formData.get("formData") as string);
    // 各データを取得し、JSONとしてパース
    
    const receivedEmploymentData = JSON.parse(formData.get("employmentFormData") as string);
    const receivedEducationData = JSON.parse(formData.get("educationFormData") as string);
    const receivedLicenseDatas = JSON.parse(formData.get("licenseFormData") as string);
    const receivedPrData = JSON.parse(formData.get("prFormData") as string);


    // データベースへの保存処理やその他の処理をここで行う
    // 例: SupabaseやPrismaなどを使って保存
    // console.log(formData);
    // // console.log("Form Data:", receivedFormData);
    // console.log("Education Data:", receivedEducationData);
    // console.log("Education Data:", receivedEmploymentData);
   
    // try{
        // Yupスキーマを使用してバリデーション
        //await userInfoSchema.validate(receivedFormData, { abortEarly: false });
    
        if(receivedFormData){
            
            //const userInfoResult = await upsertFormData(receivedFormData,"user_informations");
            const userInfoResult = await upsertFormDataPrisma(receivedFormData,"user_informations");
            console.log("Info")
            console.log(userInfoResult);
        }
        if(receivedEducationData){
            // const userEducationResult = await upsertUserBackgroundData(receivedEducationData,"educations");

            console.log("edu")
            // console.log(userEducationResult);

            
            await Promise.all(
                receivedEducationData.map(async (educationData:any) => {
                    await upsertOrderNumPrisma(educationData, "educations")
                })
            );
        }
        if(receivedEmploymentData){
            // const UserEmploymentResult = await upsertUserBackgroundData(receivedEmploymentData, "employments");

            console.log("emp")

            receivedEmploymentData.map(async (employmentData:any) => {
                await upsertOrderNumPrisma(employmentData, "employments")
            })
        }

        // 全てのupsertOrderNumを並行して実行
        await Promise.all(
            receivedLicenseDatas.map((receivedLicenseData:any) => 
                upsertOrderNumPrisma(receivedLicenseData, "licenses")
            )
        );

        // await upsertFormData(receivedPrData,"self_prs");
        const prResult = await upsertFormDataPrisma(receivedPrData,"self_prs");


    // }catch (validationError: any) {
    //     // Yupのバリデーションエラーをキャッチし、エラーメッセージを返す
    //     const errors: ValidationError = validationError.inner.reduce((acc: ValidationError, err: any) => {
    //       acc[err.path] = err.message;
    //       return acc;
    //     }, {});
    //     console.log("Error")
    //     console.log(errors);
    //     return json({ errors }, { status: 400 });
    // }    

    return redirect("/top");
}



export const loader = async () => {

    try {
        const [userInfo, userEdus, userEmps, userLicenses, userPr] = await Promise.all([
          prisma.user_informations.findMany({
            where: { user_id: userId },
          }),
          prisma.educations.findMany({
            where: { user_id: userId },
            orderBy: { order_num: 'asc' },
          }),
          prisma.employments.findMany({
            where: { user_id: userId },
            orderBy: { order_num: 'asc' },
          }),
          prisma.licenses.findMany({
            where: { user_id: userId },
            orderBy: { order_num: 'asc' },
          }),
          prisma.self_prs.findMany({
            where: { user_id: userId },
          }),
        ]);
    
        // データの返却
        return json({
          userInfo,
          userEdus,
          userEmps,
          userLicenses,
          userPr,
        });
      } catch (error) {
        // エラーハンドリング
        throw new Response("Error fetching data", { status: 500 });
      }

}

export default function ResumeLayout(){

    const {userInfo,userEdus,userEmps,userLicenses,userPr} = useLoaderData<any>();
    const actionData = useActionData<ActionData>();// actionから返されたデータを受け取る

    const initialData = userInfo?.length > 0 ? userInfo[0]:createInitialUserInfo(userId);

    const initialEducationData =  userEdus?.length > 0 ? userEdus:createInitialUserEducation(userId);
    
    const initialEmploymentData = userEmps?.length > 0 ? userEmps:createInitialEmployment(userId);

    const [formData,updateFormData]=useUserForm(initialData);
    // console.log("OOOOOOOOOOO")
    // console.log(initialData)
    // console.log(formData);
  
    //const [educationFormData,updateEducationFormData] = useUserAddedFormManager<Prisma.educationsCreateInput>(
    const [educationFormData,updateEducationFormData] = useUserAddedFormManager<UserEducations>(
        initialEducationData,
        createDefaultEducation(userId),
    )
    type userEmploymentType = Prisma.PromiseReturnType<typeof prisma.employments.findMany>[0];
    const [employmentFormData,updateEmploymentFormData] = useUserAddedFormManager<userEmploymentType>(
        initialEmploymentData,
        createDefaultEmployment(userId),
    )

    const initialLicenseData = userLicenses?.length > 0 ? userLicenses:createInitialLicense(userId);
    const [licenseFormData,updateLicenseFormData] = useUserAddedFormManager(
        initialLicenseData,
        createDefaultLicense(userId),
    )
    const initialSelfPr = userPr?.length >0 ? userPr[0]:createInitialUserSelfPr(userId);
    const [prFormData,updatePrFormData] = useUserForm(initialSelfPr);

    return(
<div className="bg-white flex flex-col items-center w-full min-h-screen overflow-y-auto">
    <div className="bg-white w-full max-w-[375px]">
        {/* ヘッダーコンポーネント */}
        <HeaderComp className="w-full" group="/img/userinfo/group-3-1.png" />

        {/* 子フォームをアウトレットで表示 */}
        <div className="flex-1">
            <Outlet context={{
                formData, updateFormData,
                educationFormData, updateEducationFormData,
                employmentFormData, updateEmploymentFormData,
                licenseFormData, updateLicenseFormData,
                prFormData, updatePrFormData,
            }}/>
        </div>

        {/* フッター */}
        <Form method="post">
            <div className="w-full px-4 py-2 mt-4">
                <div className="flex items-center justify-center gap-4 py-2">

                    <input type="hidden" name="formData" value={JSON.stringify(formData)} />
                    <input type="hidden" name="employmentFormData" value={JSON.stringify(employmentFormData)} />
                    <input type="hidden" name="educationFormData" value={JSON.stringify(educationFormData)} />
                    <input type="hidden" name="licenseFormData" value={JSON.stringify(licenseFormData)} />
                    <input type="hidden" name="prFormData" value={JSON.stringify(prFormData)} />

                    <button type="submit" className="w-[110px] h-10 bg-[#e1e1e1] rounded-[20px] font-bold text-white text-sm">
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




        
    )
}