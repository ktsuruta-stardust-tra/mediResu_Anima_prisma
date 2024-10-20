/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { number } from "yup";
import { UserEducations } from "~/types/user";
import { Prisma } from "@prisma/client";
import prisma from "~/utils/prismaClient";
interface Props {
  className: any;
  formData?:Prisma.PromiseReturnType<typeof prisma.educations.findMany>[0];
  handleChange: (order_num:number,field:keyof UserEducations,value:number|string) => void;
}

export const AcademicDateComp = ({ 
  className,
  formData,
  handleChange,
 }: Props): JSX.Element => {

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (_, i) => currentYear - i);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const startYear = formData?.education_start_year|| 0;

  return (
    <main>
      {/* 入学年・月 */}
      <div className={`flex w-[335px] items-center pt-2.5 pb-0 px-5 relative ${className}`}>
        <div className="flex w-[100px] gap-1 self-stretch items-center relative">
          {/* <select className="w-full h-[38px] bg-transparent text-left text-sm border rounded border-[#cccccc]" > */}
          <select 
            className="w-full h-[38px] bg-transparent text-left text-sm border rounded border-[#cccccc]" 
            name="education_start_year" 
            defaultValue={formData?.education_start_year || ""} 
            onChange={(e) => handleChange(formData?.order_num || 0,"education_start_year",Number(e.target.value))}
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
          className="w-[70px] h-[38px] border rounded border-[#cccccc]" 
          name="education_start_month" 
          defaultValue={formData?.education_start_month || ""} 
          onChange={(e)=>handleChange(formData?.order_num || 0,"education_start_month",Number(e.target.value))}
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
            <div className="text-[#313131] text-xs">入学</div>
        </div>
      </div>

      {/* 卒業年・月 */}
      <div className={`flex w-[335px] items-center pt-2.5 pb-0 px-5 relative ${className}`}>
        <div className="flex w-[100px] gap-1 self-stretch items-center relative">
          <select 
            className="w-full h-[38px] bg-transparent text-left text-sm border rounded border-[#cccccc]" 
            name="education_end_year" 
            defaultValue={formData?.education_end_year || ""} 
            onChange={(e) => handleChange(formData?.order_num || 0,"education_end_year",Number(e.target.value))} 
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
          className="w-[70px] h-[38px] border rounded border-[#cccccc]" 
          name="education_end_month" 
          defaultValue={formData?.education_end_month || ""} 
          onChange={(e) => handleChange(formData?.order_num || 0,"education_end_month",Number(e.target.value))}
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

        {/* <div className="inline-flex items-center justify-center px-1.5">
          <div className="text-[#313131] text-xs">卒業</div>
        </div> */}

        <select 
          className="inline-flex w-[70px] h-[38px] mt-0 border rounded border-[#cccccc]" 
          name="education_end_status"
          defaultValue={formData?.education_end_status || ""} 
          onChange={(e) => handleChange(formData?.order_num || 0,"education_end_status",e.target.value)}
          >
          <option value="">選択</option>
          <option value="中退">中退</option>
          <option value="卒業">卒業</option>
          <option value="修了">修了</option>
        </select>

      </div>
    </main>
  );
};
