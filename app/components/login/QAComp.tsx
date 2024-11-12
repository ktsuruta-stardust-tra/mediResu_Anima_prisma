/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

interface Props {
  className: any;
  text: string;
  divClassName: any;
  text1: string;
  divClassNameOverride: any;
  text2: string;
  groupClassName: any;
  divClassName1: any;
}

export const QaComp = ({
  className,
  text = "「ビジュメ」とは&nbsp;&nbsp;<br/>どのようなサービスですか？",
  divClassName,
  text1 = "「履歴書メーカー」は、美容医療クリニックの看護師及び受付·カウンセラー専用の履歴書・職務経歴書作成WEBサービスです。簡単な操作で、業界特化型のテンプレートを使用してプロフェッショナルな履歴書や職務経歴書を作成できます。",
  divClassNameOverride,
  text2 = "Q1.",
  groupClassName,
  divClassName1,
}: Props): JSX.Element => {
  return (
    <div className={`flex flex-col w-[375px] items-start relative ${className}`}>
      <div className={`relative w-[269px] h-[53px] ${groupClassName}`}>
        <div
          className={`absolute h-10 top-[9px] left-[59px] [font-family:'Inter',Helvetica] font-bold text-[#3d3d3d] text-base tracking-[0] leading-5 ${divClassName1}`}
        >
          {text}
        </div>
        <div className="absolute w-[55px] h-[53px] top-0 left-0">
          <div className="relative w-[53px] h-[53px] bg-[#24b6ae] rounded-[26.5px]">
            <div
              className={`absolute top-4 left-2.5 [font-family:'Inter',Helvetica] font-bold text-white text-2xl text-center tracking-[0] leading-5 whitespace-nowrap ${divClassNameOverride}`}
            >
              {text2}
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-start pt-2.5 pb-0 px-0 relative self-stretch w-full flex-[0_0_auto]">
        <div
          className={`relative flex-1 h-20 mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#3d3d3d] text-xs text-justify tracking-[0] leading-5 ${divClassName}`}
        >
          {text1}
        </div>
      </div>
    </div>
  );
};

