/*
  Warnings:

  - Added the required column `gender` to the `user_informations` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "user_informations" ADD COLUMN     "gender" VARCHAR(3) NOT NULL ;
