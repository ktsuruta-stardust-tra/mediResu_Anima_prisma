/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

interface Props {
  className: any;
  lineClassName: any;
  line: string;
  divClassName: any;
  text: string;
}

export const DiscriptionItemComp= ({
  className,
  lineClassName,
  line = "/img/line-3.svg",
  divClassName,
  text = "メディレジュとは?",
}: Props): JSX.Element => {
  return (
    <div className={`relative w-[169px] h-[35px] ${className}`}>
      <img
        className={`absolute w-[43px] h-px top-[34px] left-[63px] object-cover ${lineClassName}`}
        alt="Line"
        src={line}
      />
      <div
        className={`absolute -top-px left-0 [font-family:'Inter',Helvetica] font-semibold text-[#24b6ae] text-xl text-center tracking-[0] leading-6 whitespace-nowrap ${divClassName}`}
      >
        {text}
      </div>
    </div>
  );
};


