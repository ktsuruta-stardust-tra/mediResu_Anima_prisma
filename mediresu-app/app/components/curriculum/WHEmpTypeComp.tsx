/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { UserEmployments } from "~/types/user";
interface Props {
  className: any;
  formData?:any;
  handleChange: (order_num:number,field:keyof any,value:number|string) => void;
}

export const WHEmpTypeComp = ({ 
  formData,
  handleChange,
 }: Props): JSX.Element => {

  return (
    <main>
       <select 
          className="w-[100px] h-[38px] mt-2 ml-5 border rounded border-[#cccccc]" 
          name="employment_type"
          defaultValue={formData?.employment_type || ""} 
          onChange={(e)=>handleChange(formData?.order_num || 0,"employment_type",e.target.value)}
          >
          <option value="">選択</option>
          <option value="正職員">正職員</option>
          <option value="契約">契約</option>
          <option value="委託">委託</option>
          <option value="アルバイト">アルバイト</option>
      </select>

    </main>
  );
};
