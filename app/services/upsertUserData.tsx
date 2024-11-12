import { json } from "@remix-run/react";
import { supabase } from "~/utils/supabaseClient";

export const upsertUserBasicInfomation = async (jsonData:any,tableName:string) =>{
    let error = "";


    try{

        if(jsonData.id){
            if("create_at" in jsonData)delete jsonData.create_at;
            if("update_at" in jsonData)delete jsonData.update_at;    
            const {error:updateError} = await supabase.from(tableName).update(jsonData).eq("id",jsonData.id);

            if(updateError){
                throw new Response("Error updating data", {status:500});
            }
        }
        else{

            // console.log("insert",tableName)
            // console.log(jsonData)

            delete jsonData.id;
            if("create_at" in jsonData)delete jsonData.create_at;
            if("update_at" in jsonData)delete jsonData.update_at;

            const {error:insertError} = await supabase.from(tableName).insert(jsonData);
            if(insertError){
                throw new Response("Error inserting data", {status:500});
        
            }
        }
    }catch(err:any){
        error = err.message;
    }

    if(error){
        return {success:false,error};
    }

    return {success:true};

}

export const upsertUserBackgroundData = async (jsonDatas:any[],tableName:string) =>{
    let errors =[]
    for(const jsonData of jsonDatas){
        // console.log("upsert")
        // console.log(jsonData)
        const result = upsertUserBasicInfomation(jsonData,tableName);
        if(!result){
            return result;
        }
    }

    return {success:true};


}