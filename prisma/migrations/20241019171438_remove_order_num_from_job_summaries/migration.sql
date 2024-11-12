/*
  Warnings:

  - You are about to drop the column `order_num` on the `job_summaries` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[user_id]` on the table `job_summaries` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "job_summaries_unique_user_order";

-- AlterTable
ALTER TABLE "job_summaries" DROP COLUMN "order_num";

-- CreateIndex
CREATE UNIQUE INDEX "job_summaries_unique_user" ON "job_summaries"("user_id");
