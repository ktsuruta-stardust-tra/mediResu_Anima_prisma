import PropTypes from "prop-types";
import React from "react";
import { Link } from "@remix-run/react";
interface Props {
  className: any;
  groupClassName: any;
  groupClassNameOverride: any;
  text: string;
  vectorClassName: any;
  divClassName: any;
  preview1:string;
  preview2:string;
  download1:string;
  download2:string;
  link:string;
  previewLink:string;
  handleChange :() => void;
  url:string;
  landscape:boolean;
  pdfName:string;
  handleDownloadPDF:(url:string,landscape:boolean,pdfName:string) => void;
}

export const BodyComp = ({
  className,
  groupClassName,
  groupClassNameOverride,
  text = "履歴書を作成・編集",
  vectorClassName,
  divClassName,
  preview1 = "履歴書を",
  preview2 = "プレビュー",
  download1 = "履歴書を",
  download2 = "ダウンロード",
  link,
  previewLink,
  handleChange,
  url,
  landscape,
  pdfName,
  handleDownloadPDF,
}: Props): JSX.Element => {
  
  const text1 = (
    <>
      {preview1}
      <br />
      {preview2}
    </>
  );
  const text2 = (
    <>
      {download1}
      <br />
      {download2}
    </>
  );
  return (
    
    
    <div className={`flex flex-col w-[335px] items-center gap-5 relative ${className}`}>
      <Link 
        to={link} 
        className="flex h-[60px] items-center justify-center gap-2.5 px-[89px] py-[18px] relative self-stretch w-full bg-white rounded-lg shadow-[0px_2px_2px_#00000040] active:scale-95 transition-transform duration-150 ease-in-out"
        onClick={handleChange}
      >
        <img
          className={`relative w-[25.91px] h-[23px] ml-[-2.46px] ${groupClassName}`}
          alt="Group"
          src="/img/group-12.png"
        />
        <div className={`relative w-32 h-5 mr-[-4.46px] ${groupClassNameOverride}`}>
          <div className="absolute top-0 left-0 [font-family:'Inter',Helvetica] font-semibold text-[#3d3d3d] text-sm text-center tracking-[0] leading-5 whitespace-nowrap">
            {text}
          </div>
        </div>
      </Link>
      <div className="inline-flex items-start justify-center gap-[15px] relative flex-[0_0_auto]">
        <Link
          to={previewLink}
          className="flex w-40 h-[60px] items-center justify-center gap-2.5 px-8 py-2.5 relative bg-[#ffffff] rounded-lg shadow-[0px_2px_2px_#00000040] active:scale-95 transition-transform duration-150 ease-in-out"
          onClick={handleChange}
        >
          <img
            className={`relative w-[19px] h-[19px] ml-[-1.50px] ${vectorClassName}`}
            alt="Vector"
            src="/img/vector.svg"
          />
          <div className={`relative w-[72px] h-10 mr-[-3.50px]  ${divClassName}`}>
            <div className="absolute top-0 left-0 [font-family:'Inter',Helvetica] font-semibold text-[#3d3d3d] text-sm text-center tracking-[0] leading-5">
              {text1}
            </div>
          </div>
        </Link>
        <button 
          className="flex flex-col w-40 h-[60px] items-center gap-2.5 px-6 py-2.5 relative bg-[#ffffff] rounded-lg shadow-[0px_2px_2px_#00000040] active:scale-95 transition-transform duration-150 ease-in-out"
          onClick={() => handleDownloadPDF(url,landscape,pdfName)}>
          
          <div className="relative w-[110px] h-10 ">
            <div className="flex w-[110px] items-center justify-between relative">
              <img className="relative w-[18.36px] h-[17px]" alt="Group" src="/img/group-9.png" />
              <div className="relative w-[86px] h-10 mr-[-2.00px]">
                <div className="absolute top-0 left-0 [font-family:'Inter',Helvetica] font-semibold text-[#3d3d3d] text-sm text-center tracking-[0] leading-5">
                  {text2}
                </div>
              </div>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};