import React from "react";
import { string } from "yup";
import { UserJobSummaryType,UserExperienceType } from "~/types/curriculumDatas";

interface OperationDetail {
  operationName: string;
  inputText: string | null;
}
interface Props {
  jobSummary:UserJobSummaryType;
  skills:any;
  categoryOne: {[categoryName: string]: OperationDetail[]};
  categoryTwo: {[categoryName: string]: OperationDetail[]};
  experience:UserExperienceType
}
function getTodayDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0'); // 月は0から始まるので+1
  const day = String(today.getDate()).padStart(2, '0');
  return `${year}年${month}月${day}日`;
}

export function WorkHistoryPageOne({
  jobSummary,
  skills,
  categoryOne,
  categoryTwo,
  experience,
}:Props) {
  const jobsummaryText = jobSummary.summary;
  const todayDate = getTodayDate();
  return (
    <div className="bg-gray-200 flex items-center justify-center min-h-screen">

      {/* A4サイズの枠 */}
      <div className="bg-white border border-gray-500 w-[210mm] h-[297mm] max-w-[210mm] max-h-[297mm] flex-shrink-0 relative">

        {/* コンテンツ */}
        <div className="absolute" style={{ top: '18mm', left: '78mm' }}>

          <span className="text-black text-sm [font-family:'Inter',Helvetica] font-normal tracking-[0] leading-[normal]">
            職　務　経　歴　書
          </span>
        </div>

        <div className="absolute" style={{ top: '15mm', left: '157mm', right: '10mm', height: '6mm' }}>
          <div className="absolute" style={{ top: '1mm', right: '0mm', textAlign: 'right', whiteSpace: 'nowrap' }}>
            <span className="text-black text-[2.5mm] [font-family:'Inter',Helvetica] font-normal tracking-[0] leading-[normal]">
              {todayDate}現在
            </span>
          </div>
        </div>

        <div className="absolute" style={{ top: '25mm', left: '10mm' }}>
          <span className="text-black text-[3.5mm] [font-family:'Inter',Helvetica] font-normal tracking-[0] leading-[normal]">
            ■職務要約
          </span>  
        </div>

        <div className="absolute border border-solid border-black" style={{ width: '188mm', height: '37mm', top: '31mm', left: '10mm' }}>
          <div className="absolute" style={{ top: '2mm', left: '3mm' ,right:"3mm" }}>
            <div className="text-black text-[10.5px] [font-family:'Inter',Helvetica] font-normal tracking-[0] break-words whitespace-pre-wrap">
              <div>{jobsummaryText}</div>
            </div>
          </div>
        </div>

        <div className="absolute" style={{ top: '76mm', left: '10mm' }}>
          <span className="text-black text-[3.5mm] [font-family:'Inter',Helvetica] font-normal tracking-[0] leading-[normal]">
            ■活かせる経験・知識・技術
          </span>
        </div>
      
        <div className="absolute border border-solid border-black" style={{ width: '188mm', height: '204mm', top: '82mm', left: '10mm'}}>
          <div className="absolute" style={{ top: '5mm', left: '3mm' }}>
            <span className="text-black text-[2.5mm] [font-family:'Inter',Helvetica] font-normal tracking-[0] leading-[normal]">
              【得意分野】
              <br/>
              {skills.skills}
            </span>
            
          </div>

          <div className="absolute" style={{ top: '42mm', left: '3mm', display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
            <span className="text-black text-[2.5mm] [font-family:'Inter',Helvetica] font-normal tracking-[0] leading-[normal]">
              【美容医療の経験】
              <br/>
              {categoryOne && Object.keys(categoryOne).map((categoryName) =>(
                <div key={categoryName} >
                  &lt;{categoryName}&gt;
                  <br/>
                  {categoryOne[categoryName].map((operation,index) =>(
                    <span key={index} className="inline break-words">
                      {operation.inputText ?  operation.operationName+ "(" + operation.inputText + ")"  : operation.operationName},
                      
                    </span>
                  ))}
                </div>
                 
              ))}
            </span>
          </div>

          <div className="absolute" style={{ top: '86mm', left: '3mm' }}>
            <span className="text-black text-[2.5mm] [font-family:'Inter',Helvetica] font-normal tracking-[0] leading-[normal]">
              【保健医療の経験】
              
              {categoryTwo && Object.keys(categoryTwo).map((categoryName) =>(
                  <div key={categoryName} >
                    &lt;{categoryName}&gt;
                    <br/>
                    {categoryTwo[categoryName].map((operation,index) =>(
                      <span key={index} className="inline break-words">
                        {operation.inputText ?  operation.operationName+ "(" + operation.inputText + ")"  : operation.operationName},
                      </span>
                    ))}
                  </div>
                ))}
            </span>
          </div>


          <div className="absolute" style={{ top: '180mm', left: '3mm' }}>
            <span className="text-black text-[2.5mm] [font-family:'Inter',Helvetica] font-normal tracking-[0] leading-[normal]">
              【その他のスキル】
              <br/>
              {experience.windows && "Windows,"}
              {experience.mac && "Mac,"}
              {experience.microsoft_word && "Microsoft Word,"}
              {experience.microsoft_excel && "Microsoft Excel,"}
              {experience.microsoft_powerpoint && "Microsoft PowerPoint,"}
              {experience.poster_design && "院内ポスター,"}
              {experience.sns_update && "SNS更新作業,"}
              {experience.brochure_creation && "パンフレット制作,"}
              {experience.other_checked && "その他（" +  experience.other_experience + ")"}

            </span>
          </div>
        </div>


      </div>
    </div>
  );
}
