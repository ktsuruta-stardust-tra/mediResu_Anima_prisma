/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

interface Props {
  className: any;
  group: string;
}

export const HeaderComp = ({ className, group = "/img/group-18.png" }: Props): JSX.Element => {
  return (
    <div className={`inline-flex flex-col items-center gap-2.5 relative ${className}`}>
      <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-white text-base text-center tracking-[0] leading-[22px]">
        医療業界特化の
        <br />
        履歴書·経歴書WEB作成ツール
      </div>
      <img className="relative w-[215px] h-[42px]" alt="Group" src={group} />
    </div>
  );
};


