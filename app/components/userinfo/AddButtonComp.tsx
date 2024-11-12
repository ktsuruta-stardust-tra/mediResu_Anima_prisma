/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

interface Props {
  className: any;
  text: string;
  formData:any;
  updateFormData:(newData:Partial<any> & {order_num:number},orderNumKey:keyof any) => void;
}

export const AddButtonComp = ({ 
  className, 
  text = "＋ 上記以外に連絡先がある場合" ,
  formData,
  updateFormData
}: Props): JSX.Element => {

  const pushButton = () => {
    const newOrderNum = formData.length + 1;
    updateFormData(
      {order_num:newOrderNum,},
      "order_num",
    )
  }

  return (
    <div className={`flex w-[335px] items-start gap-[15px] pl-5 pr-0 pt-2.5 pb-0 relative ${className}`}>
      <div className="inline-flex flex-col items-start gap-[5px] relative flex-[0_0_auto]">
  
          <button 
            className="flex flex-col items-start justify-center px-1.5 py-2.5 relative self-stretch w-full flex-[0_0_auto] bg-white rounded border border-solid border-[#cccccc]"
            type="button"
            onClick={pushButton}>
            {text}
          </button>

      </div>
    </div>
  );
};

AddButtonComp.propTypes = {
  text: PropTypes.string,
};
