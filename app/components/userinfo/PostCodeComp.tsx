/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
  value: string;
  name: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

//郵便番号
export const PostCodeComp = ({ 
  className,
  value,
  name,
  handleChange,
}: Props): JSX.Element => {
  return (
    <div className={`flex w-[335px] items-start gap-[15px] pt-2.5 pb-0 px-5 relative ${className}`}>
      <div className="flex flex-col w-[100px] items-start gap-[5px] relative">
        {/* <div className="flex flex-col h-10 items-start justify-center px-5 py-3 relative self-stretch w-full bg-white rounded border border-solid border-[#cccccc]">
          <div className="relative w-fit mt-[-0.50px] [font-family:'Inter',Helvetica] font-normal text-[#969696] text-xs tracking-[0] leading-[normal]">
            1234567
          </div>
        </div> */}
        <input
          className="flex flex-col h-10 items-start justify-center px-2 py-3 relative self-stretch w-full bg-white rounded border border-solid border-[#cccccc]"
          placeholder="123-4567"
          type="text"
          defaultValue={value}
          name={name}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};
