import { useState } from "react";
import { UserInfo,UserLicenses,UserEducations,UserEmployments } from "~/types/user";

export function useUserInfo(initialData:UserInfo){
    const [formData, setFormData] = useState(initialData);

    //前のデータと新しいデータの差分を更新？

    const updateFormData = (newData:Partial<UserInfo>) => {
        // console.log(formData);
        setFormData((prevData) => ({
            ...prevData,
            ...newData,
        }));
    };

  

    return {formData,updateFormData};
}




// export function useUserEducation(initialData: UserEducations[]) {

//     const defaultEducation: UserEducations = {
//         user_id:1234,
//         education_start_year: 0,
//         education_start_month: 0,
//         education_end_year: 0,
//         education_end_month: 0,
//         school_name: "",
//         order_num: 1, // 最初の順番
//     };

//     const [educationFormData, setEducationFormData] = useState<UserEducations[]>(
//       initialData.length >0 ? initialData:[defaultEducation]
//     );
  
//     // データを更新または追加する関数
//     const updateEducationFormData = (newData: Partial<UserEducations>) => {
//       setEducationFormData((prevData) => {
//         // order_num が一致するデータが存在するかチェック
//         const existingEducation = prevData.find(
//             (education) => education?.order_num === newData.order_num
//         );
  
//         if (existingEducation) {
//             // 一致するデータが存在する場合は更新
//             return prevData.map((education) =>
//                 education?.order_num === newData.order_num
//                 ? { ...education, ...newData }
//                 : education
//             );
//         } else {
//             // 一致しない場合は新しいデータを追加
//             const newEducation: UserEducations = {
//             user_id:1,
//             education_start_year: newData.education_start_year || 0,
//             education_start_month: newData.education_start_month || 0,
//             education_end_year: newData.education_end_year || 0,
//             education_end_month: newData.education_end_month || 0,
//             school_name: newData.school_name || "",
//             order_num: newData.order_num || prevData.length + 1,
//             };
//             return [...prevData, newEducation];
//         }
//     });
// };

// return { educationFormData, updateEducationFormData };
// }
// export function useUserEducation(initialData:UserEducations[]){

//     const [educationFormData,setEducationFormData] = useState<UserEducations[]>(initialData);

//     const updateEducationFormData = (newData:Partial<UserEducations>) =>{
//         setEducationFormData((prevData) => 
//             prevData.map((usereducation) => 
//                 (usereducation.order_num === newData.order_num ? {...usereducation,...newData}:usereducation))
//         );

//     };

//     return {educationFormData,updateEducationFormData};
// }