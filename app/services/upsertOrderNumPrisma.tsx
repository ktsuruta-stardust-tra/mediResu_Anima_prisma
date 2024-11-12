
import prisma from "~/utils/prismaClient";

export const upsertOrderNumPrisma = async (prismaData:any, tableName:string) => {
    try {

        // Prismaのupsertメソッドを使用して、user_idとorder_numを基準にデータを挿入または更新
        const data = await prisma[tableName].upsert({
          where: {
            // ユニーク制約に基づく絞り込み
            user_id_order_num: {
              user_id: prismaData.user_id,
              order_num: prismaData.order_num,
            },
          },
          update: {
            // レコードが存在した場合に更新するデータ
            ...prismaData,
            updated_at: new Date(), // 更新日時の設定
          },
          create: {
            // レコードが存在しない場合に新しく作成するデータ
            ...prismaData,
            created_at: new Date(), // 作成日時の設定
            updated_at: new Date(),
          },
        });
    
        return data;
      } catch (err) {
        console.error("データの保存または更新中にエラーが発生しました:", err);
        throw err;
      }
    };
