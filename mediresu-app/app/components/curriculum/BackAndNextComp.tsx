import { Link } from "@remix-run/react";
import { isValid } from "zod";

interface Props {
  className?: string;
  subtract?: string;
  img?: string;
  backLink: string;
  nextLink: string;
}

export const BackAndNextComp = ({
  className = "",
  subtract = "/img/userinfo/subtract.svg",
  img = "/img/userinfo/subtract-1.svg",
  backLink,
  nextLink,
}: Props): JSX.Element => {
  return (
    <div className={`flex w-[230px] items-center justify-center gap-2.5 pt-5 pb-0 px-0 relative ${className}`}>
      <Link to={backLink} className="flex w-[110px] h-10 items-center justify-center gap-1.5 px-[15px] py-2.5 relative bg-white rounded-[20px] border border-solid border-[#24b6ae] active:scale-95 transition-transform duration-150 ease-in-out">
        <img className="ml-[-2.50px] relative w-2 h-3" alt="Subtract" src={subtract} />
        <div className="relative w-fit mr-[-2.50px] [font-family:'Inter',Helvetica] font-bold text-[#24b6ae] text-sm tracking-[0] leading-[normal]">
          戻る
        </div>
      </Link>

        <Link to={nextLink} className="flex w-[110px] h-10 items-center justify-center gap-1.5 px-[15px] py-2.5 relative bg-[#24b6ae] rounded-[20px] active:scale-95 transition-transform duration-150 ease-in-out">
        
          <div className="relative w-fit mr-[-2.50px] [font-family:'Inter',Helvetica] font-bold text-white text-sm tracking-[0] leading-[normal]">
            次へ
          </div>
          <img className="relative w-2 h-3" alt="Subtract" src="/img/userinfo/subtract-7.svg"/>
        </Link>
    </div>
  );
};
