/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { prefectures } from "~/utils/prefecturesList";

interface Props {
  className: any;
  value:string;
  name:string;
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const PrefecturesComp = ({ 
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
        {/* <div className="flex flex-col items-end justify-center gap-2.5 pl-0 pr-[5px] py-[15px] relative flex-1 grow bg-white rounded border border-solid border-[#cccccc]">



        </div> */}
        <select 
          className="w-[100px] h-[38px] border rounded border-[#cccccc]"
          name={name}
          value={value}
          onChange={handleChange}
        >
          <option value="">都道府県</option>
          {prefectures.map((prefecture)=>
            <option key={prefecture.code} value={prefecture.name}>
              {prefecture.name}
            </option>
          )}
        </select>
      </div>
    </div>
  );
};
