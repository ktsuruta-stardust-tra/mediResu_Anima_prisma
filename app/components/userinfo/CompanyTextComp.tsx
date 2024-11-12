/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { UserEmployments } from "~/types/user";

interface Props{
  className?: string;
  text: string;
  formData:UserEmployments;
  handleChange:(order_num:number,field:keyof UserEmployments,value:number|string) => void;
}

export const CompnayTextComp =({ 
  className="", 
  text,
  formData,
  handleChange,
  }: Props): JSX.Element => {

  
  return (
    <div className={`flex flex-col w-[335px] items-start relative ${className}`}>
      <div className="flex items-center gap-1.5 pl-5 pr-0 pt-2.5 pb-1 relative self-stretch w-full flex-[0_0_auto]">
        <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-[#313131] text-xs tracking-[0] leading-[normal]">
            {text}
          </div>
        </div>
      </div>
      <div className="flex items-start gap-[15px] px-5 py-0 relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col items-start gap-[5px] relative flex-1 grow">
          {/* <div className="relative self-stretch w-full h-10 bg-white rounded border border-solid border-[#cccccc]" /> */}
          <input 
            className="flex flex-col h-10 items-start justify-center px-5 py-3 relative self-stretch w-full bg-white rounded border border-solid border-[#cccccc]"
            placeholder={text}
            type="text"
            name="school_name"
            defaultValue={formData.company_name || ""}
            onChange={(e) => handleChange(formData.order_num|| 0,"company_name",e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};


