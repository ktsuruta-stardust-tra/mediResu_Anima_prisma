/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { UserEmployments } from "~/types/user";
interface Props {
  className: any;
  formData?:UserEmployments;
  handleChange: (order_num:number,field:keyof UserEmployments,value:number|string) => void;
}

export const WorkHistoryComp = ({ 
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
      <div className="flex items-start gap-[15px] px-5 py-0 relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col items-start gap-[5px] relative flex-1 mt-2 grow">
          {/* <div className="relative self-stretch w-full h-10 bg-white rounded border border-solid border-[#cccccc]" /> */}
          <input 
            className="flex flex-col h-10 items-start justify-center px-5 py-3 relative self-stretch w-full bg-white rounded border border-solid border-[#cccccc]"
            placeholder="{text}"
            type="text"
            name="school_name"
            // onChange={(e) => handleChange(formData.order_num|| 0,"company_name",e.target.value)}
          />
        </div>
      </div>


      {/* 入学年・月 */}

      <div className={`flex w-[335px] items-center pt-2.5 pb-0 px-5 relative ${className}`}>
        <div className="flex w-[100px] gap-1 self-stretch items-center relative">
          <select 
            className="w-full h-[38px] bg-transparent text-left text-sm border rounded border-[#cccccc]" 
            name="job_end_year" 
            defaultValue={formData?.job_end_year || ""} 
            onChange={(e) => handleChange(formData?.order_num || 0,"job_end_year",e.target.value)} 
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
          name="job_start_month" 
          defaultValue={formData?.job_start_month || ""} 
          onChange={(e)=>handleChange(formData?.order_num || 0,"job_start_month",e.target.value)}
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
            <div className="text-[#313131] text-xs">入社</div>
        </div>
      </div>

      {/* 卒業年・月 */}
      <div className={`flex w-[335px] items-center pt-2.5 pb-0 px-5 relative ${className}`}>
        <div className="flex w-[100px] gap-1 self-stretch items-center relative">
          <select 
            className="w-full h-[38px] bg-transparent text-left text-sm border rounded border-[#cccccc]" 
            name="job_end_year" 
            defaultValue={formData?.job_end_year || ""} 
            onChange={(e) => handleChange(formData?.order_num || 0,"job_end_year",e.target.value)} 
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
          name="job_end_month" 
          defaultValue={formData?.job_end_month|| ""} 
          onChange={(e) => handleChange(formData?.order_num || 0,"job_end_month",e.target.value)}
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
