/*
  Warnings:

  - A unique constraint covering the columns `[user_id,order_num]` on the table `educations` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[user_id,order_num]` on the table `employments` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "educations_user_id_order_num_key" ON "educations"("user_id", "order_num");

-- CreateIndex
CREATE UNIQUE INDEX "employments_unique_user_order" ON "employments"("user_id", "order_num");

-- RenameIndex
ALTER INDEX "unique_user_order" RENAME TO "job_histories_unique_user_order";
