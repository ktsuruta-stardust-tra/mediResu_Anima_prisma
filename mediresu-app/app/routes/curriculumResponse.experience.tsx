// CategoryWithItems.tsx
import { useOutletContext } from "@remix-run/react";
import { Link } from "@remix-run/react";
import { UserExperienceType, UserJobHistoryType } from "~/types/curriculumDatas";
import { StepProgress } from "~/components/curriculum/StepsComp";
import { ItemsComp } from "~/components/userinfo/ItemsComp";
import { ExperienceChecklistSection } from "~/components/curriculum/ExperienceChecklistSection";
import { SubItemsComp } from "~/components/userinfo/SubItemsComp";
import { TitleComp } from "~/components/userinfo/TitleComp";
import { WorkHistoryComp } from "~/components/curriculum/WorkHistoryComp";
import { ItemsAnyComp } from "~/components/userinfo/ItemsAnyComp";
import { LongTextComp } from "~/components/curriculum/LongTextComp";
import { BackEndComp } from "~/components/userinfo/BackEndComp";
import { WHEmpTypeComp } from "~/components/curriculum/WHEmpTypeComp";
import { Prisma } from "@prisma/client";
import { WorkHistoryLongTextComp } from "~/components/curriculum/WorkHistoryLongTextComp";
import prisma from "~/utils/prismaClient";
import { z } from "zod";
import { useEffect,useState } from "react";
import { userExperiencesSchema } from "~/utils/zodSchemas";
import { jobHistoriesSchema } from "~/utils/zodSchemas";
import { CheckedBackEndComp } from "~/components/CheckedBackEndComp";


