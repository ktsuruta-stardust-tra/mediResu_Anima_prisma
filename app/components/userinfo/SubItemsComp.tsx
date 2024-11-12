/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { UserEducations,UserEmployments } from "~/types/user";

interface Props {
  className: any;
  divClassName: any;
  text: string;

}

export const SubItemsComp = <T,>({ 
  className,
  divClassName,
  text = "この文章はダミーとなります。この文章はダミーとなります。この文章はダミーとなります。この文章はダミーとなります。この文章はダミーとなります。この文章はダミーとなります。この文章はダミーとなります。この文章はダミーとなります。この文章はダミーとなります。",
}: Props): JSX.Element => {
  return (
    <div className={`flex flex-col w-[335px] items-center justify-center pt-5 pb-0 px-0 relative ${className}`}>
      <div className="flex items-start px-5 py-0 relative self-stretch w-full flex-[0_0_auto]">
        <div
          className={`relative w-[275px] h-[161px] mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-[#313131] text-sm text-justify tracking-[0] leading-[22px] ${divClassName}`}
        >
          {text}
        </div>
      </div>
    </div>
  );
};

SubItemsComp.propTypes = {
  text: PropTypes.string,
};
