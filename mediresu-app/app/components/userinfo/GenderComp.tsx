/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
  value:string;
  name:string;
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const GenderComp = ({ 
  className,
  value,
  name,
  handleChange,
 }: Props): JSX.Element => {
  // const prefecs = prefectures;
  // console.log(prefectures)
  return (
    <div className={`flex w-[335px] items-center pt-2.5 pb-0 px-5 relative ${className}`}>
      <div className="flex w-[100px] items-center gap-1 relative self-stretch">

        <select 
          className="w-[100px] h-[38px] bg-transparent  border rounded border-[#cccccc]"
          name={name}
          value={value}
          onChange={handleChange}
        >

          <option value="">性別</option>
          <option value="M">男性</option>
          <option value="F">女性</option>

        </select>
      </div>
    </div>
  );
};
