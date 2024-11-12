import * as Yup from 'yup';

// バリデーションスキーマの作成
export const userInfoSchema = Yup.object().shape({
  last_name: Yup.string()
    .required('苗字は必須です')
    .max(50, '苗字は50文字以内で入力してください'),
  first_name: Yup.string()
    .required('名前は必須です')
    .max(50, '名前は50文字以内で入力してください'),
  last_name_kana: Yup.string()
    .matches(/^[ァ-ンヴー]*$/, '苗字カナは全角カナで入力してください')
    .required('苗字カナは必須です')
    .max(50, '苗字カナは50文字以内で入力してください'),
  first_name_kana: Yup.string()
    .matches(/^[ァ-ンヴー]*$/, '名前カナは全角カナで入力してください')
    .required('名前カナは必須です')
    .max(50, '名前カナは50文字以内で入力してください'),
  birth_year: Yup.number()
    .required('生年は必須です')
    .min(1900, '生年は1900年以降でなければなりません')
    .max(new Date().getFullYear(), '生年は現在の年以下でなければなりません'),
  birth_month: Yup.number()
    .required('生月は必須です')
    .min(1, '生月は1以上でなければなりません')
    .max(12, '生月は12以下でなければなりません'),
  birth_day: Yup.number()
    .required('生日は必須です')
    .min(1, '生日は1以上でなければなりません')
    .max(31, '生日は31以下でなければなりません'),
  postal_code: Yup.string()
    .matches(/^\d{3}-\d{4}$/, '郵便番号はXXX-XXXXの形式で入力してください')
    .required('郵便番号は必須です'),
  prefecture: Yup.string()
    .required('都道府県は必須です')
    .max(50, '都道府県は50文字以内で入力してください'),
  city: Yup.string()
    .required('市区町村は必須です')
    .max(100, '市区町村は100文字以内で入力してください'),
  address: Yup.string()
    .required('住所は必須です')
    .max(255, '住所は255文字以内で入力してください'),
  phone_number: Yup.string()
    .matches(/^[0-9-+]*$/, '電話番号は数字とハイフンのみを使用してください')
    .required('電話番号は必須です')
    .max(20, '電話番号は20文字以内で入力してください'),
  email_address: Yup.string()
    .email('有効なメールアドレスを入力してください')
    .required('メールアドレスは必須です')
    .max(100, 'メールアドレスは100文字以内で入力してください'),
  alternate_email_address: Yup.string()
    .email('有効なメールアドレスを入力してください')
    .max(100, '代替メールアドレスは100文字以内で入力してください'),
});
