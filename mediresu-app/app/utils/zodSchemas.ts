import { z } from "zod";
import { prefectures } from "./prefecturesList";


// Zodのカスタムエラーマップを作成
export const customErrorMap: z.ZodErrorMap = (issue, _ctx) => {
  if (issue.code === z.ZodIssueCode.invalid_type) {
    if (issue.expected === "number" && issue.received === "null") {
      return { message: "数値が必要です。nullは許可されていません。" };
    }
  }
  return { message: "無効な入力です" };
};

// categoriesスキーマ
export const categoriesSchema = z.object({
  id: z.number().int().optional(),
  name: z.string().max(255, "名前は255文字以内で入力してください"),
});

export const educationsSchema = z.object({
  id: z.number().int().optional(),
  user_id: z.number().int(),
  education_start_year: z.number().min(1900, "開始年は1900年以上で入力してください"),
  education_start_month: z.number().min(1, "開始月は1以上で入力してください").max(12, "開始月は12以下で入力してください"),
  education_end_year: z.number().min(1900, "終了年は1900年以上で入力してください"),
  education_end_month: z.number().min(1, "終了月は1以上で入力してください").max(12, "終了月は12以下で入力してください"),
  education_end_status: z.string().min(2, "卒業～中退を選択してください").default("未"),
  school_name: z.string().min(1, "学校名は必須です").max(100, "学校名は100文字以内で入力してください"),
  order_num: z.number().int().default(0),
  // created_at: z.date().optional().nullable(),
  // updated_at: z.date().optional().nullable(),
  }).refine((data) => {
    // 終了年が開始年よりも後であればバリデーション成功
    if (data.education_end_year > data.education_start_year) {
      return true;
    }
    // 終了年と開始年が同じ場合は、終了月が開始月より後であれば成功
    if (data.education_end_year === data.education_start_year) {
      return data.education_end_month > data.education_start_month;
    }
    // 終了年が開始年よりも前の場合
    return false;
  }, {
    message: "終了年は開始年と同年かそれ以降の年にしてください。同年の場合、終了月は開始月より後にしてください。",
    path: ["education_end_year"],
});


// employmentsスキーマ
export const employmentsSchema = z.object({
  id: z.number().int().optional(),
  user_id: z.number().int(),
  job_start_year: z.number().min(1900, "開始年は1900年以降で入力してください"),
  job_start_month: z.number().min(1, "開始月は1以上で入力してください").max(12, "開始月は12以下で入力してください"),
  job_start_status: z.string().min(2,"入社、入職を選択してください").default("未"),
  job_end_year: z.number().nullable(),
  job_end_month: z.number().max(12,"開始月は12以下で入力してください").nullable(),
  company_name: z.string().min(1,"会社名は必須です").max(100, "会社名は100文字以内で入力してください"),
  order_num: z.number().int(),
  // created_at: z.date().optional().nullable(),
  // updated_at: z.date().optional().nullable(),
});

// job_historiesスキーマ
export const jobHistoriesSchema = z.object({
  id: z.number().int().optional(),
  user_id: z.number().int(),
  // company_name: z.string().max(255).nullable(),
  // job_start_year: z.number().min(1900).nullable(),
  // job_start_month: z.number().min(1).max(12).nullable(),
  // job_start_status: z.string().nullable(),
  // job_end_year: z.number().min(1900).nullable(),
  // job_end_month: z.number().min(1).max(12).nullable(),
  employment_type: z.string().min(2,"雇用形態を選択してください").default("未"),
  job_details: z.string().max(1000, "仕事内容は1000文字以内で入力してください").nullable(),
  // order_num: z.number().int().nullable(),
  // created_at: z.date().optional(),
  // updated_at: z.date().optional(),
});

// job_summariesスキーマ(職務要約)
export const jobSummariesSchema = z.object({
  id: z.number().int().optional(),
  // user_id: z.number().int(),
  summary: z.string().min(1,"入力は必須です").max(500,"500文字以内で入力してください"),
  // created_at: z.date().optional(),
  // updated_at: z.date().optional(),
});

// licensesスキーマ
export const licensesSchema = z.object({
  id: z.number().int().optional(),
  user_id: z.number().int(),
  license_year: z.number().min(1900),
  license_month: z.number().min(1).max(12),
  license_name: z.string().max(100, "資格名は100文字以内で入力してください"),
  order_num: z.number().int(),
  created_at: z.date().optional(),
  updated_at: z.date().optional(),
});

// operationsスキーマ
export const operationsSchema = z.object({
  id: z.number().int().optional(),
  category_id: z.number().int().nullable(),
  name: z.string().max(255, "名前は255文字以内で入力してください"),
});

// self_prsスキーマ
export const selfPrsSchema = z.object({
  // id: z.number().int().optional(),
  // user_id: z.number().int(),
  self_pr_text: z.string().max(250,"250文字以内で入力してください").nullable(),
  // created_at: z.date().optional(),
  // updated_at: z.date().optional(),
});

