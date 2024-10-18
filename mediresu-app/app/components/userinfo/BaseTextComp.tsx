/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

interface Props {
  className: any;
  text: string;
  value: string;
  name: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const BaseTextComp = ({ 
  className, 
  text = "〇〇市〇〇町" ,
  value,
  name,
  handleChange,
}: Props): JSX.Element => {
  return (
    <div className={`flex w-[335px] items-start gap-[15px] pt-2.5 pb-0 px-5 relative ${className}`}>
      <div className="flex flex-col items-start gap-[5px] relative flex-1 grow">

        <input 
          className="flex flex-col h-10 items-start justify-center px-5 py-3 relative self-stretch w-full bg-white rounded border border-solid border-[#cccccc]"
          placeholder={text}
          type="text"
          id={name}
          name={name}
          defaultValue={value}
          onChange={handleChange}
        />

      </div>
    </div>
  );
};

BaseTextComp.propTypes = {
  text: PropTypes.string,
};
