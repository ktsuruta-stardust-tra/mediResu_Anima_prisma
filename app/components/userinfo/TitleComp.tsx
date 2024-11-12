/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

interface Props {
  className: any;
  text: string;
}

export const TitleComp = ({ className, text = "基本情報" }: Props): JSX.Element => {
  return (
    <div className={`flex flex-col w-[335px] items-center justify-center relative ${className}`}>
      <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
        <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-[#313131] text-base tracking-[0] leading-[normal] whitespace-nowrap">
          {text}
        </div>
      </div>
    </div>
  );
};

TitleComp.propTypes = {
  text: PropTypes.string,
};
