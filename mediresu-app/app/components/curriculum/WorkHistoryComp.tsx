/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { UserJobHistoryType } from "~/types/curriculumDatas";
import { UserEmployments } from "~/types/user";
import { Prisma } from "@prisma/client";
import prisma from "~/utils/prismaClient";

type jobHistoryType = Prisma.PromiseReturnType<typeof prisma.job_histories.findMany>[0];
interface Props {
  formData?:jobHistoryType;
}

export const WorkHistoryComp = ({ 
  formData,
 }: Props): JSX.Element => {

  let flg = false;
  
  if(formData?.job_end_year !==0 && formData?.job_end_month !== 0){
    flg = true;
  }
  console.log(formData);
  return (
    <main>
      <div className="flex justify-center items-center max-width">
        <div className="flex  ml-5  mt-7 items-center gap-2.5 p-4 relative bg-[#d9ecec] rounded">
          <div className=" w-[265px] [font-family:'Inter-Medium',Helvetica] font-medium text-black text-base ">
            {formData?.company_name}
            <br />
            {formData?.job_start_year}年
            {formData?.job_start_month}月
            {formData.job_start_status}
            <br />
            {flg && `${formData?.job_end_year}年${formData?.job_end_month}月退職`}
          </div>

        </div>
      </div>


    </main>
  );
};
