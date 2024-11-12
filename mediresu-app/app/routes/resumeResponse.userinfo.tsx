import { useLoaderData,Link, useOutletContext } from "@remix-run/react";
import { useEffect,useState } from "react";
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
import { CheckedBackNextComp } from "~/components/CheckedBackNextComp";
import { userInformationsSchema,customErrorMap } from "~/utils/zodSchemas";
import { isValid, z } from "zod";
import { GenderComp } from "~/components/userinfo/GenderComp";
import { user_informations } from "@prisma/client";

type OutletContextType = {
    formData: user_informations;
    updateFormData:(newData:Partial<user_informations>) => void;
    page1IsValid:boolean;
    setPage1IsValid:(isValid: boolean) => void;
    page2IsValid:boolean;
    setPage2IsValid: (isValid: boolean) => void;
}

export default function ResumeLayout(){

    const {formData,updateFormData,setPage1IsValid} = useOutletContext<OutletContextType>();
    
    const [errors,setErrors] = useState<{[key:string]:string}>({});
    const [isFormValid, setIsFormValid] = useState(false); // フォームの有効性を管理
    const [isErrorShow,setIsErrorShow] = useState(false);
    
    // フィールド変更時の処理
    const handleChange = async (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        const updatedValue = name === "birth_year" || name === "birth_month" || name === "birth_day" ? Number(value) : value;

        updateFormData({ [name]: updatedValue });
    };

    // formDataの変更を監視し、変更があったときにバリデーションを実行
    useEffect(() => {
        validateForm();
    }, [formData]);  // formDataが変更されたときにバリデーションを実行
        // フォームのバリデーションを行う関数
    const validateForm = async () => {
        try {
            await userInformationsSchema.parseAsync(formData);  // 最新のformDataをバリデーション
            setErrors({});
            setIsFormValid(true);  // バリデーション成功時にtrue
        } catch (error) {
            if (error instanceof z.ZodError) {
                const newErrors: any = {};
                error.errors.forEach((err) => {
                const fieldName = err.path[0] as keyof FormData;
                newErrors[fieldName] = err.message;
                });
                setErrors(newErrors);  // バリデーションエラーの設定
            }
            setIsFormValid(false);  // バリデーション失敗時にfalse
            console.log(errors)
        }
    };

    useEffect(() => {
        if(isFormValid){
            setIsErrorShow(false);
        }
        setPage1IsValid(isFormValid);
    },[isFormValid,setPage1IsValid])


    const handleImageChange=(e:React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        const name = e.target.name;
        if(file){
            const reader = new FileReader();
            reader.onloadend=()=>{
                updateFormData({[name]:reader.result as string});
            };
            reader.readAsDataURL(file);
        }
    }

    const handleNextButton=()=>{
        if(!isFormValid){
            setIsErrorShow(true);
            window.alert("入力に誤りがあります")
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
                    {(errors.last_name && isErrorShow) && <p className="ml-5" style={{ color: "red" }}>{errors.last_name}</p>}
                    {errors.first_name && isErrorShow && <p className="ml-5" style={{ color: "red" }}>{errors.first_name}</p>} 

                    <NameComp className="!self-stretch !w-full" text="セイ" text1="ヤマダ" text2="メイ" text3="タロウ" lastValue={formData.last_name_kana} firstValue={formData.first_name_kana} lastName="last_name_kana" firstName="first_name_kana" handleChange={handleChange}/>
                    {errors.last_name_kana && isErrorShow && <p className="ml-5" style={{ color: "red" }}>{errors.last_name_kana}</p>}
                    {errors.first_name_kana && isErrorShow && <p className="ml-5" style={{ color: "red" }}>{errors.first_name_kana}</p>} 

                    <ItemsComp className="!flex-[0_0_auto]" text="生年月日" />
                    <DateComp className="!self-stretch !w-full" year={formData.birth_year} year_name="birth_year" month={formData.birth_month} month_name="birth_month" day={formData.birth_day} day_name="birth_day" handleChange={handleChange}/>
                    {errors.birth_year && isErrorShow && <p className="ml-5" style={{ color: "red" }}>{errors.birth_year}</p>}
                    {errors.birth_month && isErrorShow && <p className="ml-5" style={{ color: "red" }}>{errors.birth_month}</p>} 
                    {errors.birth_day && isErrorShow && <p className="ml-5" style={{ color: "red" }}>{errors.birth_day}</p>} 
                    
                    <ItemsComp className="!flex-[0_0_auto]" text="性別" />
                    <GenderComp className="!self-stretch !w-full" value={formData.gender} name="gender" handleChange={handleChange}/>
                    {errors.gender && isErrorShow && <p className="ml-5" style={{ color: "red" }}>{errors.gender}</p>} 

                    <ItemsComp className="!flex-[0_0_auto]" text="郵便番号" />
                    <PostCodeComp className="!self-stretch !w-full" value={formData.postal_code} name="postal_code" handleChange={handleChange}/>
                    {errors.postal_code && isErrorShow && <p style={{ color: "red" }}>{errors.postal_code}</p>} 

                    <ItemsComp className="!flex-[0_0_auto]" text="都道府県" />
                    <PrefecturesComp className="!self-stretch !w-full" value={formData.prefecture} name="prefecture" handleChange={handleChange}/>
                    {errors.prefecture && isErrorShow && <p className="ml-5" style={{ color: "red" }}>{errors.prefecture}</p>} 

                    <ItemsComp className="!flex-[0_0_auto]" text="市区町村" />
                    <BaseTextComp className="!self-stretch !w-full" value={formData.city} name={"city"} handleChange={handleChange} />
                    {errors.city && isErrorShow && <p className="ml-5" style={{ color: "red" }}>{errors.city}</p>} 

                    <ItemsComp className="!flex-[0_0_auto]" text="番地・建物名" />
                    <BaseTextComp className="!self-stretch !w-full" text="〇番地 00-00-00" value={formData.address} name={"address"} handleChange={handleChange} />
                    {errors.address && isErrorShow && <p className="ml-5" style={{ color: "red" }}>{errors.address}</p>} 

                    <ItemsComp className="!flex-[0_0_auto]" text="電話番号" />
                    <BaseTextComp className="!self-stretch !w-full" text="" value={formData.phone_number} name={"phone_number"} handleChange={handleChange}/>
                    {errors.phone_number && isErrorShow && <p className="ml-5" style={{ color: "red" }}>{errors.phone_number}</p>} 

                    <ItemsComp className="!flex-[0_0_auto]" text="メールアドレス" />
                    <BaseTextComp className="!self-stretch !w-full" text="" value={formData.email_address} name={"email_address"} handleChange={handleChange}/>
                    {errors.email_address && isErrorShow && <p className="ml-5" style={{ color: "red" }}>{errors.email_address}</p>} 

                    <ItemsAnyComp className="!flex-[0_0_auto]" text="証明写真" />
                    <UploadImgComp className="!self-stretch !w-full" formData={formData} handleChange={handleImageChange} />

                    <CheckedBackNextComp 
                        className="!self-stretch !w-full" 
                        img="/img/userinfo/subtract-7.svg" 
                        subtract="/img/userinfo/subtract-6.svg" 
                        topLink="/top" 
                        nextLink="../backgroundhanyo" 
                        isValid={isFormValid}
                        handle={handleNextButton}
                    />

                </div>
            </div>
        </main>


    );

}