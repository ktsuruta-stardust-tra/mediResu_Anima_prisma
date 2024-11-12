/*
  Warnings:

  - You are about to alter the column `job_details` on the `job_histories` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(1000)`.

*/
-- AlterTable
ALTER TABLE "job_histories" ALTER COLUMN "employment_type" SET DATA TYPE TEXT,
ALTER COLUMN "job_details" SET DATA TYPE VARCHAR(1000);
