import { json } from "@remix-run/react";
import { supabase } from "~/utils/supabaseClient";
import prisma from "~/utils/prismaClient";

export const deleteUserData = async (userId: number, tableName: string) => {
    try {

        const { error } = await supabase.from(tableName).delete().eq("user_id", userId);
        
        if (error) {
            console.error(`Failed to delete data from ${tableName} for user_id: ${userId}`, error);
            return {
                status: "error",
                message: `Failed to delete data from ${tableName} for user_id: ${userId}`,
                details: error.message,
            };
        }
        
        return { status: "success" };
    } catch (error) {
        console.error(`Unexpected error during deletion from ${tableName} for user_id: ${userId}`, error);
        return {
            status: "error",
            message: `Unexpected error during deletion from ${tableName}`,
            details: error instanceof Error ? error.message : "Unknown error",
        };
    }
};

export const insertUserOperations = async (userId: number,itemIds:any, tableName: string) => {

    const userOperationsInserts = itemIds.map((operationId:any) => ({
        user_id:userId,
        operation_id:operationId,
    }));

    try{
        const { error }  = await supabase.from(tableName).insert(userOperationsInserts)
        if (error) {
            console.error(`Failed to Insert data from ${tableName} for user_id: ${userId}`, error);
            return {
                status: "error",
                message: `Failed to Insert data from ${tableName} for user_id: ${userId}`,
                details: error.message,
            };
        }
        
        return { status: "success" };
    } catch (error) {
        console.error(`Unexpected error during Inserting from ${tableName} for user_id: ${userId}`, error);
        return {
            status: "error",
            message: `Unexpected error during Inserting from ${tableName}`,
            details: error instanceof Error ? error.message : "Unknown error",
        };
    }
}

export const insertSupplementaryTexts = async (userId: number,otherTexts:any, tableName: string) => {

    const supplementaryInserts  = Object.entries(otherTexts).map(([operationId , inputText]) => ({
        operation_id: parseInt(operationId, 10),
        input_text: inputText,
        user_id: userId,
    }));

    try{
        const { error }  = await supabase.from(tableName).insert(supplementaryInserts)
        if (error) {
            console.error(`Failed to Insert data from ${tableName} for user_id: ${userId}`, error);
            return {
                status: "error",
                message: `Failed to Insert data from ${tableName} for user_id: ${userId}`,
                details: error.message,
            };
        }
        
        return { status: "success" };
    } catch (error) {
        console.error(`Unexpected error during Inserting from ${tableName} for user_id: ${userId}`, error);
        return {
            status: "error",
            message: `Unexpected error during Inserting from ${tableName}`,
            details: error instanceof Error ? error.message : "Unknown error",
        };
    }
}