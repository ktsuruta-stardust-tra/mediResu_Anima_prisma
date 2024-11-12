import PropTypes from "prop-types";
import React from "react";
import { Link } from "@remix-run/react";

interface Props {
  className: string;
  subtract: string;
  text: string;
  img: string;
  backLink: string;
  nextLink: string;
}

export const BackEndComp = ({
  className = "",
  subtract = "/img/subtract.svg",
  text = "次へ",
  img = "/img/subtract-1.svg",
  backLink,
  nextLink,
}: Props): JSX.Element => {
  return (
    <div className={`flex w-[230px] items-center justify-center gap-2.5 pt-5 pb-0 px-0 relative ${className}`}>
      <Link to={backLink} className="flex w-[110px] h-10 items-center justify-center gap-1.5 px-[15px] py-2.5 relative bg-white rounded-[20px] border border-solid border-[#24b6ae]">
        <img className="relative w-2 h-3" alt="Subtract" src={subtract} />
        <div className="text-[#24b6ae] relative w-fit [font-family:'Inter',Helvetica] font-bold text-sm tracking-[0] leading-[normal]">
          戻る
        </div>
      </Link>
      <Link to={nextLink} className="flex w-[110px] h-10 items-center justify-center gap-1.5 px-[15px] py-2.5 relative bg-[#e1e1e1] rounded-[20px]">
        <div className="text-white relative w-fit [font-family:'Inter',Helvetica] font-bold text-sm tracking-[0] leading-[normal]">
          {text}
        </div>
        <img className="relative w-2 h-3" alt="Subtract" src={img} />
      </Link>
    </div>
  );
};
