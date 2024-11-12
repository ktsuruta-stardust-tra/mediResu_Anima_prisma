import type { MetaFunction } from "@remix-run/node";
import { Link, useNavigate } from "@remix-run/react";
import { BodyComp } from "~/components/top/BodyComp";
import { HeaderComp } from "~/components/top/HeaderComp";
import { useState } from "react";
import { useLocation,useNavigation } from "@remix-run/react";
import { useEffect } from "react";

export default function Top() {
    const location = useLocation();
    const [message,setMessage] = useState("");
    const [isLoading,setIsLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
      const params = new URLSearchParams(location.search);
      const status = params.get("status");

      if(status === "success"){
        setMessage("保存が完了しました");
        setTimeout(() => setMessage(""), 2000);
      }
    },[location])

    useEffect(() => {
      if(!message){
        navigate("/top");
      }
    },[message])

    const handleChange = () => {
      setIsLoading(true);
    }

    const handleDownloadPDF = async (previewUrl:string,landscape:boolean,pdfName:string) => {
      setIsLoading(true);
      try {
        
        // PDF生成用のAPIエンドポイントにPOSTリクエストを送信
        const response = await fetch("/generate-pdf", { 
          method: "POST" ,
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            //url: "/previewWorkHistory", // PDF化するリンクを含めて送信
            url:previewUrl,
            landscape:landscape,
          })
        });
  
        // レスポンスがPDFではない場合にエラーをスロー
        if (!response.ok || response.headers.get("Content-Type") !== "application/pdf") {
          throw new Error("Expected a PDF response, but got something else.");
        }
  
        // PDFデータをblobとして取得
        const pdfBlob = await response.blob();
  
        // ダウンロードリンクを生成
        const pdfObjectUrl = URL.createObjectURL(pdfBlob);
  
        // ダウンロードリンクをプログラムでクリックしてPDFをダウンロード
        const link = document.createElement("a");
        link.href = pdfObjectUrl;
        link.download = pdfName; // ダウンロード時のファイル名
        document.body.appendChild(link); // 一時的にリンクをDOMに追加
        link.click(); // 自動クリックでダウンロード
        document.body.removeChild(link); // リンクをDOMから削除
  
        // オブジェクトURLを解放（メモリリーク防止）
        URL.revokeObjectURL(pdfObjectUrl);
  
      } catch (error) {
        console.error("Failed to generate or download PDF:", error);
      }
      setIsLoading(false);
    };

    return (
      <div className="bg-white flex flex-col items-center justify-start w-full min-h-screen overflow-y-auto">

        {/* スピナー */}
        {isLoading && (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50 z-50">
            <div
                className="animate-spin h-10 w-10 border-4 border-blue-500 rounded-full border-t-transparent"
                aria-label="読み込み中"
            ></div>
            </div>
        )}

        {/* メッセージ表示エリア */}
        {message && (
          <div className="fixed top-10 left-1/2 transform -translate-x-1/2 bg-pink-500 text-white px-4 py-2 rounded shadow-md z-50">
            {message}
          </div>
        )}

        <div className="bg-white w-full max-w-[375px]">
          <div className="inline-flex flex-col items-center gap-[30px] px-5 py-10 bg-[#24b6ae]">

            <HeaderComp className="!flex-[0_0_auto]" group="/img/group-18-1.png" />

            <BodyComp
              className="!flex-[0_0_auto]"
              groupClassName=""
              groupClassNameOverride=""
              text="履歴書を作成・編集"
              vectorClassName=""
              divClassName=""
              preview1="履歴書を"
              preview2="プレビュー"
              download1="履歴書を"
              download2="ダウンロード"
              link="../resumeResponse/userinfo"
              previewLink="/previewResume"
              handleChange={handleChange}
              url="/previewResume"
              landscape={true}
              pdfName="resume.pdf"
              handleDownloadPDF={handleDownloadPDF}
            />
  
            <BodyComp
              className="!flex-[0_0_auto]"
              groupClassName="!ml-[-16.46px]"
              groupClassNameOverride="!mr-[-18.46px] !w-[156px]"
              text="職務経歴書を作成・編集"
              vectorClassName="!ml-[-8.50px]"
              divClassName="!mr-[-10.50px] !w-[86px]"
              preview1="職務経歴書を"
              preview2="プレビュー"
              download1="職務経歴書を"
              download2="ダウンロード"
              link="../curriculumResponse/job-summary"
              previewLink="/previewWorkHistory"
              handleChange={handleChange}
              url="/previewWorkHistory"
              landscape={false}
              pdfName="work_histroy.pdf"
              handleDownloadPDF={handleDownloadPDF}
            />
          </div>
        <p className="text-[#3d3d3d] text-[10px] px-4 py-2 mt-2 text-center">
            Copyright © 2024 LOGICA Inc. All Rights Reserved.
        </p>
        
        </div>
      </div>
    );
  }
  