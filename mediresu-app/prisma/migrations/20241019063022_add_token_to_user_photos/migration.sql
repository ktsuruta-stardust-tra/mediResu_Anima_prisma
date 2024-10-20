/*
  Warnings:

  - A unique constraint covering the columns `[token]` on the table `user_photos` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `token` to the `user_photos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "user_photos" ADD COLUMN     "token" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "user_photos_token_key" ON "user_photos"("token");
