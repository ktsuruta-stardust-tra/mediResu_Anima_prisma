import * as Yup from "yup";

// 学歴フォームのバリデーションスキーマ
export const educationValidationSchema = Yup.object().shape({
  education_start_year: Yup.number()
    .required("開始年は必須です")
    .min(1900, "開始年は1900以上にしてください")
    .max(new Date().getFullYear(), `開始年は${new Date().getFullYear()}以下にしてください`),
  education_start_month: Yup.number()
    .required("開始月は必須です")
    .min(1, "開始月は1以上にしてください")
    .max(12, "開始月は12以下にしてください"),
  education_end_year: Yup.number()
    .required("終了年は必須です")
    .min(1900, "終了年は1900以上にしてください")
    .max(new Date().getFullYear(), `終了年は${new Date().getFullYear()}以下にしてください`),
  education_end_month: Yup.number()
    .required("終了月は必須です")
    .min(1, "終了月は1以上にしてください")
    .max(12, "終了月は12以下にしてください"),
  school_name: Yup.string().required("学校名は必須です"),
});

// 職歴フォームのバリデーションスキーマ
export const employmentValidationSchema = Yup.object().shape({
  job_start_year: Yup.number()
    .required("開始年は必須です")
    .min(1900, "開始年は1900以上にしてください")
    .max(new Date().getFullYear(), `開始年は${new Date().getFullYear()}以下にしてください`),
  job_start_month: Yup.number()
    .required("開始月は必須です")
    .min(1, "開始月は1以上にしてください")
    .max(12, "開始月は12以下にしてください"),
  job_end_year: Yup.number()
    .required("終了年は必須です")
    .min(1900, "終了年は1900以上にしてください")
    .max(new Date().getFullYear(), `終了年は${new Date().getFullYear()}以下にしてください`),
  job_end_month: Yup.number()
    .required("終了月は必須です")
    .min(1, "終了月は1以上にしてください")
    .max(12, "終了月は12以下にしてください"),
  company_name: Yup.string().required("会社名は必須です"),
});
