/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { UserEmployments } from "~/types/user";
import { Prisma } from "@prisma/client";
import prisma from "~/utils/prismaClient";
interface Props {
  className: any;
  formData?:Prisma.PromiseReturnType<typeof prisma.employments.findMany>[0];
  handleChange: (order_num:number,field:keyof UserEmployments,value:number|string) => void;
}

export const WorkHistoryDateComp = ({ 
  className,
  formData,
  handleChange,
 }: Props): JSX.Element => {

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (_, i) => currentYear - i);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const startYear = formData?.job_start_year || 0;

  return (
    <main>
      {/* 入学年・月 */}
      <div className={`flex w-[335px] items-center pt-2.5 pb-0 px-5 relative ${className}`}>
        <div className="flex w-[100px] gap-1 self-stretch items-center relative">
          {/* <select className="w-full h-[38px] bg-transparent text-left text-sm border rounded border-[#cccccc]" > */}
          <select 
            className="w-full h-[38px] bg-transparent text-left text-sm border rounded border-[#cccccc]" 
            name="job_start_year" 
            defaultValue={formData?.job_start_year || ""} 
            onChange={(e) => handleChange(formData?.order_num || 0,"job_start_year",Number(e.target.value))}
            >
            <option value="">年を選択</option>
            {years.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
        </div>
        <div className="inline-flex items-center justify-center px-1.5">
            <div className="text-[#313131] text-xs">年</div>
        </div>
       
        <select 
          className="w-[70px] h-[38px] border rounded bg-transparent border-[#cccccc]" 
          name="job_start_month" 
          defaultValue={formData?.job_start_month || ""} 
          onChange={(e)=>handleChange(formData?.order_num || 0,"job_start_month",Number(e.target.value))}
          >

          <option value="">選択</option>
          {months.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>

        <div className="inline-flex items-center justify-center px-1.5">
            <div className="text-[#313131] text-xs">月</div>
        </div>


        <select 
          className="inline-flex w-[70px] h-[38px] mt-0 border rounded bg-transparent border-[#cccccc]" 
          name="job_start_status"
          defaultValue={formData?.job_start_status|| ""} 
          onChange={(e) => handleChange(formData?.order_num || 0,"job_start_status",e.target.value)}
          >
          <option value="">選択</option>
          <option value="入社">入社</option>
          <option value="入職">入職</option>
        </select>



      </div>

      {/* 卒業年・月 */}
      <div className={`flex w-[335px] items-center pt-2.5 pb-0 px-5 relative ${className}`}>
        <div className="flex w-[100px] gap-1 self-stretch items-center relative">
          <select 
            className="w-full h-[38px] bg-transparent text-left text-sm border rounded border-[#cccccc]" 
            name="job_end_year" 
            defaultValue={formData?.job_end_year || ""} 
            onChange={(e) => handleChange(formData?.order_num || 0,"job_end_year",Number(e.target.value))} 
            >
            <option value="">年を選択</option>
            {years.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
        </div>
        <div className="inline-flex items-center justify-center px-1.5">
          <div className="text-[#313131] text-xs">年</div>
        </div>

        <select 
          className="w-[70px] h-[38px] border rounded border-[#cccccc] bg-transparent" 
          name="job_end_month" 
          defaultValue={formData?.job_end_month|| ""} 
          onChange={(e) => handleChange(formData?.order_num || 0,"job_end_month",Number(e.target.value))}
          >
          <option value="">選択</option>
          {months.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>

        <div className="inline-flex items-center justify-center px-1.5">
          <div className="text-[#313131] text-xs">月</div>
        </div>

        <div className="inline-flex items-center justify-center px-1.5">
          <div className="text-[#313131] text-xs">退社</div>
        </div>

      </div>
    </main>
  );
};
