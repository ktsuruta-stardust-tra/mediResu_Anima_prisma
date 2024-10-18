import React from "react";

interface Props {
  className?: string;
  text?: string;
  text1?: string;
  text2?: string;
  text3?: string;
  lastValue?: string;
  firstValue?: string;
  lastName?: string;
  firstName?: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const NameComp: React.FC<Props> = ({
  className = "",
  text = "姓",
  text1 = "山田",
  text2 = "名",
  text3 = "太郎",
  lastValue = "",
  firstValue = "",
  lastName = "",
  firstName = "",
  handleChange,
}) => {
  return (
    <div className={`flex w-[335px] items-start gap-[15px] pt-2.5 pb-0 px-5 relative ${className}`}>
      <div className="flex flex-col items-start gap-[5px] relative flex-1 grow">
        <div className="flex-[0_0_auto] flex flex-col items-start justify-center relative self-stretch w-full">
          <div className="mt-[-1.00px] text-[#313131] relative w-fit font-normal text-xs tracking-[0] leading-[normal]">
            {text}
          </div>
        </div>
        <input
          type="text"
          id={lastName}
          name={lastName}
          defaultValue={lastValue || ""}
          onChange={handleChange}
          className="h-10 px-5 py-3 bg-white rounded border border-solid border-[#cccccc] w-full"
          placeholder={text1}
        />
      </div>
      <div className="flex flex-col items-start gap-[5px] relative flex-1 grow">
        <div className="flex-[0_0_auto] flex flex-col items-start justify-center relative self-stretch w-full">
          <div className="mt-[-1.00px] text-[#313131] relative w-fit font-normal text-xs tracking-[0] leading-[normal]">
            {text2}
          </div>
        </div>
        <input
          type="text"
          id={firstName}
          name={firstName}
          defaultValue={firstValue || ""}
          onChange={handleChange}
          className="h-10 px-5 py-3 bg-white rounded border border-solid border-[#cccccc] w-full"
          placeholder={text3}
        />
      </div>
    </div>
  );
};
