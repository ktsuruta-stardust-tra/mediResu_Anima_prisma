/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import { Prisma } from "@prisma/client";
import PropTypes from "prop-types";
import React from "react";
import prisma from "~/utils/prismaClient";
type formDatatype = Prisma.PromiseReturnType<typeof prisma.user_informations.findMany>[0];
interface Props {
  className: any;
  formData:formDatatype;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const UploadImgComp = ({
  className,
  formData,
  handleChange,

}:Props): JSX.Element => {

  
  const  previewImage = formData.photo_base64;

  return(
    <main>
      {/* プレビューの表示 */}
      {previewImage && (
        <div className="flex mt-2 ml-5">
    
          <img src={previewImage} alt="Image Preview" style={{ maxWidth: "300px" }} />

        </div>
      ) 
      }
    <div className={`flex w-[335px] items-start gap-[15px] pt-2.5 pb-0 px-5 relative ${className}`}>
      <div className="flex items-start gap-[5px] relative flex-1 grow">
        <label>
        <input 
          type="file"
          accept="image/*"
          name = "photo_base64"
          onChange={(e) => handleChange(e)}
          className="hidden"
        />
          <div className="inline-flex items-center gap-1 px-5 py-3 relative flex-[0_0_auto] bg-white rounded border border-solid border-[#cccccc]">
            <img className="relative w-[13.57px] h-[13.46px]" alt="Element" src="/img/userinfo/1-2.svg" />
            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
              写真をアップロードする
            </div>
          </div>
          </label>
      </div>
    </div>
    </main>
  );
};

UploadImgComp.propTypes = {
  element: PropTypes.string,
};
