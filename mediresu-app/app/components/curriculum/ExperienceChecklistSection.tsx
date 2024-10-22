import PropTypes from "prop-types";
import React from "react";



// Propsの型を定義
interface ChecklistSectionProps {
  title: string;          // titleは文字列型
  name:string;
  checked:boolean;
  handleChange:(name:string, value:any) => void;
  otherText:string;
}

// セクションコンポーネント
export const ExperienceChecklistSection = ({
  title,
  name,
  checked,
  handleChange,
  otherText,
}: ChecklistSectionProps): JSX.Element => {

return (
<div className="w-[335px] items-start flex flex-col relative flex-[0_0_auto]">
  <div className="flex flex-col w-[295px] items-start gap-2 px-5 py-[5px] relative flex-[0_0_auto] bg-white  rounded-md">
      <label className="inline-flex items-center cursor-pointer gap-2">
        <input 
          type="checkbox" 
          className="hidden peer w-[30px] h-[30px]" // チェックボックスのサイズを固定
          name={name}
          checked={checked}
          onChange={(e) => handleChange(e.target.name, e.target.checked)} 
        />
        <div className="peer-checked:hidden relative w-[30px] h-[30px]  bg-white rounded border border-solid border-[#24b6ae] flex-shrink-0 " />
        <div className="relative w-[30px] h-[30px] bg-[#24b6ae] rounded border border-solid border-[#24b6ae] hidden peer-checked:flex items-center justify-center transition-all duration-300 flex-shrink-0 ">
          <img src="/img/userinfo/vector-1.svg" alt="check icon" className="w-[20px] h-[20px]" />
        </div>
        <span className="ml-2 font-bold text-gray-700 leading-tight flex items-center">{title}</span>
      </label>

  </div>
  {title === "その他" && (
    <div className="w-full items-start gap-3 mt-3 px-5">
        <textarea
          className="relative flex-1 self-stretch w-full grow h-[120px] bg-white rounded border border-solid border-[#cccccc] p-2 "
          value={otherText}
          name="other_experience"
          placeholder="その他の内容を入力"
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />
      </div>
    )}
</div>
  );
};