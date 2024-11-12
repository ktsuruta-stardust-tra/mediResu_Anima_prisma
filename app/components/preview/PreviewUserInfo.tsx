import React from "react";
import { user_informations } from "@prisma/client";
interface Props {
    userInfo: user_informations | null;
    age:number;
  }

export const PreviewUserInfo = ({
  userInfo,
  age,
}:Props): JSX.Element => {
  return (
    <div className="flex flex-col  absolute top-[50px] left-9">
    <div className="flex items-center relative self-stretch w-full flex-[0_0_auto]">
      <div className="flex flex-col w-[280px] items-start relative">
        <div className="flex items-start relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col items-start justify-center relative flex-1 grow mt-[-1.00px] mb-[-1.00px] ml-[-1.00px] bg-white border border-solid border-black">
            <div className="flex items-center relative self-stretch w-[224px] h-[18px] flex-[0_0_auto]">
              <div className="inline-flex items-center pl-2.5 pr-5 py-0 relative flex-[0_0_auto]">
                <div className="w-fit mt-[-1.00px] text-black text-[6px] leading-[normal] whitespace-nowrap relative [font-family:'Inter',Helvetica] font-normal tracking-[0]">
                  フリガナ
                </div>
              </div>

              <div className="inline-flex items-center pl-0 pr-2.5 py-1 relative flex-[0_0_auto]">
                <div className="w-[72px] mt-[-1.00px] text-[#000000] text-[8px] leading-[normal] relative [font-family:'Inter',Helvetica] font-normal tracking-[0]">
                  {userInfo?.last_name_kana}
                </div>
              </div>

              <div className="inline-flex items-center px-0 py-1 relative flex-[0_0_auto]">
                <div className="w-fit mt-[-1.00px] text-[#000000] text-[8px] leading-[normal] relative [font-family:'Inter',Helvetica] font-normal tracking-[0]">
                  {userInfo?.first_name_kana}
                </div>
              </div>
            </div>

            <div className="flex h-10 items-center px-2.5 py-1 relative self-stretch w-[225px] ml-[-0.50px] mr-[-1.5px]  bg-white border border-solid border-black">
              <div className="relative w-fit [font-family:'Inter',Helvetica] font-normal text-black text-[8px] tracking-[0] leading-[normal]">
                氏　　名
              </div>

              <div className="inline-flex items-center px-2.5 py-0 relative flex-[0_0_auto]">
                <div className=" w-[72px] mt-[-1.00px] text-[#000000] text-sm leading-[normal] relative [font-family:'Inter',Helvetica] font-normal tracking-[0]">
                  {userInfo?.last_name}
                </div>
              </div>

              <div className="inline-flex items-center relative flex-[0_0_auto]">
                <div className="w-fit mt-[-1.00px] text-[#000000] text-sm leading-[normal] relative [font-family:'Inter',Helvetica] font-normal tracking-[0]">
                  {userInfo?.first_name}
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-[58px] h-[59px] items-center justify-center relative ml-[-1.0px] mt-[-1.00px] mr-[1.00px] bg-white border border-solid border-black">
            <div className="relative w-fit text-black text-[8px] leading-[normal] [font-family:'Inter',Helvetica] font-normal tracking-[0]">
              {userInfo?.gender === "M" ? 
                <span className="absolute top-[-1px] left-[-3px] w-[13px] h-[13px] rounded-[6.5px] border border-solid border-[#000000]" />
                :
                <span className="absolute top-[-1px] left-[18px] w-[13px] h-[13px] rounded-[6.5px] border border-solid border-[#000000]" />
              }
              
              男 ・ 女
            </div>
          </div>
        </div>

        <div className="flex h-[19px] items-center px-2.5 py-1 relative self-stretch w-full mt-[-1.0px] mb-[-1.00px] ml-[-1.00px] mr-[-1.00px] bg-white border border-solid border-black">
          <div className="w-fit text-black text-[7px] leading-[normal] whitespace-nowrap relative [font-family:'Inter',Helvetica] font-normal tracking-[0]">
            生年月日
          </div>

          <div className="inline-flex items-center pl-28 pr-0 py-1 relative flex-[0_0_auto] mt-[-4.50px] mb-[-2.50px]">
            <div className="relative w-5 mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#000000] text-[8px] tracking-[0] leading-[normal]">
              {userInfo?.birth_year}
            </div>
          </div>

          <div className="inline-flex items-center px-0 py-1 relative flex-[0_0_auto] mt-[-4.50px] mb-[-2.50px]">
            <div className="w-fit mt-[-1.00px] text-black text-[8px] leading-[normal] relative [font-family:'Inter',Helvetica] font-normal tracking-[0]">
              年
            </div>
          </div>

          <div className="inline-flex items-center pl-1 pr-0 py-1 relative flex-[0_0_auto] mt-[-4.50px] mb-[-2.50px]">
            <div className="relative w-2.5 mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#000000] text-[8px] tracking-[0] leading-[normal]">
              {userInfo?.birth_month}
            </div>
          </div>

          <div className="inline-flex items-center px-0 py-1 relative flex-[0_0_auto] mt-[-4.50px] mb-[-2.50px]">
            <div className="w-fit mt-[-1.00px] text-black text-[8px] leading-[normal] relative [font-family:'Inter',Helvetica] font-normal tracking-[0]">
              月
            </div>
          </div>

          <div className="inline-flex items-center pl-1 pr-0 py-1 relative flex-[0_0_auto] mt-[-4.50px] mb-[-2.50px]">
            <div className="relative w-2.5 mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#000000] text-[8px] tracking-[0] leading-[normal]">
              {userInfo?.birth_day}
            </div>
          </div>

          <div className="inline-flex items-center px-0 py-1 relative flex-[0_0_auto] mt-[-4.50px] mb-[-2.50px]">
            <div className="w-fit mt-[-1.00px] text-black text-[8px] leading-[normal] relative [font-family:'Inter',Helvetica] font-normal tracking-[0]">
              日
            </div>
          </div>

          <div className="inline-flex items-center pl-4 pr-0 py-1 relative flex-[0_0_auto] mt-[-4.50px] mb-[-2.50px]">
            <div className="w-fit mt-[-1.00px] ml-[-4.00px] text-black text-[8px] leading-[normal] relative [font-family:'Inter',Helvetica] font-normal tracking-[0]">
              （満  {age} 歳）
            </div>
          </div>

        </div>
      </div>

      <div className="flex w-[90px] h-[73px] items-start justify-center gap-2.5 px-[17px] py-0 relative">
        <div className="relative w-[52px] h-[68.33px] mt-[-1.00px] bg-[#b3b3b3] border border-solid border-black" />
      </div>
    </div>

    <div className="inline-flex h-[71px] items-center relative">
      <div className="flex flex-col w-[280px] h-[71px] items-start relative">
        <div className="flex flex-col h-[73px] items-start relative self-stretch w-full mt-[-1.00px] mb-[-1.00px] ml-[-1.00px] mr-[-1.00px] bg-white border border-solid border-black">
          <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex h-[18px] items-start px-2.5 py-1 relative self-stretch w-full">
              <div className="w-fit mt-[-1.00px] text-black text-[8px] leading-[normal] relative [font-family:'Inter',Helvetica] font-normal tracking-[0]">
                現住所
              </div>

              <div className="flex w-4 items-center pl-1 pr-0 py-0 relative">
                <div className="w-fit mt-[-1.00px] text-black text-[8px] leading-[normal] relative [font-family:'Inter',Helvetica] font-normal tracking-[0]">
                  (〒
                </div>
              </div>

              <div className="flex w-[45px] items-center relative">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#000000] text-[8px] tracking-[0] leading-[normal]">
                  {userInfo?.postal_code}
                </div>
              </div>

              <div className="inline-flex items-center px-0.5 py-0 relative flex-[0_0_auto]">
                <div className="w-fit mt-[-1.00px] text-black text-[8px] leading-[normal] relative [font-family:'Inter',Helvetica] font-normal tracking-[0]">
                  )
                </div>
              </div>
            </div>

            <div className="flex flex-col w-[280px] items-start justify-center pt-2.5 pb-[18px] px-2.5 relative flex-[0_0_auto]">
              <div className="w-[270px] mt-[-1.00px] mr-[-10.00px] text-black text-[8px] leading-[normal] relative [font-family:'Inter',Helvetica] font-normal tracking-[0]">
                {userInfo?.prefecture} {userInfo?.city} {userInfo?.address}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-[90px] h-[71px] items-start relative">
        <div className="flex h-5 items-center px-2 py-1 relative self-stretch w-[93px] mt-[-1.00px] ml-[-1.50px] mr-[-1.00px] bg-white border border-solid border-black">
          <div className="w-3 text-black text-[6px] ml-[-2.50px] leading-[normal] relative [font-family:'Inter',Helvetica] font-normal tracking-[0]">
            電話
          </div>

          <div className="flex w-16 items-center pl-1 pr-0 py-1 relative mt-[-4.00px] mb-[-2.00px]">
            <div className="relative w-16 mt-[1.00px] mr-[-4.00px] [font-family:'Inter',Helvetica] font-normal text-black text-[8px] tracking-[0] leading-[normal]">
              {userInfo?.phone_number}
            </div>
          </div>
        </div>

        <div className="flex flex-col h-[54px] items-start relative self-stretch w-[93px] mb-[-1.00px] ml-[-1.50px] mt-[-1.00px] bg-white border border-solid border-black">
          <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto] mb-[-1.00px]">
            <div className="flex h-[18px] items-start px-2 py-1 relative self-stretch w-full">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-black text-[8px] tracking-[0] leading-[normal]">
                E-mail
              </div>
            </div>

            <div className="flex flex-wrap items-start gap-[0px_0px] px-2 py-0 relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative w-[74px] h-[38px] mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#000000] text-[8px] text-justify tracking-[0] leading-[normal] break-words whitespace-pre-wrap">
                {userInfo?.email_address}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};
