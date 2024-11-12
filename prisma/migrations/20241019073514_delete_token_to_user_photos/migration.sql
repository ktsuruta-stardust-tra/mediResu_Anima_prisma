/*
  Warnings:

  - You are about to drop the column `token` on the `user_photos` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "user_photos_token_key";

-- AlterTable
ALTER TABLE "user_photos" DROP COLUMN "token";
