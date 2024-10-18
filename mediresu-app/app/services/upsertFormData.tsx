import { supabase } from "~/utils/supabaseClient";

export const upsertFormData = async (jsonData:any, tableName:any) => {
    try {
        const { data, error } = await supabase
            .from(tableName)
            .upsert(jsonData, { onConflict: "user_id" }) // user_idが一致する場合に更新
            .single();

        if (error) {
            throw error;
        }

        return data;
    } catch (err) {
        console.error("データの保存または更新中にエラーが発生しました:", err);
    }
};
