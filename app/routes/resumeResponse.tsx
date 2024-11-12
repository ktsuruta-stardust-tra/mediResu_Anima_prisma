import { json,ActionFunction,redirect } from "@remix-run/node";
import { useLoaderData, Outlet,Form, useActionData, useOutletContext } from "@remix-run/react";
import { UserEducations, UserEmployments,UserLicenses } from "~/types/user";  //型定義のインポート
import { createInitialUserInfo,createInitialUserEducation,
    createInitialEmployment,createInitialLicense,createInitialUserSelfPr } from "~/types/user";
import { createDefaultEducation,createDefaultEmployment,createDefaultLicense } from "~/types/user";
import { useUserAddedFormManager } from "~/hooks/useUserAddInfo";
import { useUserForm } from "~/hooks/useUserForm";
import { HeaderComp } from "~/components/userinfo/HeaderComp";
import prisma from "~/utils/prismaClient";
import { Prisma } from "@prisma/client";
import { upsertFormDataPrisma } from "~/services/upsertFormDataPrisma";
import { upsertOrderNumPrisma } from "~/services/upsertOrderNumPrisma";
import { sessionStorage} from "~/utils/session";
import { useEffect, useState } from "react";
import { useRef } from "react";
import { useNavigation } from "@remix-run/react";


// バリデーションエラーデータの型定義
type ValidationError = {
    [key: string]: string;
  };
// ActionDataの型定義
type ActionData = {
    error?: string;
};

export const action:ActionFunction = async ({request}) => {
    const formData = await request.formData();
    const receivedFormData = JSON.parse(formData.get("formData") as string);
    // 各データを取得し、JSONとしてパース
    
    const receivedEmploymentData = JSON.parse(formData.get("employmentFormData") as string);
    const receivedEducationData = JSON.parse(formData.get("educationFormData") as string);
    const receivedLicenseDatas = JSON.parse(formData.get("licenseFormData") as string);
    const receivedPrData = JSON.parse(formData.get("prFormData") as string);


   
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

    return redirect("/top?status=success");
}


export const loader = async ({request}) => {
    const session = await sessionStorage.getSession(request.headers.get("Cookie"));

    const userId = session.get("userId");
    //const userId = 4
    if (!userId) {
        return new Response("User not authenticated", { status: 401 });
    }
    
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
    const userId = useOutletContext<any>();

    const actionData = useActionData<ActionData>();// actionから返されたデータを受け取る
    
    //各フォームデータの初期化
    const initialData = userInfo?.length > 0 ? userInfo[0]:createInitialUserInfo(userId);
    const initialEducationData =  userEdus?.length > 0 ? userEdus:createInitialUserEducation(userId);
    const initialEmploymentData = userEmps?.length > 0 ? userEmps:createInitialEmployment(userId);
    const initialLicenseData = userLicenses?.length > 0 ? userLicenses:createInitialLicense(userId);
    const initialSelfPr = userPr?.length >0 ? userPr[0]:createInitialUserSelfPr(userId);

    //カスタムフック定義
    const [formData,updateFormData]=useUserForm(initialData);

    const [educationFormData,updateEducationFormData] = useUserAddedFormManager<UserEducations>(
        initialEducationData,
        createDefaultEducation(userId),
    )
    type userEmploymentType = Prisma.PromiseReturnType<typeof prisma.employments.findMany>[0];
    const [employmentFormData,updateEmploymentFormData] = useUserAddedFormManager<userEmploymentType>(
        initialEmploymentData,
        createDefaultEmployment(userId),
    )
    const [licenseFormData,updateLicenseFormData] = useUserAddedFormManager(
        initialLicenseData,
        createDefaultLicense(userId),
    )
    const [prFormData,updatePrFormData] = useUserForm(initialSelfPr);


    useEffect(() => {
        if(userId){
            updateFormData(userInfo?.length > 0 ? userInfo[0]:createInitialUserInfo(userId));
            // updateEducationFormData(userEdus?.length > 0 ? userEdus:createInitialUserEducation(userId),createDefaultEducation(userId));
            // updateEmploymentFormData(userEmps?.length > 0 ? userEmps:createInitialEmployment(userId),createDefaultEmployment(userId));
            // updateLicenseFormData(userLicenses?.length > 0 ? userLicenses:createInitialLicense(userId),createDefaultLicense(userId));
            updatePrFormData(userPr?.length >0 ? userPr[0]:createInitialUserSelfPr(userId));

            const order_num = 1;

            if(userEdus.length === 0){
                updateEducationFormData({order_num,"user_id":userId},"order_num")
            }
            if(userEmps.length === 0){
                updateEmploymentFormData({order_num,"user_id":userId},"order_num")
            }
            if(userLicenses.length===0){
                updateLicenseFormData({order_num,"user_id":userId},"order_num")
            }
        }
        
    },[userId])


    // transition.submissionがnullでない場合は処理中であることを示す
    const navigation = useNavigation();
    // フォームが送信中かどうかを判定
    const isSubmitting = navigation.state === "submitting";


    //1，2ページのバリデーション判定(フロント)
    const [page1IsValid, setPage1IsValid] = useState(false);
    const [page2IsValid, setPage2IsValid] = useState(false);
    const [isMainFormValid, setIsFormValid] = useState(false);

    useEffect(()=>{
        setIsFormValid(page1IsValid && page2IsValid);
    },[page1IsValid,page2IsValid]);

    const saveButtonRef = useRef<HTMLButtonElement>(null);
    const triggerSave = () => {
        if(saveButtonRef.current){
            saveButtonRef.current.click();
        }
    }

    return(
        <div className="bg-white flex flex-col items-center w-full min-h-screen overflow-y-auto">
            {/* スピナー */}
            {isSubmitting && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50 z-50">
                <div
                    className="animate-spin h-10 w-10 border-4 border-blue-500 rounded-full border-t-transparent"
                    aria-label="読み込み中"
                ></div>
                </div>
            )}

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
                        page1IsValid,setPage1IsValid,
                        page2IsValid,setPage2IsValid,
                        triggerSave,isMainFormValid,
                        isSubmitting,
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

                            {!isMainFormValid?(
                                <button 
                                    
                                    className="w-[110px] h-10 bg-[#e1e1e1] rounded-[20px] font-bold text-white text-sm"
                                    disabled={!isMainFormValid}>
                                    保存する
                                </button>

                            ):(
                                <button 
                                    type="submit"
                                    ref={saveButtonRef}
                                    disabled={isSubmitting}
                                    className="w-[110px] h-10 bg-[#24b6ae] rounded-[20px] font-bold text-white text-sm"
                                >
                                保存する

                                </button>

                            )}
        
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