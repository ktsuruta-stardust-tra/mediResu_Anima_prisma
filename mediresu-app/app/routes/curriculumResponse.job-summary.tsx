// CategoryWithItems.tsx
import { useOutletContext } from "@remix-run/react";
import { Link } from "@remix-run/react";
import { UserJobSummaryType,UserSillsExperiencesType } from "~/types/curriculumDatas";
import { TitleComp } from "~/components/userinfo/TitleComp";
import { ItemsComp } from "~/components/userinfo/ItemsComp";
import { ItemsAnyComp } from "~/components/userinfo/ItemsAnyComp";
import { LongTextComp } from "~/components/curriculum/LongTextComp";
import { BackNextComp } from "~/components/userinfo/BackNextComp";
import { useState } from "react";
import { jobSummariesSchema } from "~/utils/zodSchemas";
import { useEffect } from "react";
import { z } from "zod";
import { CheckedBackNextComp } from "~/components/userinfo/CheckedBackNextComp";
import { skillsExperiencesSchema } from "~/utils/zodSchemas";

export default function UserExperiencePage() {

    const { 
        jobSummaryFormData,
        updateJobSummaryFormData,
        skillsExperienceFormData,
        updateSkillsExperienceFormData,
        setPage1IsValid,
     } = useOutletContext<{
        jobSummaryFormData:UserJobSummaryType;
        updateJobSummaryFormData:(newData:Partial<UserSillsExperiencesType>) => void;
        skillsExperienceFormData:UserSillsExperiencesType;
        updateSkillsExperienceFormData:(newData:Partial<UserSillsExperiencesType>) => void;
        setPage1IsValid:(isValid:boolean)=>void;
    }>();

    const [isFormValid,setIsFormValid] = useState(false);
    const [error, setError] = useState<string>(); 
    const [skillError,setSkillError]=useState<string>();

    const jobSummaryHandleInputChange = async (name:string ,value:any) =>{

        updateJobSummaryFormData({[name]:value});
        
    }

    const sillsHandleChange =async (name:string,value:any) => {

        updateSkillsExperienceFormData({ [name]:value });
        // console.log(skillsExperienceFormData)
    }

    useEffect(() => {
        try {
          // バリデーションを実行
          jobSummariesSchema.parse(jobSummaryFormData);
          setError(""); // エラーメッセージをクリア
        } catch (validationError) {
          // バリデーションエラーの場合
          if (validationError instanceof z.ZodError) {
            setError(validationError.errors[0].message); // 最初のエラーメッセージを表示
          }
        }
        
    }, [jobSummaryFormData]); // jobSummaryFormDataが変更されたときに実行

    useEffect(() => {
        try {
          // バリデーションを実行
          skillsExperiencesSchema.parse(skillsExperienceFormData);
          setSkillError(""); // エラーメッセージをクリア
        } catch (validationError) {
          // バリデーションエラーの場合
          if (validationError instanceof z.ZodError) {
            setSkillError(validationError.errors[0].message); // 最初のエラーメッセージを表示
          }
        }
        
    }, [skillsExperienceFormData]); // jobSummaryFormDataが変更されたときに実行

    useEffect(() => {
        const noExperienceErrors = error?.length === 0;
        const noJobHistoryErrors = skillError?.length === 0;
        setIsFormValid(noExperienceErrors && noJobHistoryErrors);

    });

    useEffect(() => {
        setPage1IsValid(isFormValid);

    },[isFormValid,setPage1IsValid])


    return(
        <main className="flex flex-col items-center w-full bg-[#d9ecec]">
            <div className="flex w-full max-w-[375px] items-center justify-center gap-1.5 bg-white py-4">
                {/* STEP 01 */}
                <div className="flex flex-col w-[62px] items-center gap-1">
                    <div className="flex items-center justify-center gap-2.5 px-[5px] py-1 bg-[#24b6ae]">
                        <div className="font-medium text-white text-[10px]">STEP.01</div>
                    </div>
                    <div className="font-medium text-[#313131] text-xs text-center">
                        職務要約に<br />ついて
                    </div>
                </div>

                {/* STEP 02 */}
                <div className="flex flex-col w-[62px] items-center gap-1 opacity-50">
                    <div className="flex items-center justify-center gap-2.5 px-[5px] py-1 border border-[#24b6ae80]">
                        <div className="font-medium text-[#24b6ae80] text-[10px]">STEP.02</div>
                    </div>
                    <div className="font-medium text-[#31313180] text-xs text-center">
                        自費診療の<br />経験
                    </div>
                </div>

                {/* STEP 03 */}
                <div className="flex flex-col w-[62px] items-center gap-1 opacity-50">
                    <div className="flex items-center justify-center gap-2.5 px-[5px] py-1 border border-[#24b6ae80]">
                        <div className="font-medium text-[#24b6ae80] text-[10px]">STEP.03</div>
                    </div>
                    <div className="font-medium text-[#31313180] text-xs text-center">
                        保健診療の<br />経験
                    </div>
                </div>

                {/* STEP 04 */}
                <div className="flex flex-col w-[62px] items-center gap-1 opacity-50">
                    <div className="flex items-center justify-center gap-2.5 px-[5px] py-1 border border-[#24b6ae80]">
                        <div className="font-medium text-[#24b6ae80] text-[10px]">STEP.04</div>
                    </div>
                    <div className="font-medium text-[#31313180] text-xs text-center">
                        その他の<br />スキル
                    </div>
                </div>
            </div>

            <div className="flex flex-col w-full max-w-[375px] items-start gap-2.5 p-5 bg-[#d9ecec]">
                <div className="flex flex-col items-start px-0 py-[30px] w-full bg-white rounded-md">
                    <TitleComp className="w-full" text="職務要約" />
                    <ItemsComp text="職務要約(500文字以内)" />
                    {error && <p className="ml-5" style={{ color: "red" }}>{error}</p>
                    
                    }
                    <LongTextComp
                        className="!self-stretch !h-[150px] !w-full"
                        divClassName="!mt-[unset]"
                        frameClassName="!self-stretch"
                        frameClassNameOverride="!h-[unset] !flex-1 !grow"
                        text=""
                        name="summary"
                        value={jobSummaryFormData.summary}
                        handleChange={jobSummaryHandleInputChange}
                    />
                    
                    <TitleComp className="w-full pt-10" text="活かせる経験・知識・技術" />
                    <ItemsAnyComp text="得意分野(500文字以内)" />
                    {skillError && <p className="ml-5" style={{ color: "red" }}>{skillError}</p>}
                    <LongTextComp
                        className="!self-stretch !h-[150px] !w-full"
                        divClassName="!mt-[unset]"
                        frameClassName="!self-stretch"
                        frameClassNameOverride="!h-[unset] !flex-1 !grow"
                        text=""
                        name="skills"
                        value={skillsExperienceFormData.skills}
                        handleChange={sillsHandleChange}
                    />
                    <CheckedBackNextComp
                        className="!self-stretch !flex-[0_0_auto] !w-full"
                        img="/img/userinfo/subtract-7.svg"
                        subtract="/img/userinfo/subtract-6.svg"
                        topLink="/top"
                        nextLink="../category-step1"
                        isValid={isFormValid}
                    />
                </div>
            </div>

        </main>


    );

}