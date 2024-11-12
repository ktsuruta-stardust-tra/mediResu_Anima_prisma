import prisma from "./prismaClient";
import { Prisma } from "@prisma/client";


export const syncEmploymentsWithJobHistories = async (userId: number) => {
    
    // 1. job_historiesとemploymentsのデータを取得
    const [jobHistories, employments] = await Promise.all([
      prisma.job_histories.findMany({
        where: { user_id: userId },
      }),
      prisma.employments.findMany({
        where: { user_id: userId },
      })
    ]);
  
    // 2. employmentsのデータをjob_historiesにマッピングしていく
    const jobHistoriesToUpdate: Prisma.job_historiesUpdateInput[] = [];
    const jobHistoriesToCreate: Prisma.job_historiesCreateInput[] = [];
  
    // 3. 比較して対応するデータを格納
    for (const employment of employments) {
      const matchingJobHistory = jobHistories.find(jh => jh.order_num === employment.order_num);
  
      if (matchingJobHistory) {
        // 既存のjob_historiesを更新する
        jobHistoriesToUpdate.push({
            user_id:employment.user_id,
            company_name: employment.company_name ?? '',
            job_start_year: employment.job_start_year,
            job_start_month: employment.job_start_month,
            job_end_year: employment.job_end_year,
            job_end_month: employment.job_end_month,
            job_start_status:employment.job_start_status,
            order_num:employment.order_num,
            employment_type:matchingJobHistory.employment_type,
            job_details:matchingJobHistory.job_details,
            updated_at: new Date(),
        });
      } else {
        // 存在しないjob_historiesを作成する
        jobHistoriesToCreate.push({
          user_id: employment.user_id,
          company_name: employment.company_name ?? '',
          job_start_year: employment.job_start_year,
          job_start_month: employment.job_start_month,
          job_start_status:employment.job_start_status,
          job_end_year: employment.job_end_year,
          job_end_month: employment.job_end_month,
          employment_type: "",
          job_details: "",
          order_num: employment.order_num,
          created_at: new Date(),
          updated_at: new Date(),
        });
      }
    }

    // 4. jobHistoriesToUpdateとjobHistoriesToCreateを統合
    const combinedJobHistories = [
        ...jobHistoriesToUpdate,
        ...jobHistoriesToCreate
    ];

    return combinedJobHistories;

  };
  