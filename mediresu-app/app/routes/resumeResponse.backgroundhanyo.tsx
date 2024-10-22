import { useOutletContext } from "@remix-run/react";
import { UserEducations, UserEmployments,UserLicenses,UserSelfPr } from "~/types/user";
import { TitleComp } from "~/components/userinfo/TitleComp";
import { ItemsComp } from "~/components/userinfo/ItemsComp";
import { AddButtonComp } from "~/components/userinfo/AddButtonComp";
import { ItemsAnyComp } from "~/components/userinfo/ItemsAnyComp";
import { BackEndComp } from "~/components/userinfo/BackEndComp";
import { AcademicDateComp } from "~/components/userinfo/AcademicDateComp";
import { SubEducationItemsComp } from "~/components/userinfo/SubEducationItemsComp";
import { WorkHistoryDateComp } from "~/components/userinfo/WorkHistoryDateComp";
import { CompnayTextComp } from "~/components/userinfo/CompanyTextComp";
import { LicenseDateComp } from "~/components/userinfo/LicenseDateComp";
import { LicenseTextComp } from "~/components/userinfo/LicenseTextComp";
import { SelfPrTextComp } from "~/components/userinfo/SelfPrTextComp";


type OutletContextType = {
  educationFormData: UserEducations[];
  updateEducationFormData:(newData:Partial<UserEducations> & {order_num:number},orderNumKey: keyof UserEducations) => void;
  employmentFormData:UserEmployments[];
  updateEmploymentFormData:(newData:Partial<UserEmployments> & {order_num:number},orderNumKey: keyof UserEducations) => void;
  licenseFormData:UserLicenses[];
  updateLicenseFormData:any;
  prFormData:UserSelfPr,
  updatePrFormData:any;

}

export default function ResumeLayout(){

    const {
      educationFormData,updateEducationFormData,
      employmentFormData,updateEmploymentFormData,
      licenseFormData,updateLicenseFormData,
      prFormData,updatePrFormData,
    } = useOutletContext<OutletContextType>();
    

    const handleInputChange = (
      order_num:number,
      field: keyof UserEducations,
      value:string | number
    ) => {
      updateEducationFormData({order_num,[field]:value},"order_num")
    };

    const employmentHandleInputChange = (
      order_num:number,
      field: keyof UserEmployments,
      value:string | number
    ) => {
      updateEmploymentFormData({order_num,[field]:value},"order_num")
    };

    const lincenseHandleInputChange = (
      order_num:number,
      field:keyof UserLicenses,
      value:string | number
    ) => {
      updateLicenseFormData({order_num,[field]:value},"order_num")
    };

    const prHandleChange =async (name:string,value:any) => {
      // console.log(prFormData)
      updatePrFormData({ [name]:value });

  }


    return(
      <main className="flex flex-col items-center w-full bg-[#d9ecec]">
          <div className="flex w-full max-w-[375px] h-20 items-center justify-center gap-1.5 bg-white py-4">
              {/* STEP 01: 基本情報 */}
              <div className="flex flex-col w-[62px] items-center gap-1 opacity-50">
                  <div className="flex items-center justify-center gap-2.5 px-[5px] py-1 w-full border border-solid border-[#24b6ae]">
                      <div className="font-medium text-[#24b6ae] text-[10px] whitespace-nowrap">
                          STEP.01
                      </div>
                  </div>
                  <div className="font-medium text-[#313131] text-xs text-center">
                      基本情報
                  </div>
              </div>

              {/* STEP 02: 学歴・職歴 */}
              <div className="flex flex-col w-[62px] items-center gap-1">
                  <div className="flex items-center justify-center gap-2.5 px-[5px] py-1 w-full bg-[#24b6ae]">
                      <div className="font-medium text-white text-[10px] whitespace-nowrap">
                          STEP.02
                      </div>
                  </div>
                  <div className="font-medium text-[#313131] text-xs text-center">
                      学歴・職歴
                  </div>
              </div>
          </div>

          <div className="flex flex-col w-full max-w-[375px] items-start gap-2.5 p-5 bg-[#d9ecec]">
              <div className="flex flex-col items-start px-0 py-[30px] w-full bg-white rounded-md">
                  <TitleComp className="w-full" text="学歴・職歴" />
                  

                  <div>
                    {educationFormData.map((education,index)=>
                      (education ? (
                        <div key={index}>
                          <ItemsComp text={`学歴.${index+1}(高校以降記入)`} />
                          <AcademicDateComp className="!self-stretch !w-full" formData={education} handleChange={handleInputChange}/>
                          <SubEducationItemsComp text="学校名" field="school_name" formData={education}  order_num={education.order_num} handleChange={handleInputChange} />
                        </div>
                      ) :null
                    ))}

                  </div>
                  
                  <AddButtonComp text="＋学歴を追加する" formData={educationFormData} updateFormData={updateEducationFormData}/>
                  
                  <div>
                    {employmentFormData.map((employment,index)=>
                      (employment ? (
                        <div key={index}>
                          <ItemsComp text={`職歴.${index+1}`} />
                          <WorkHistoryDateComp className="!self-stretch !w-full" formData={employment} handleChange={employmentHandleInputChange} />
                          <CompnayTextComp text="勤務先" field="company_name" formData={employment}  order_num={employment.order_num} handleChange={employmentHandleInputChange}/>
                        </div>
                      ) :null
                    ))}
                  </div>

                  <AddButtonComp text="＋職歴を追加する" formData={employmentFormData} updateFormData={updateEmploymentFormData}/>
                  <div>
                    {licenseFormData.map((license,index)=>
                      (license ? (
                        <div key={index}>
                          <ItemsAnyComp text={`免許・資格.${index+1}`} />
                          <LicenseDateComp className="!self-stretch !w-full" formData={license} handleChange={lincenseHandleInputChange} />
                          <LicenseTextComp text="免許・資格名" field="license_name" formData={license}  order_num={license.order_num} handleChange={lincenseHandleInputChange} />
                        </div>
                      ) :null
                    ))}
                  </div>

                  <AddButtonComp text="＋免許・資格を追加する"  formData={licenseFormData} updateFormData={updateLicenseFormData}/>

                  <ItemsAnyComp text="自己PR/志望理由（500文字以内）" />
                  <SelfPrTextComp
                    className="!self-stretch !h-[150px] !w-full"
                    divClassName="!mt-[unset]"
                    frameClassName="!self-stretch"
                    frameClassNameOverride="!h-[unset] !flex-1 !grow"
                    text=""
                    name="self_pr_text"
                    value={prFormData.self_pr_text}
                    handleChange={prHandleChange}
                    
                  />
                  <BackEndComp className="w-full" img="/img/userinfo/subtract-1.svg" subtract="/img/userinfo/subtract-6.svg" text="完了" backLink="../userinfo" nextLink="/top"/>
              </div>
          </div>
      </main>


    );

}