/*
  Warnings:

  - Added the required column `education_end_status` to the `educations` table without a default value. This is not possible if the table is not empty.
  - Made the column `education_end_year` on table `educations` required. This step will fail if there are existing NULL values in that column.
  - Made the column `education_end_month` on table `educations` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `job_start_status` to the `employments` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable for "educations"
ALTER TABLE "educations" 
ADD COLUMN "education_end_status" TEXT NOT NULL DEFAULT '卒業';

-- education_end_year and education_end_month columns should be altered separately
ALTER TABLE "educations"
ALTER COLUMN "education_end_year" SET NOT NULL,
ALTER COLUMN "education_end_month" SET NOT NULL;

-- AlterTable for "employments"
ALTER TABLE "employments" 
ADD COLUMN "job_start_status" TEXT NOT NULL DEFAULT '入社';

