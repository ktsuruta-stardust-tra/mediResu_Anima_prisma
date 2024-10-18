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

export const ItemsComp = ({ className, text = "お名前" }: Props): JSX.Element => {
  return (
    <div className={`inline-flex items-center gap-1.5 pl-5 pr-0 pt-5 pb-0 relative ${className}`}>
      <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
        <div className="text-[#313131] text-sm relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold tracking-[0] leading-[normal]">
          {text}
        </div>
      </div>
      <div className="inline-flex items-center justify-center px-1.5 py-0.5 relative flex-[0_0_auto] bg-[#ff0000] rounded-[10px] overflow-hidden">
        <div className="text-white text-xs relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold tracking-[0] leading-[normal]">
          必須
        </div>
      </div>
    </div>
  );
};

ItemsComp.propTypes = {
  text: PropTypes.string,
};
