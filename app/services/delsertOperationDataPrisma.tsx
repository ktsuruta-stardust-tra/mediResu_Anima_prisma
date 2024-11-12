import { json } from "@remix-run/react";
import { supabase } from "~/utils/supabaseClient";
import prisma from "~/utils/prismaClient";

export const deleteUserDataPrisma = async (userId: number, tableName: any) => {
    try {
        // テーブルごとに動的に削除を行う
        const result = await prisma[tableName].deleteMany({
          where: { user_id: userId },
        });
      
        // 削除件数が0でもエラーにしないでスキップする
        return { status: "success", deletedCount: result.count };
        
      } catch (error) {
        console.error(`Unexpected error during deletion from ${tableName} for user_id: ${userId}`, error);
        return {
          status: "error",
          message: `Unexpected error during deletion from ${tableName}`,
          details: error instanceof Error ? error.message : "Unknown error",
        };
      }
};

export const insertUserOperationsPrisma = async (userId: number,itemIds:any, tableName: any) => {

    const userOperationsInserts = itemIds.map((operationId:any) => ({
        user_id: userId,
        operation_id: operationId,
      }));
    
      try {
        const result = await prisma[tableName].createMany({
          data: userOperationsInserts,
        });
    
        if (result.count === 0) {
          console.error(`Failed to insert data into ${tableName} for user_id: ${userId}`);
          return {
            status: "error",
            message: `Failed to insert data into ${tableName} for user_id: ${userId}`,
          };
        }
    
        return { status: "success" };
      } catch (error) {
        console.error(`Unexpected error during inserting into ${tableName} for user_id: ${userId}`, error);
        return {
          status: "error",
          message: `Unexpected error during inserting into ${tableName}`,
          details: error instanceof Error ? error.message : "Unknown error",
        };
      }
}

export const insertSupplementaryTextsPrisma = async (userId: number,otherTexts:any, tableName: string) => {

    const supplementaryInserts = Object.entries(otherTexts).map(([operationId, inputText]) => ({
        operation_id: parseInt(operationId, 10),
        input_text: inputText,
        user_id: userId,
      }));
    
      try {
        const result = await prisma[tableName].createMany({
          data: supplementaryInserts,
        });
    
        // if (result.count === 0) {
        //   console.error(`Failed to insert data into ${tableName} for user_id: ${userId}`);
        //   return {
        //     status: "error",
        //     message: `Failed to insert data into ${tableName} for user_id: ${userId}`,
        //   };
        // }
    
        return { status: "success" };
      } catch (error) {
        console.error(`Unexpected error during inserting into ${tableName} for user_id: ${userId}`, error);
        return {
          status: "error",
          message: `Unexpected error during inserting into ${tableName}`,
          details: error instanceof Error ? error.message : "Unknown error",
        };
      }
};