export default function UserExperiencePage() {

    const { 
        experienceFormData,
        updateExperienceFormData,
        jobHistoryFormData,
        updateJobHistoryFormData,
        page1IsValid,
        setPage4IsValid,
        isMainFormValid,
        triggerSave,
    } = useOutletContext<{
        experienceFormData:UserExperienceType,
        updateExperienceFormData:(newData:Partial<UserExperienceType>) => void;
        c:UserJobHistoryType[],
        updateJobHistoryFormData:(newData:Partial<any> & {order_num:number},orderNumKey: keyof any) => void;
        page1IsValid:boolean,
        setPage4IsValid:(isValid:boolean) => void;
        isMainFormValid:boolean;
        triggerSave:()=> void;
    }>();

    // バリデーション用の状態
    const [isFormValid, setIsFormValid] = useState(false);
    const [experienceFormError, setExperienceFormError] = useState<string>(); 
    const [jobHistoryFormError, setjobHistoryFormError] = useState<string[][]>([]); 
    const [isErrorShow,setIsErrorShow] = useState(false);

    useEffect(() =>{
        if(jobHistoryFormData.length > 0){
            if(jobHistoryFormData[0].company_name !== ""){
                const validateJobHistoryData = () => {
                    const validationErrors: string[][] = jobHistoryFormData.map((jobHistory) => {
                        const result = jobHistoriesSchema.safeParse(jobHistory);
                        if(!result.success){
                            return result.error.errors.map((err) => err.message);
                        }
                        return [];
                    });
                    setjobHistoryFormError(validationErrors);
                };
                validateJobHistoryData();
                console.log(jobHistoryFormError)
            }
        }
    },[jobHistoryFormData])


    useEffect(() => {
        try {
          // バリデーションを実行
          userExperiencesSchema.parse(experienceFormData);
          setExperienceFormError(""); // エラーメッセージをクリア
        } catch (validationError) {
          // バリデーションエラーの場合
          if (validationError instanceof z.ZodError) {
            setExperienceFormError(validationError.errors[0].message); // 最初のエラーメッセージを表示
          }
        }
      }, [updateExperienceFormData]); // updateExperienceFormDataが変更されたときに実行

          // エラーステートを監視して「完了」ボタンの有効/無効を更新
    useEffect(() => {
        const noExperienceErrors = experienceFormError?.length === 0;
        const noJobHistoryErrors = jobHistoryFormError.every((errs) => errs.length === 0);
        setIsFormValid(noExperienceErrors && noJobHistoryErrors);
    }, [experienceFormError, jobHistoryFormError]);

  
    useEffect(()=>{
        if(isFormValid){
            setIsErrorShow(false);
            }
        setPage4IsValid(isFormValid);
    },[isFormValid,setPage4IsValid]);

    //職歴がすでに入力されているか確認
    let isRegistered = false;
    if(jobHistoryFormData.length > 0){
        if(jobHistoryFormData[0].company_name !== ""){
            isRegistered = true;
        }
    } 
    

    const handleChange =async (name:string,value:any) => {
        // const{name,value} = e.target;

        // console.log(experienceFormData)
        if(name === "other_experience"){
            if(experienceFormData.other_checked){
                updateExperienceFormData({ [name]:value });
            }
        }
        else if(name === "other_checked" && value==false){
            updateExperienceFormData({ ["other_experience"]:"" });
            updateExperienceFormData({ [name]:value });

        }
        else{
            updateExperienceFormData({ [name]:value });
        }
    }
    const jobHistoryHandleInputChange =async (
        order_num:number,
        field: keyof UserJobHistoryType,
        value:string | number
        ) => {

        updateJobHistoryFormData({order_num,[field]:value},"order_num")
        
    };

    const endHandleChange=async() => {
        if(!isFormValid){
            setIsErrorShow(true);
            window.alert("入力に誤りがあります")
          }
        triggerSave();
    };



    const steps = [
        { stepNumber: "STEP.01", title: "職務要約に", subtitle: "ついて", isActive: false },
        { stepNumber: "STEP.02", title: "自費診療の", subtitle: "経験", isActive: false },
        { stepNumber: "STEP.03", title: "保健診療の", subtitle: "経験", isActive: false },
        { stepNumber: "STEP.04", title: "その他の", subtitle: "スキル", isActive: true },
    ];

    type jobHistoryType = Prisma.PromiseReturnType<typeof prisma.job_histories.findMany>[0];
    return(
        <main className="flex flex-col items-center w-full bg-[#d9ecec]">
            <div className="flex w-full max-w-[375px] items-center justify-center gap-1.5 bg-white py-4">
                <StepProgress steps={steps} />
            </div>

            <div className="flex flex-col w-full max-w-[375px] items-start gap-2.5 p-5 bg-[#d9ecec]">
                <div className="flex flex-col items-start px-0 py-[5px] w-full bg-white rounded-md">
                    <ItemsComp className="!flex-[0_0_auto]" text="その他スキル" />
                    <SubItemsComp
                        className="!self-stretch !flex-[0_0_auto] !pt-2.5 !pb-0 !px-0 !w-full"
                        divClassName="!h-[unset] !mr-[-1.00px] !tracking-[-0.56px] !leading-[normal] !w-fit"
                        text="ご経験があるものにチェックをつけてください。"
                    />
                     {experienceFormError && isErrorShow && <p className="text-red-500 text-sm">{experienceFormError}</p>} {/* エラーメッセージの表示 */}
                    <ExperienceChecklistSection title="Windows" name="windows" checked={experienceFormData.windows} handleChange={handleChange} otherText={experienceFormData.other_experience} />
                    <ExperienceChecklistSection title="Mac" name="mac" checked={experienceFormData.mac} handleChange={handleChange} otherText={experienceFormData.other_experience} />
                    <ExperienceChecklistSection title="Microsoft Word" name="microsoft_word" checked={experienceFormData.microsoft_word} handleChange={handleChange} otherText={experienceFormData.other_experience} />
                    <ExperienceChecklistSection title="Microsoft Excel" name="microsoft_excel" checked={experienceFormData.microsoft_excel} handleChange={handleChange} otherText={experienceFormData.other_experience} />
                    <ExperienceChecklistSection title="Microsoft PowerPoint" name="microsoft_powerpoint" checked={experienceFormData.microsoft_powerpoint} handleChange={handleChange} otherText={experienceFormData.other_experience} />
                    <ExperienceChecklistSection title="院内ポスター" name="poster_design" checked={experienceFormData.poster_design} handleChange={handleChange} otherText={experienceFormData.other_experience} />
                    <ExperienceChecklistSection title="SNS更新作業" name="sns_update" checked={experienceFormData.sns_update} handleChange={handleChange} otherText={experienceFormData.other_experience} />
                    <ExperienceChecklistSection title="パンフレット制作" name="brochure_creation" checked={experienceFormData.brochure_creation} handleChange={handleChange} otherText={experienceFormData.other_experience} />
                    <ExperienceChecklistSection title="その他" name="other_checked" checked={experienceFormData.other_checked} handleChange={handleChange} otherText={experienceFormData.other_experience} />

                    <TitleComp className="w-full" text="職務経歴" />

                    {/* <ItemsComp className="!flex-[0_0_auto]" text="勤務先名"/> */}

                    {isRegistered && jobHistoryFormData.map((data:any,index:number) => (
                        <div key={index}>
                            <WorkHistoryComp formData={data} />
                            <ItemsComp className="!flex-[0_0_auto]" text="雇用形態"/>

                            {jobHistoryFormError[index] && jobHistoryFormError[index].length >0 &&  isErrorShow &&(
                                <div className="text-red-500">
                                    {jobHistoryFormError[index].map((error,idx) => (
                                        <p key={idx}>{error}</p>
                                    ))}
                                </div>
                            )}

                            <WHEmpTypeComp formData={data} handleChange={jobHistoryHandleInputChange}/>
                            <ItemsAnyComp className="!flex-[0_0_auto]" text="職務内容（1,000文字以内）"/>
                            <WorkHistoryLongTextComp
                                name="job_details"
                                value={data.job_details}
                                formData={data}
                                handleChange={jobHistoryHandleInputChange}
                            />
                        </div>
                    ))}
                    {/* <WorkHistoryComp />

                    <ItemsComp className="!flex-[0_0_auto]" text="雇用形態"/>

                    <WHEmpTypeComp/>

                    <ItemsAnyComp className="!flex-[0_0_auto]" text="職務内容（1,000文字以内）"/> */}
                    {/* {isFormValid && 
                    <BackEndComp className="w-full" img="/img/userinfo/subtract-1.svg" subtract="/img/userinfo/subtract-6.svg" text="完了" backLink="../category-step2" nextLink="/top" />
                    } */}
                    <CheckedBackEndComp 
                        className="w-full" 
                        img="/img/userinfo/subtract-1.svg" 
                        subtract="/img/userinfo/subtract-6.svg" 
                        text="完了" 
                        backLink="../category-step2"  
                        nextLink="/top" 
                        isValid={isMainFormValid}
                        handleChange={endHandleChange}
                    />
                    
                </div>
            </div>
        </main>

    );

}