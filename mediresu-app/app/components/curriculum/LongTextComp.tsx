/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Prisma } from "@prisma/client";
import prisma from "~/utils/prismaClient";
import { UserJobHistoryType } from "~/types/curriculumDatas";

interface Props {
  value:string;
  name:string;
  formData:any;
  handleChange:(order_num:number,field:keyof any,value:number|string) => void;
}
// const handleCheckCount = (value:string) =>{
//   console.log(value);
// }
export const LongTextComp = ({
  value,
  name,
  formData,
  handleChange,
}: Props): JSX.Element => {
  return (
    <div className="flex w-[335px] items-start gap-[15px] pt-2.5 pb-0 px-5 relative !self-stretch !h-[150px]">
      <div className="flex flex-col items-start gap-[5px] relative flex-1 grow !self-stretch">
        <textarea
          className="flex flex-col items-start justify-start text-left px-5 py-3 relative self-stretch w-full bg-white rounded border border-solid border-[#cccccc] !h-[unset] !flex-1 !grow"
          placeholder="【役職・所属】                                    【業務内容】                                     【施術経験】"
          defaultValue={value}
          name={name}
          onChange={(e)=> handleChange(formData?.order_num || 0,"job_details",e.target.value)}
        />

      </div>
    </div>
  );
};

// Element.propTypes = {
//   text: PropTypes.string,
// };
