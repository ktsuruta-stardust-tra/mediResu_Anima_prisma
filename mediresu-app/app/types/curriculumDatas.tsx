export type UserExperienceType = {
    user_id: number;                 // ユーザーID (int, 必須)
    windows: boolean;
    mac: boolean; 
    microsoft_word:boolean;
    microsoft_excel:boolean;
    microsoft_powerpoint:boolean;
    poster_design:boolean;
    sns_update:boolean;
    brochure_creation:boolean;
    other_checked:boolean;
    other_experience:string;
  };

  
// 初期値を生成する関数
export const createDefaultUserExperience = (user_id: number) => {
  return {
      // id: null,
      user_id,
      windows: false,
      mac: false,
      microsoft_word: false,
      microsoft_excel: false,
      microsoft_powerpoint: false,
      poster_design: false,
      sns_update: false,
      brochure_creation: false,
      other_checked: false,
      other_experience: "",
      // create_at: null,
      // update_at: null,
  };
};


export type UserJobHistoryType = {
  user_id: number;                 // ユーザーID (int, 必須)
  company_name:string;
  job_start_year:number;
  job_start_month:number;
  job_end_year:number;
  job_end_month:number;
  employment_type:string;
  job_details:string;
  order_num:number;
};

export const createDefaultUserJobHistory = (user_id: number) => {
  return {

    user_id,
    company_name:"",
    job_start_year:0,
    job_start_month:0,
    job_end_year:0,
    job_end_month:0,
    employment_type:"",
    job_details:"",
    order_num:1,

  };
};

export const createInitialUserJobHistory = (user_id: number) => {
  return [{

    user_id,
    company_name:"",
    job_start_year:0,
    job_start_month:0,
    job_end_year:0,
    job_end_month:0,
    employment_type:"",
    job_details:"",
    order_num:1,

  }];
};

export type UserJobSummaryType = {
  user_id: number;                 // ユーザーID (int, 必須)
  summary:string;
  order_num:number;
};

export const createDefaultUserJobSummary = (user_id: number) => {
  return {

    user_id,
    summary:"",
    order_num:1,

  };
};

export const createInitialUserJobSummary = (user_id: number) => {
  return {
    user_id,
    summary:"",
  };
};


export type UserSillsExperiencesType = {
  user_id: number;                 // ユーザーID (int, 必須)
  skills:string;
};


// 初期値を生成する関数
export const createInitialSkillExperience = (user_id: number) => {
  return {
      // id: null,
      user_id,
      skills: "",
      // create_at: null,
      // update_at: null,
  }
};
