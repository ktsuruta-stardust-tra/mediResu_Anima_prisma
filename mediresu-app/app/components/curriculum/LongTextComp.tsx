/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

interface Props {
  className: any;
  frameClassName: any;
  frameClassNameOverride: any;
  divClassName: any;
  text: string;
  value:string;
  name:string;
  handleChange:(name:string,value:string)=>void;
}

export const LongTextComp = ({
  className,
  frameClassName,
  frameClassNameOverride,
  divClassName,
  text,
  value,
  name,
  handleChange
}: Props): JSX.Element => {
  return (
    <div className={`flex w-[335px] items-start gap-[15px] pt-2.5 pb-0 px-5 relative ${className}`}>
      <div className={`flex flex-col items-start gap-[5px] relative flex-1 grow ${frameClassName}`}>
        <textarea
          className={`flex flex-col h-10 items-start justify-start text-left px-5 py-3 relative self-stretch w-full bg-white rounded border border-solid border-[#cccccc] ${frameClassNameOverride}`}
          defaultValue={value}
          name={name}
          onChange={(e)=> handleChange(e.target.name,e.target.value)}
        />

      </div>
    </div>
  );
};

// Element.propTypes = {
//   text: PropTypes.string,
// };
