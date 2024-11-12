import { json } from "@remix-run/react";
import { supabase } from "~/utils/supabaseClient";

export const upsertUserExperienceData = async (jsonData:any,tableName:string) =>{
    try{
        const userId = jsonData.user_id; 
        const{data,error } = await supabase.from(tableName).select("*").eq("user_id",userId).single();

        if(error && error.code !== "PGRST116"){
            throw error;
        }

        if(!data){
            const{error:insertError} = await supabase.from(tableName).insert(jsonData);
            if(insertError) throw insertError;
        }else{
            const{error:updateError} = await supabase.from(tableName).update(jsonData).eq("id",data.id);

            if(updateError) throw updateError;
        }
    }catch(err){
        console.error("データの保存または更新中にエラーが発生しました:", err);
    }
}