import { createClient } from "@supabase/supabase-js";
const SUPABASE_URL = "https://gwzenjywepmhjehdfyls.supabase.co"
const SUPABASE_ANON_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd3emVuanl3ZXBtaGplaGRmeWxzIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyNzU0MDc0NiwiZXhwIjoyMDQzMTE2NzQ2fQ.BG7w_5mq__1XJnbadS9w9yfGfPGuhmi7S9MreW_EKMs"
//const SUPABASE_URL= process.env.SUPABASE_URL!;
//const SUPABASE_ANON_KEY=process.env.SUPABASE_ANON_KEY!;

export const supabase = createClient(SUPABASE_URL,SUPABASE_ANON_KEY);

export async function saveFormDataToSupabase(tableName:string,formData:any){
    
    
    try{
        const { data, error} = await supabase.from(tableName).insert(formData);
    
        if(error){
            console.error(`Error saving data to ${tableName}:`, error);
            return { success: false, error: error.message }; 
        }

        console.log(`Data saved successfully to ${tableName}:`, data);
        return { success: true, data }; // 成功した場合のデータを返す

    }catch {
        // エラーの詳細は不要なので、エラーメッセージを一律に返す
        console.error(`Unexpected error occurred during save`);
        return { success: false, error: '不明なエラーが発生しました' }; // 不明なエラーとして返す
    }
}