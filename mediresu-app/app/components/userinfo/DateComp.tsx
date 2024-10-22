/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
  year:number;
  year_name:string;
  month:number;
  month_name:string;
  day:number;
  day_name:string;
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const DateComp = ({ 
  className,
  year,
  year_name,
  month,
  month_name,
  day,
  day_name,
  handleChange
 }: Props): JSX.Element => {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (_, i) => currentYear - i);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  return (
    <div className={`flex w-[335px] items-center pt-2.5 pb-0 px-5 bg-white relative ${className}`}>
      <div className="flex w-[100px] gap-1 self-stretch items-center relative">
        <select className="w-full h-[38px] bg-transparent text-left text-sm border rounded border-[#cccccc]" name={year_name} defaultValue={year} onChange={handleChange}>
          <option value="">年を選択</option>
          {years.map((y) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select>
      </div>
      <div className="inline-flex flex-col justify-center gap-2.5 pl-0.5 pr-1.5 py-0 flex-[0_0_auto] items-center relative">
        <div className="relative self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#313131] text-xs tracking-[0] leading-[normal]">
          年
        </div>
      </div>
      {/* <img className="relative self-stretch w-[70px]" alt="Frame" src="/img/userinfo/frame-7.svg" /> */}


      <select className="w-[70px] h-[38px] border rounded bg-transparent border-[#cccccc]" name={month_name} value={month} onChange={handleChange}>
        <option value="">選択</option>
        {months.map((m) => (
          <option key={m} value={m}>
            {m}
          </option>
        ))}
      </select>
      


      <div className="inline-flex flex-col justify-center gap-2.5 pl-0.5 pr-1.5 py-0 flex-[0_0_auto] items-center relative">
        <div className="relative self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#313131] text-xs tracking-[0] leading-[normal]">
          月
        </div>
      </div>

      {/* <select className="w-[70px] h-[38px] border rounded border-gray-400 appearance-none"
        style={{          
          backgroundImage: 'url("/img/userinfo/arrow.svg")',
          backgroundPosition: 'right center',
          backgroundRepeat: 'no-repeat',}}
        > */}
      <select className="w-[70px] h-[38px] border rounded bg-transparent border-[#cccccc]" name={day_name} value={day} onChange={handleChange}>
        <option value="">選択</option>
        {days.map((d) => (
          <option key={d} value={d}>
            {d}
          </option>
        ))}
      </select>

      <div className="inline-flex flex-col justify-center gap-2.5 pl-0.5 pr-0 py-0 flex-[0_0_auto] items-center relative">
        <div className="relative self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#313131] text-xs tracking-[0] leading-[normal]">
          日
        </div>
      </div>
    </div>
  );
};
