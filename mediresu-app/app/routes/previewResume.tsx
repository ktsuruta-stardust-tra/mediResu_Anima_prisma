import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Career } from "~/components/preview/Career";
import { PreviewUserInfo } from "~/components/preview/PreviewUserInfo";
import prisma from "~/utils/prismaClient";
import { sessionStorage} from "~/utils/session";
import { educations,employments,user_informations,licenses,self_prs } from "@prisma/client";
import { useState,useEffect } from "react";

interface Data{
  userInfo:user_informations[];
  userEdus:educations[];
  userEmps:employments[];
  userLicenses:licenses[];
  userPr:self_prs[];
}


export const loader = async ({request}) => {
  const session = await sessionStorage.getSession(request.headers.get("Cookie"));

  const userId = session.get("userId");

  if (!userId) {
    return new Response("User not authenticated", { status: 401 });
  }

  try {

    const [userInfo, userEdus, userEmps, userLicenses, userPr] =await Promise.all([
      prisma.user_informations.findMany({
        where: { user_id: userId },
      }),
      prisma.educations.findMany({
        where: { user_id: userId },
        orderBy: { order_num: 'asc' },
      }),
      prisma.employments.findMany({
        where: { user_id: userId },
        orderBy: { order_num: 'asc' },
      }),
      prisma.licenses.findMany({
        where: { user_id: userId },
        orderBy: { order_num: 'asc' },
      }),
      prisma.self_prs.findMany({
        where: { user_id: userId },
      }),
    ]);

    // データの返却
    return json({
      userInfo,
      userEdus,
      userEmps,
      userLicenses,
      userPr,
    });

  } catch (error) {
    // エラーハンドリング
    throw new Response("Error fetching data", { status: 500 });
  }

}

