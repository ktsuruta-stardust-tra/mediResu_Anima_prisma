/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

interface Props {
  className: any;
  element: string;
  group: string;
}

export const SavePreviewComp = ({
  className,
  element = "/img/userinfo/1.svg",
  group = "/img/userinfo/group-22.png",
}: Props): JSX.Element => {
  return (
    <div className={`inline-flex items-center gap-2.5 px-0 py-5 relative ${className}`}>
      <div className="flex w-[110px] h-10 items-center justify-center gap-[3px] px-[15px] py-2.5 relative bg-[#e1e1e1] rounded-[20px]">
        <div className="relative w-fit [font-family:'Inter',Helvetica] font-bold text-white text-sm tracking-[0] leading-[normal]">
          保存する
        </div>
        <img className="relative w-[12.92px] h-[12.11px]" alt="Element" src={element} />
      </div>
      <div className="flex w-[110px] h-10 items-center justify-center gap-[3px] px-[15px] py-2.5 relative bg-[#e1e1e1] rounded-[20px]">
        <div className="ml-[-4.50px] relative w-fit [font-family:'Inter',Helvetica] font-bold text-white text-sm tracking-[0] leading-[normal]">
          プレビュー
        </div>
        <img className="relative w-4 h-4 mr-[-4.50px]" alt="Group" src={group} />
      </div>
    </div>
  );
};

SavePreviewComp.propTypes = {
  element: PropTypes.string,
  group: PropTypes.string,
};
