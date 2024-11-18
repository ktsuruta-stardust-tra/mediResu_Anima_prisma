
import { WorkHistoryPageOne } from "~/components/previewWorkHistory/WorkHistoryPageOne"; 
import { WorkHistoryPageTwo } from "~/components/previewWorkHistory/WorkHistoryPageTwo";
import { WorkHistoryPageThree } from "~/components/previewWorkHistory/WorkHistoryPageThree";
import { useLoaderData } from "@remix-run/react";
import prisma from "~/utils/prismaClient";
import { sessionStorage } from '~/utils/session';
import { Prisma } from "@prisma/client";
import { skillsExperiencesSchema } from "~/utils/zodSchemas";
import { useEffect } from "react";
// 辞書の型を定義
interface CategoryOperationDict {
    [categoryName: string]: {
      operationName: string;
      inputText: string | null;
    }[];
}
export const loader = async ({request}) => {
    const session = await sessionStorage.getSession(request.headers.get("Cookie"));
  
    const userId = session.get("userId");
    //const userId = 4
    if (!userId) {
      return new Response("User not authenticated", { status: 401 });
    }
  
    try {
      const [
        userOperations,
        otherInitialDataObj,
        userExperienceFormData,
        jobHistory,
        jobSummary,
        skills,
      ] = await Promise.all([
  
        // Prismaクエリでデータを取得
        prisma.user_operations.findMany({
            where: {
                user_id: userId
            },
            include: {
                operations: {
                    select: {
                        name: true,
                        categories: {
                            select: {
                                id: true, // IDも取得して分類に利用
                                name: true
                            }
                        },
                        supplementary_texts: {
                            select: {
                                input_text: true
                            },
                        take: 1
                        }
                    }
                }
            },
            orderBy: {
                operations: {
                    categories: {
                    id: 'asc' // カテゴリのID順で並び替え
                    }
                }
            }
        }),
  
        // supplementary_textsのデータ取得
        prisma.supplementary_texts.findMany({
          where: { user_id: userId },
          select: {
            operation_id: true,
            input_text: true,
          },
        }),
  
        // user_experiencesのデータ取得
        prisma.user_experiences.findMany({
          where: { user_id: userId },
        }),
  
        //job_history
        prisma.job_histories.findMany({
            where:{user_id:userId}
        }),
        
        // job_summariesのデータ取得
        prisma.job_summaries.findMany({
          where: { user_id: userId },
        }),
  
        // skills_experiencesのデータ取得
        prisma.skills_experiences.findMany({
          where: { user_id: userId },
        }),
  
      ]);

    console.log(userOperations,jobHistory)
    

    // 辞書を生成
    // 空の辞書を定義
    // 2つの辞書を生成
    const categoryOperationDict1to4: CategoryOperationDict = {}; // IDが1～4のカテゴリ用
    const categoryOperationDict5andAbove: CategoryOperationDict = {}; // IDが5以上のカテゴリ用

    userOperations.forEach(item => {
        if (item.operations && item.operations.categories) {
            const categoryId = item.operations.categories.id;
            const categoryName = item.operations.categories.name;
            const operationName = item.operations.name;
            const inputText = item.operations.supplementary_texts[0]?.input_text || undefined;

            // IDが1～4の場合とそれ以降の場合で辞書を分ける
            const targetDict = categoryId >= 1 && categoryId <= 4 ? categoryOperationDict1to4 : categoryOperationDict5andAbove;

            // カテゴリー名が辞書に存在しない場合、新しいキーとして追加
            if (!targetDict[categoryName]) {
                targetDict[categoryName] = [];
            }

            // operationNameとinputTextをオブジェクト形式でリストに追加
            targetDict[categoryName].push({
                operationName: operationName,
                inputText: inputText
            });
        }
    });


      // supplementary_textsの処理
      type SupplementaryText = Prisma.PromiseReturnType<typeof prisma.supplementary_texts.findMany>[0];
      const otherData = otherInitialDataObj?.reduce((acc, item: SupplementaryText) => {
        if (item.operation_id !== null) {
          acc[item.operation_id] = item.input_text;
        }
        return acc;
      }, {} as Record<number, string>);
  
      return {
        categoryOperationDict1to4,
        categoryOperationDict5andAbove,
        otherData,
        userExperienceFormData,
        jobHistory,
        jobSummary,
        skills,
      };
    } catch (err) {
      console.error("Error loading data:", err);
      throw new Response("Error loading data", { status: 500 });
    }
  };

export default function previewWorkHistory() {
    
    const {categoryOperationDict1to4,
        categoryOperationDict5andAbove,
        otherData,userExperienceFormData,
        jobHistory,jobSummary,skills
    }= useLoaderData<any>();
    console.log(categoryOperationDict1to4)
    
    const historyArray = [];
    if(jobHistory){
        for ( let i = 0;i < jobHistory.length; i += 2){
            historyArray.push(jobHistory.slice(i,i+2));
        }
    }

    useEffect(() => {
      // Google Fontsのロードを待機
      document.fonts.ready.then(() => {
        console.log("Fonts loaded!");
      });
    }, []);
    return(
      <>
        {/* Google Fontsの読み込み */}
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap"
          rel="stylesheet"
        />

        <main style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
        <WorkHistoryPageOne 
            jobSummary={jobSummary ?  jobSummary[0]: ""} 
            skills={skills ? skills[0]: ""}
            categoryOne={categoryOperationDict1to4}
            categoryTwo={categoryOperationDict5andAbove}
            experience={userExperienceFormData ? userExperienceFormData[0]:""}
        />
        <WorkHistoryPageTwo />

        {historyArray.map((element,index) =>(
            <div key={index}>
                <WorkHistoryPageThree jobHistoryOne= {element[0] ? element[0]:""} jobHistoryTwo={element[1] ? element[1]:""}/>
            </div>
        ))}
      </main>
      </>
    );

}