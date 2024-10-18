import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { BodyComp } from "~/components/top/BodyComp";
import { HeaderComp } from "~/components/top/HeaderComp";
// export const meta: MetaFunction = () => {
//   return [
//     { title: "New Remix App" },
//     { name: "description", content: "Welcome to Remix!" },
//   ];
// };

export default function Top() {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
        <div className="bg-white w-[375px] h-[566px] relative">
            <div className="inline-flex flex-col items-center gap-[30px] px-5 py-10 absolute top-0 left-0 bg-[#24b6ae]">
                <HeaderComp className="!flex-[0_0_auto]" group="/img/group-18-1.png" />
                <BodyComp 
                    className="!flex-[0_0_auto]"  
                    groupClassName = ""
                    groupClassNameOverride = ""
                    text = "履歴書を作成・編集"
                    vectorClassName = ""
                    divClassName = ""
                    preview1 = "履歴書を"
                    preview2 = "プレビュー"
                    download1 = "履歴書を"
                    download2 = "ダウンロード"
                    link="../resumeResponse/userinfo"/>

                <BodyComp 
                className="!flex-[0_0_auto]"  
                groupClassName = "!ml-[-16.46px]"
                groupClassNameOverride = "!mr-[-18.46px] !w-[156px]"
                text = "職務経歴書を作成・編集"
                vectorClassName = "!ml-[-8.50px]"
                divClassName = "!mr-[-10.50px] !w-[86px]"
                preview1 = "職務経歴書を"
                preview2 = "プレビュー"
                download1 = "職務経歴書を"
                download2 = "ダウンロード"
                link="../curriculumResponse/job-summary"/>  
            </div>

        </div>
    </div>
    );


}