export default function previewResume(){
  const data = useLoaderData<any>();

  const {userInfo,userEdus,userEmps,userLicenses,userPr}:Data = data;

  //学歴・職歴の左用の配列を要素２０で準備
  const emptyArrays = Array.from({ length: 20 }, () => []);
  const emptyRightArrays = Array.from({ length: 6 }, () => []);

  const listdata:any=[]
  const licenseList:any=[]

  userEdus?.forEach((item:educations)=>{
    listdata.push(
      {
        year:item.education_start_year,
        month:item.education_start_month,
        name:item.school_name,
        status:"入学"
      })
    listdata.push({
      year:item.education_end_year,
      month:item.education_end_month,
      name:item.school_name,
      status:item.education_end_status,
    })
  })

  userEmps?.forEach((item:employments)=>{
    listdata.push({
      year:item.job_start_year,
      month:item.job_start_month,
      name:item.company_name,
      status:item.job_start_status,
    })
    if(item.job_end_year && item.job_end_month){
      listdata.push({
        year:item.job_end_year,
        month:item.job_end_month,
        name:item.company_name,
        status:"退職",
      })
    }
  })

  const firstList = listdata.slice(0,20);
  const secondList = listdata.slice(20);

  userLicenses?.forEach((item) => {
    if(item.license_year > 1900){
      licenseList.push({
        year:String(item.license_year),
        month:String(item.license_month),
        name:item.license_name,
        status:"取得",
      })
    }
  })
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1; // 月は0から始まるので+1
  const day = today.getDate();
  
  const [age,setAge] = useState(0);

  useEffect(() => {
    if(userInfo?.length > 0){
   
      let age = year - userInfo[0]?.birth_year;
  
      // まだ誕生日を迎えていない場合、年齢を1引く
      if (month < userInfo[0]?.birth_month || (month === userInfo[0]?.birth_month && day < userInfo[0]?.birth_day)) {
        age--;
      }
      setAge(age);
    }
  },[userInfo])

  

  return (
    <div className="bg-gray-200 flex items-center justify-center min-h-screen">
      {/* A4サイズの枠 */}
      <div className="bg-white border border-gray-500 w-[297mm] h-[210mm] max-w-[297mm] max-h-[210mm] flex-shrink-0 relative">
      <div         
          style={{
          transform: "scale(1.33)", // 必要な倍率に調整します
          transformOrigin: "top left", // スケールの基準を左上に設定
          }}
        >
      <div className="bg-white  relative">
        <div className="absolute top-[27px] left-9 [font-family:'Inter',Helvetica] font-normal text-black text-sm tracking-[0] leading-[normal]">
          履　歴　書
        </div>
        <div className="absolute w-[63px] h-2.5 top-[34px] left-[255px]">
          <div className="absolute top-0.5 left-0 [font-family:'Inter',Helvetica] font-normal text-black text-[7px] tracking-[0] leading-[normal] whitespace-nowrap">
            {year}年{month}月{day}日現在
          </div>

        </div>
        
        <PreviewUserInfo userInfo={userInfo?.length > 0? userInfo[0]:null} age={age}/>

        <div className="flex flex-col w-[370px] items-start absolute top-[204px] left-9">
          
          <Career  year="年" month="月" detail="学　歴・職　歴"  status=""/>
        
          {emptyArrays.map((_,index)=> (
            
            <Career key={index} year={firstList[index]?.year} month={firstList[index]?.month} detail={firstList[index]?.name}  status={firstList[index]?.status}/>

          ))}
          
        </div>

        <div className="flex flex-col w-[370px] items-start absolute top-[50px] left-[436px]">
          <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex items-center relative self-stretch w-full flex-[0_0_auto]">
              <Career  year="年" month="月" detail="学　歴・職　歴"  status=""/>
            </div>

            {emptyRightArrays.map((_,index) =>(
              <Career key={index} year={secondList[index]?.year} month={secondList[index]?.month} detail={secondList[index]?.name}  status={secondList[index]?.status}/>
            ))}
            
          </div>

          <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex items-center relative self-stretch w-full flex-[0_0_auto]">
              
              <Career  year="年" month="月" detail="免　許・資　格"  status=""/>
            </div>

            {emptyRightArrays.map((_,index) =>(
              <Career 
                key={index} 
                year={licenseList[index]?.year} 
                month={licenseList[index]?.month} 
                detail={licenseList[index]?.name} 
                status={licenseList[index]?.status} 
              />
            ))}
            
          </div>
        </div>

        <div className="flex flex-col w-[372px] items-start absolute top-[314px] left-[436px]">
          <div className="flex h-[23px] items-center gap-2.5 px-[7px] py-1.5 relative self-stretch w-full mt-[-1.00px] ml-[-1.00px] mr-[-1.00px] bg-white border border-solid border-black">
            <div className="relative w-fit [font-family:'Inter',Helvetica] font-normal text-black text-[7px] tracking-[0] leading-[normal] whitespace-nowrap">
              志望の動機、自己PRなど
            </div>
          </div>

          <div className="flex h-[106px] px-0 py-2.5 relative self-stretch w-full mb-[-1.00px] ml-[-1.00px] mr-[-1.00px] mt-[-1.00px] bg-white border border-solid border-black">
            <div className="w-[350px] mt-[-3.50px] mb-[-0.50px] ml-2 text-[#000000] text-[8px] text-left leading-[11px] relative [font-family:'Inter',Helvetica] font-normal tracking-[0]">
              {userPr?.length > 0 ? userPr[0].self_pr_text:""}
            </div>
          </div>
        </div>

        <div className="flex flex-col w-[372px] h-[123px] items-start absolute top-[456px] left-[436px]">
          <div className="flex h-[23px] items-center gap-2.5 px-[7px] py-1.5 relative self-stretch w-full mt-[-1.00px] ml-[-1.00px] mr-[-1.00px] bg-white border border-solid border-black">
            <div className="w-fit text-black text-[7px] leading-[normal] whitespace-nowrap relative [font-family:'Inter',Helvetica] font-normal tracking-[0]">
              本人希望記入欄（特に給料、職種、勤務時間、勤務地、その他についての希望などがあれば記入）
            </div>
          </div>

          <div className="flex h-[106px] items-center justify-center px-0 py-2.5 relative self-stretch w-full mb-[-1.00px] ml-[-1.00px] mr-[-1.00px] mt-[-1.00px] bg-white border border-solid border-black">
            <div className="w-[350px] mt-[-3.50px] mb-[-0.50px] text-[#000000] text-[8px] text-justify leading-[11px] relative [font-family:'Inter',Helvetica] font-normal tracking-[0]">
              
            </div>
          </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};
