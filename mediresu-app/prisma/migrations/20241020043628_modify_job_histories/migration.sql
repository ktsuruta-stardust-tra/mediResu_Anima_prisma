/*
  Warnings:

  - Made the column `employment_type` on table `job_histories` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "job_histories" ALTER COLUMN "employment_type" SET NOT NULL;
