/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

interface Props {
  className: any;
  divClassName: any;
  divClassNameOverride: any;
  text: string;
  text1: string;
}

export const DiscriptionComp = ({
  className,
  divClassName,
  divClassNameOverride,
  text = "かんたん<br/>作成!",
  text1 = "カンタンに履歴書や職務経歴書を作成できるシンプルなインターフェースを提供しています。面倒なフォーマット調整やレイアウト変更の心配は無用です。初心者でも簡単に使いこなせます。",
}: Props): JSX.Element => {
  return (
    <div className={`flex w-[335px] h-[94px] items-start gap-[7px] relative ${className}`}>
      <div className="flex w-[92px] h-[94px] items-center justify-center gap-2.5 px-[18px] py-[26px] relative bg-[#24b6ae] rounded-md">
        <div
          className={`relative w-fit [font-family:'Inter',Helvetica] font-bold text-white text-sm text-center tracking-[0] leading-5 ${divClassNameOverride}`}
        >
          {text}
        </div>
      </div>
      <div
        className={`relative flex-1 h-24 mt-[-1.00px] mb-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#3d3d3d] text-xs text-justify tracking-[0] leading-5 ${divClassName}`}
      >
        {text1}
      </div>
    </div>
  );
};

