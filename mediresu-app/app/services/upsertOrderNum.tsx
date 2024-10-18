import { json } from "@remix-run/react";
import { supabase } from "~/utils/supabaseClient";

export const upsertOrderNum = async (jsonData:any, tableName:string) => {
    try {
        const { data, error } = await supabase
            .from(tableName)
            .upsert(jsonData, { onConflict: "user_id, order_num" }) // user_id と order_num が一致する場合に更新
            .single();

        if (error) {
            throw error;
        }

        return data;
    } catch (err) {
        console.error("データの保存または更新中にエラーが発生しました:", err);
    }
};
