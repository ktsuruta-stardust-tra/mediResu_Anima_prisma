/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

interface Props {
  className: any;
  
}

export const UploadImgComp = ({ className}: Props): JSX.Element => {
  return (
    <div className={`flex w-[335px] items-start gap-[15px] pt-2.5 pb-0 px-5 relative ${className}`}>
      <div className="flex items-start gap-[5px] relative flex-1 grow">
        <div className="inline-flex items-center gap-1 px-5 py-3 relative flex-[0_0_auto] bg-white rounded border border-solid border-[#cccccc]">
          <img className="relative w-[13.57px] h-[13.46px]" alt="Element" src="/img/userinfo/1-2.svg" />
          <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
            写真をアップロードする
          </div>
        </div>
      </div>
    </div>
  );
};

UploadImgComp.propTypes = {
  element: PropTypes.string,
};
