import prisma from "~/utils/prismaClient";

export const upsertFormDataPrisma = async (jsonData: any, tableName: any) => {
  try {
    // Prismaの `upsert` を使用してデータを挿入または更新
    const data = await prisma[tableName].upsert({
      where: {
        user_id: jsonData.user_id, // `user_id`が一致するレコードを探す
      },
      update: jsonData, // 既存レコードがある場合は更新
      create: jsonData, // レコードが存在しない場合は新規作成
    });

    return data;
  } catch (err) {
    console.error("データの保存または更新中にエラーが発生しました:", err);
    throw err;
  } finally {
    await prisma.$disconnect(); // 接続を切断
  }
};
