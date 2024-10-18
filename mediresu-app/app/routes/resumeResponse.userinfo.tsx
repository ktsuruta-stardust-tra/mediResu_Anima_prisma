import { useLoaderData,Link, useOutletContext } from "@remix-run/react";
import { useEffect,useState } from "react";
import { UserInfo } from "~/types/user";
import { userInfoSchema } from "~/utils/userInfoSchema";
import { TitleComp } from "~/components/userinfo/TitleComp";
import { ItemsComp } from "~/components/userinfo/ItemsComp";
import { ItemsAnyComp } from "~/components/userinfo/ItemsAnyComp";
import { NameComp } from "~/components/userinfo/NameComp";
import { DateComp } from "~/components/userinfo/DateComp";
import { PostCodeComp } from "~/components/userinfo/PostCodeComp";
import { PrefecturesComp } from "~/components/userinfo/PrefecturesComp";
import { BaseTextComp } from "~/components/userinfo/BaseTextComp";
import { UploadImgComp } from "~/components/userinfo/UploadImgComp";
import { BackNextComp } from "~/components/userinfo/BackNextComp";

type OutletContextType = {
    formData: UserInfo;
    updateFormData:(newData:Partial<UserInfo>) => void;
}

export default function ResumeLayout(){

    const {formData,updateFormData} = useOutletContext<OutletContextType>();
    
    const [errors,setErrors] = useState<{[key:string]:string}>({});

    const handleChange =async (e:React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const{name,value} = e.target;
        const updatedValue = name === "birth_year" || name === "birth_month" || name === "birth_day" ? Number(value) : value;
        //updateFormData({ [name]: name === "birth_year" || name === "birth_month" || name === "birth_day" ? Number(value) : value });
        console.log("UUUUUUUUU")
        console.log(formData)
        updateFormData({ [name]:updatedValue });
        try{
          await userInfoSchema.validateAt(name, { ...formData, [name]: updatedValue });
          setErrors((prev) => ({...prev,[name]:""}));
        }catch(validationError:any){
          setErrors((prev) => ({ ...prev, [name]: validationError.message })); // エラーメッセージを設定
        }
    }
    return(

        <main className="flex flex-col items-center w-full bg-[#d9ecec]">
            <div className="flex w-full max-w-[375px] h-20 items-center justify-center gap-1.5 bg-white">
                <div className="flex flex-col w-[62px] items-center gap-1">
                    <div className="flex items-center justify-center gap-2.5 px-[5px] py-1 bg-[#24b6ae]">
                        <div className="w-fit font-medium text-white text-[10px]">STEP.01</div>
                    </div>
                    <div className="font-medium text-[#313131] text-xs text-center">基本情報</div>
                </div>
                <div className="flex flex-col w-[62px] items-center gap-1 opacity-50">
                    <div className="flex items-center justify-center gap-2.5 px-[5px] py-1 border border-[#24b6ae80]">
                        <div className="w-fit font-medium text-[#24b6ae80] text-[10px]">STEP.02</div>
                    </div>
                    <div className="font-medium text-[#31313180] text-xs text-center">学歴・職歴</div>
                </div>
            </div>

            <div className="flex flex-col w-full max-w-[375px] items-start gap-2.5 p-5 bg-[#d9ecec]">
                <div className="flex flex-col items-start px-0 py-[30px] w-full bg-white rounded-md">
                    <TitleComp className="!self-stretch !w-full" text="基本情報" />
                    <ItemsComp className="!flex-[0_0_auto]" />
                    <NameComp className="!self-stretch !w-full" lastValue={formData.last_name} firstValue={formData.first_name} lastName="last_name" firstName="first_name" handleChange={handleChange} />
                    <NameComp className="!self-stretch !w-full" text="セイ" text1="ヤマダ" text2="メイ" text3="タロウ" lastValue={formData.last_name_kana} firstValue={formData.first_name_kana} lastName="last_name_kana" firstName="first_name_kana" handleChange={handleChange}/>
                    <ItemsComp className="!flex-[0_0_auto]" text="生年月日" />
                    <DateComp className="!self-stretch !w-full" year={formData.birth_year} year_name="birth_year" month={formData.birth_month} month_name="birth_month" day={formData.birth_day} day_name="birth_day" handleChange={handleChange}/>
                    <ItemsComp className="!flex-[0_0_auto]" text="郵便番号" />
                    <PostCodeComp className="!self-stretch !w-full" value={formData.postal_code} name="postal_code" handleChange={handleChange}/>
                    <ItemsComp className="!flex-[0_0_auto]" text="都道府県" />
                    <PrefecturesComp className="!self-stretch !w-full" value={formData.prefecture} name="prefecture" handleChange={handleChange}/>
                    <ItemsComp className="!flex-[0_0_auto]" text="市区町村" />
                    <BaseTextComp className="!self-stretch !w-full" value={formData.city} name={"city"} handleChange={handleChange} />
                    <ItemsComp className="!flex-[0_0_auto]" text="番地・建物名" />
                    <BaseTextComp className="!self-stretch !w-full" text="〇番地 00-00-00" value={formData.address} name={"address"} handleChange={handleChange} />
                    <ItemsComp className="!flex-[0_0_auto]" text="電話番号" />
                    <BaseTextComp className="!self-stretch !w-full" text="" value={formData.phone_number} name={"phone_number"} handleChange={handleChange}/>
                    <ItemsComp className="!flex-[0_0_auto]" text="メールアドレス" />
                    <BaseTextComp className="!self-stretch !w-full" text="" value={formData.email_address} name={"email_address"} handleChange={handleChange}/>
                    <ItemsAnyComp className="!flex-[0_0_auto]" text="証明写真" />
                    <UploadImgComp className="!self-stretch !w-full" element="/img/userinfo/1-2.svg" />
                    <BackNextComp className="!self-stretch !w-full" img="/img/userinfo/subtract-7.svg" subtract="/img/userinfo/subtract-6.svg" topLink="/top" nextLink="../backgroundhanyo"/>
                </div>
            </div>
        </main>


    );

}