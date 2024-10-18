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

export const HeaderComp = ({ className, group = "/img/userinfo/group-3.png" }: Props): JSX.Element => {
  return (
    <div className={`w-[375px] h-[100px] ${className}`}>
      <div className="flex flex-col w-[375px] h-[100px] items-center justify-center gap-2.5 px-[108px] py-[25px] relative bg-[#24b6ae]">
        <div className="flex flex-col w-[140px] items-center gap-1 relative flex-[0_0_auto]">
          <div className="flex flex-col items-center gap-1 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative w-[140px] mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-white text-[10px] tracking-[0] leading-[normal]">
                カンタン履歴書・経歴書作りは
              </div>
            </div>
            <img className="relative w-[140px] h-[27.08px]" alt="Group" src={group} />
          </div>
        </div>
      </div>
    </div>
  );
};

HeaderComp.propTypes = {
  group: PropTypes.string,
};