// skills_experiencesスキーマ(活かせる経験・知識・技術)
export const skillsExperiencesSchema = z.object({
  // id: z.number().int().optional(),
  // user_id: z.number().int(),
  skills: z.string().max(500,"500文字以内で入力してください").nullable(),
  // created_at: z.date().optional(),
  // updated_at: z.date().optional(),
});

// supplementary_textsスキーマ
export const supplementaryTextsSchema = z.object({
  id: z.number().int().optional(),
  operation_id: z.number().int().nullable(),
  input_text: z.string(),
  user_id: z.number().int(),
  created_at: z.date().optional(),
  updated_at: z.date().optional(),
});

// user_basic_infoスキーマ
export const userBasicInfoSchema = z.object({
  id: z.number().int().optional(),
  lineid: z.string().max(50, "LINE IDは50文字以内で入力してください"),
  last_name: z.string().max(50).nullable(),
  first_name: z.string().max(50).nullable(),
  last_name_kana: z.string().max(50).nullable(),
  first_name_kana: z.string().max(50).nullable(),
  birth_year: z.number().nullable(),
  birth_month: z.number().min(1).max(12).nullable(),
  birth_day: z.number().min(1).max(31).nullable(),
  postal_code: z.string().max(8).nullable(),
  prefecture: z.string().max(50).nullable(),
  city: z.string().max(100).nullable(),
  street_address: z.string().max(100).nullable(),
  phone_number: z.string().max(15).nullable(),
  email: z.string().email().nullable(),
  additional_contact: z.string().nullable(),
  id_photo: z.string().nullable(),
});

export const userInformationsSchema = z.object({
  last_name: z
    .string()
    .min(1, "姓は必須です")  // `min(1)`で非空チェックを実行
    .max(50, "姓は50文字以内で入力してください"),
  first_name: z
    .string()
    .min(1, "名は必須です")  // `min(1)`で非空チェックを実行
    .max(50, "名は50文字以内で入力してください"),
  last_name_kana: z
    .string()
    .min(1, "セイは必須です")
    .max(50, "姓のカナは50文字以内で入力してください")
    .regex(/^[ァ-ヶー]*$/, "姓のカナはカタカナで入力してください"),
  first_name_kana: z
    .string()
    .min(1, "メイは必須です")
    .max(50, "名のカナは50文字以内で入力してください")
    .regex(/^[ァ-ヶー]*$/, "名のカナはカタカナで入力してください"),
  birth_year: z
    .number()
    .min(1900, "生年は1900年以降で入力してください")
    .refine((val) => val !== null, { message: "生年は必須です" }),
  birth_month: z
    .number()
    .min(1, "月は1以上を入力してください")
    .max(12, "月は12以下で入力してください")
    .refine((val) => val !== null, { message: "月は必須です" }),
  birth_day: z
    .number()
    .min(1, "日は1以上を入力してください")
    .max(31, "日は31以下で入力してください")
    .refine((val) => val !== null, { message: "日は必須です" }),
  postal_code: z
    .string()
    .regex(/^\d{3}-\d{4}$/, "郵便番号はXXX-XXXXの形式で入力してください"),
  prefecture: z.string().min(1, "都道府県は必須です"),
  city: z.string().min(1, "市区町村は必須です"),  // 必須
  address: z.string().min(1, "番地・建物名は必須です"),  // 必須
  phone_number: z.string().min(10, "電話番号は10桁以上で入力してください").max(15, "電話番号は15桁以内で入力してください"),  // 必須
  email_address: z.string().email("有効なメールアドレスを入力してください"),  // 必須
  alternate_email_address: z.string().email("有効なメールアドレスを入力してください").optional().nullable(),  // 任意
  alternate_contact: z.string().optional().nullable(),  // 任意フィールド
  photo_base64: z.string().optional().nullable()  // 任意フィールド
});


export const userExperiencesSchema = z
  .object({
    // id: z.number().int().optional(),
    // user_id: z.number().int(),
    windows: z.boolean().default(false),
    mac: z.boolean().default(false),
    microsoft_word: z.boolean().default(false),
    microsoft_excel: z.boolean().default(false),
    microsoft_powerpoint: z.boolean().default(false),
    poster_design: z.boolean().default(false),
    sns_update: z.boolean().default(false),
    brochure_creation: z.boolean().default(false),
    other_checked: z.boolean().default(false),
    // other_experience: z.string().optional(),
    // created_at: z.date().optional(),
    // updated_at: z.date().optional(),
  })
  .refine(
    (data) =>
      data.windows ||
      data.mac ||
      data.microsoft_word ||
      data.microsoft_excel ||
      data.microsoft_powerpoint ||
      data.poster_design ||
      data.sns_update ||
      data.brochure_creation ||
      data.other_checked,
    {
      message: "少なくとも一つのスキルを選択してください",
      path: [
        "windows",
        "mac",
        "microsoft_word",
        "microsoft_excel",
        "microsoft_powerpoint",
        "poster_design",
        "sns_update",
        "brochure_creation",
        "other_checked",
      ],
    }
  );
