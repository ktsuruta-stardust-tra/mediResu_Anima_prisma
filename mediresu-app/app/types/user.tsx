import { Prisma } from "@prisma/client";

export type UserInfo = {

    user_id: number;                 // ユーザーID (int, 必須)
    last_name: string;               // 苗字 (varchar(50), 必須)
    first_name: string;              // 名前 (varchar(50), 必須)
    last_name_kana: string;          // 苗字カナ (varchar(50), 必須)
    first_name_kana: string;         // 名前カナ (varchar(50), 必須)
    birth_year: number;              // 生年 (int, 必須)
    birth_month: number;             // 生月 (smallint, 必須)
    birth_day: number;               // 生日 (smallint, 必須)
    postal_code: string;             // 郵便番号 (varchar(10), 必須)
    prefecture: string;              // 都道府県 (varchar(50), 必須)
    city: string;                    // 市区町村 (varchar(100), 必須)
    address: string;                 // 住所 (varchar(255), 必須)
    phone_number: string;            // 電話番号 (varchar(20), 必須)
    email_address: string;           // メールアドレス (varchar(100), 必須)
    alternate_email_address?: string; // 代替メールアドレス (varchar(100), 任意)
    alternate_contact?: string;       // 代替連絡先 (varchar(100), 任意)

  };


export const createInitialUserInfo = (user_id:number) =>{
  return{
    user_id,
    last_name: "",
    first_name: "",
    last_name_kana: "",
    first_name_kana: "",
    birth_year: 0,
    birth_month: 0,
    birth_day: 0,
    postal_code: "",
    prefecture: "",
    city: "",
    address: "",
    phone_number: "",
    email_address: "",
  }
}


//   // デフォルトのUserInfoオブジェクト
// export const defaultUserInfo: UserInfo = {
//   id: null,
//   user_id: 1,
//   last_name: "",
//   first_name: "",
//   last_name_kana: "",
//   first_name_kana: "",
//   birth_year: 0,
//   birth_month: 0,
//   birth_day: 0,
//   postal_code: "",
//   prefecture: "",
//   city: "",
//   address: "",
//   phone_number: "",
//   email_address: "",
//   alternate_email_address: undefined,
//   alternate_contact: undefined,
// };

export type UserEducations = {
  id?: number | null; 
  user_id:number;
  education_start_year:number;
  education_start_month:number;
  education_end_year:number;
  education_end_month:number;
  school_name:string;
  order_num:number;
  create_at?:string | null;
  update_at?:string | null;
}

export const createInitialUserEducation = (user_id:number) => {
  return[{

    user_id,
    education_start_year: 0, 
    education_start_month: 0, 
    education_end_year: 0, 
    education_end_month: 0, 
    school_name: "", 
    order_num: 1 

  }]
}


export const createDefaultEducation = (user_id:number) =>{
  return {
    user_id,
    education_start_year: 0,
    education_start_month: 0,
    education_end_year: 0,
    education_end_month: 0,
    school_name: "",
    order_num: 1,
  }
}

export type UserEmployments = {
  id?: number | null; 
  user_id:number;
  job_start_year:number;
  job_start_month:number;
  job_end_year:number;
  job_end_month:number;
  company_name:string;
  order_num:number;
  create_at?:string | null;
  update_at?:string | null;
}


export const createInitialEmployment = (user_id:number) :Prisma.employmentsCreateManyInput[]=> {
  return[{

    user_id,
    job_start_year:0,
    job_start_month:0,
    job_end_year:0,
    job_end_month:0,
    company_name:"",
    order_num:1,

  }]
}

export const createDefaultEmployment = (user_id:number) =>{
  return {
    user_id,
    job_start_year:0,
    job_start_month:0,
    job_end_year:0,
    job_end_month:0,
    company_name:"",
    order_num:1,
  }
}

export type UserLicenses={

  user_id:number;
  license_year:number;
  license_month:number;
  license_name:string;
  order_num:number;

}
export const createInitialLicense = (user_id:number) => {
  return[{

    user_id,
    license_year:0,
    license_month:0,
    license_name:"",
    order_num:1,

  }]
}

export const createDefaultLicense = (user_id:number) =>{
  return {
    user_id,
    license_year:0,
    license_month:0,
    license_name:"",
    order_num:1,
  }
}


export type UserSelfPr={

  user_id:number;
  self_pr_text:string;

}
export const createInitialUserSelfPr = (user_id:number) =>{
  return{
    user_id,
    self_pr_text:"",
  }
}