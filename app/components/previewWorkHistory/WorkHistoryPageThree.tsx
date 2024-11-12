import { j } from "node_modules/vite/dist/node/types.d-aGj9QkWt";
import React from "react";
import { UserJobHistoryType } from "~/types/curriculumDatas";


interface Props {
  jobHistoryOne:UserJobHistoryType;
  jobHistoryTwo:UserJobHistoryType;
}

// メインコンポーネント
export const WorkHistoryPageThree = ({jobHistoryOne,jobHIstoryTwo}:Props): JSX.Element => {


  return (
    <div className="bg-gray-200 flex items-center justify-center min-h-screen">

      {/* A4サイズの枠 */}
      <div className="bg-white border border-gray-500 w-[210mm] h-[297mm] relative">
        <div         
          style={{
          transform: "scale(1.3)", // 必要な倍率に調整します
          transformOrigin: "top left", // スケールの基準を左上に設定
          }}
        >

        <div className="h-[26px] top-[37px] absolute w-[535px] left-[30px]">
            <div className="flex w-[55px] h-[26px] items-center justify-center gap-2.5 px-[19px] py-0.5 absolute top-0 left-0 bg-white border border-solid border-black">
              <div className="w-fit text-black text-[7px] whitespace-nowrap relative [font-family:'Inter',Helvetica] font-normal text-justify tracking-[0] leading-[normal]">
                社名
              </div>
            </div>

            <div className="flex w-[482px] h-[26px] items-center justify-center gap-2.5 px-[19px] py-0.5 absolute top-0 left-[53px] bg-white border border-solid border-black">
              <div className="w-fit text-[#000000] text-[8px] relative [font-family:'Inter',Helvetica] font-normal text-justify tracking-[0] leading-[normal]">
                {jobHistoryOne && jobHistoryOne.company_name}
              </div>
            </div>
          </div>

        <div className="absolute top-[21px] left-[31px] [font-family:'Inter',Helvetica] font-normal text-black text-[10px] tracking-[0] leading-[normal] whitespace-nowrap">
          ■職務経歴
        </div>

        <div className="h-[333px] top-[69px] absolute w-[535px] left-[30px]">
          <div className="flex w-[55px] h-[21px] items-center justify-center gap-2.5 px-[19px] py-0.5 absolute top-0 left-0 bg-white border border-solid border-black">
            <div className="w-fit ml-[-3.00px] mr-[-1.00px] text-black text-[7px] whitespace-nowrap relative [font-family:'Inter',Helvetica] font-normal text-justify tracking-[0] leading-[normal]">
              期　間
            </div>
          </div>

          <div className="flex w-[482px] h-[21px] items-center justify-center gap-2.5 px-[19px] py-0.5 absolute top-0 left-[53px] bg-white border border-solid border-black">
            <div className="w-fit text-black text-[7px] whitespace-nowrap relative [font-family:'Inter',Helvetica] font-normal text-justify tracking-[0] leading-[normal]">
              業務内容
            </div>
          </div>

          <div className="flex w-[55px] h-[314px] items-start justify-center pt-2.5 pb-0  absolute top-[19px] left-0 bg-white border border-solid border-black">
            <div className="text-[6px] ">

              {jobHistoryOne && jobHistoryOne.job_start_year + "年" + jobHistoryOne.job_start_month + "月"}
              <br/>
              ~
              <br/>
              {jobHistoryOne && jobHistoryOne.job_end_year ? jobHistoryOne.job_end_year + "年" + jobHistoryOne.job_end_month + "月" : ""}
            </div>
          </div>

          <div className="w-[482px] h-[314px] items-start p-2.5 absolute top-[19px] left-[53px] bg-white border border-solid border-black">
              <div className="w-full mt-[-1px] text-black text-[8px] [font-family:'Inter',Helvetica] font-normal break-words whitespace-pre-wrap">
                {jobHistoryOne && jobHistoryOne.job_details} 
                
              </div>
          </div>
        </div>


        <div className="h-[26px] top-[447px] absolute w-[535px] left-[30px]">
          <div className="flex w-[55px] h-[26px] items-center justify-center gap-2.5 px-[19px] py-0.5 absolute top-0 left-0 bg-white border border-solid border-black">
            <div className="w-fit text-black text-[7px] whitespace-nowrap relative [font-family:'Inter',Helvetica] font-normal text-justify tracking-[0] leading-[normal]">
              社名
            </div>
          </div>

          <div className="flex w-[482px] h-[26px] items-center justify-center gap-2.5 px-[19px] py-0.5 absolute top-0 left-[53px] bg-white border border-solid border-black">
            <div className="w-fit text-[#000000] text-[8px] relative [font-family:'Inter',Helvetica] font-normal text-justify tracking-[0] leading-[normal]">
              {jobHIstoryTwo && jobHIstoryTwo.company_name}
            </div>
          </div>
        </div>
        <div className="h-[333px] top-[479px] absolute w-[535px] left-[30px]">
          <div className="flex w-[55px] h-[21px] items-center justify-center gap-2.5 px-[19px] py-0.5 absolute top-0 left-0 bg-white border border-solid border-black">
            <div className="w-fit ml-[-3.00px] mr-[-1.00px] text-black text-[7px] whitespace-nowrap relative [font-family:'Inter',Helvetica] font-normal text-justify tracking-[0] leading-[normal]">
              期　間
            </div>
          </div>

          <div className="flex w-[482px] h-[21px] items-center justify-center gap-2.5 px-[19px] py-0.5 absolute top-0 left-[53px] bg-white border border-solid border-black">
            <div className="w-fit text-black text-[7px] whitespace-nowrap relative [font-family:'Inter',Helvetica] font-normal text-justify tracking-[0] leading-[normal]">
              業務内容
            </div>
          </div>

          <div className="flex w-[55px] h-[314px] items-start justify-center pt-2.5 pb-0 px-2.5 absolute top-[19px] left-0 bg-white border border-solid border-black">
          <div className="text-[6px] ">

              {jobHIstoryTwo && jobHIstoryTwo.job_start_year + "年" + jobHIstoryTwo.job_start_month + "月"}
              <br/>
              ~
              <br/>
              {jobHIstoryTwo && jobHIstoryTwo.job_end_year ? jobHIstoryTwo.job_end_year + "年" + jobHIstoryTwo.job_end_month + "月" : ""}
            </div>
          </div>

          <div className="inline-flex flex-col w-[482px] h-[314px] items-start p-2.5 absolute top-[19px] left-[53px] bg-white border border-solid border-black">

            <div className="w-full mt-[-1px] text-black text-[8px] [font-family:'Inter',Helvetica] font-normal break-words whitespace-pre-wrap">
              {jobHIstoryTwo && jobHIstoryTwo.job_details}
            </div>

          </div>
        </div>
        </div>
      </div>
    </div>
  );
};
