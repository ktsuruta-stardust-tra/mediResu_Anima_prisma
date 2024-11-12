import React from "react";

export default function Preview2PdfResume() {
  const handleDownloadPDF = async () => {
    try {
      // PDF生成用のAPIエンドポイントにPOSTリクエストを送信
      const response = await fetch("/generate-pdf", { 
        method: "POST" ,
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          url: "/previewResume", // PDF化するリンクを含めて送信
          landscape:true,
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
      link.download = "resume.pdf"; // ダウンロード時のファイル名
      document.body.appendChild(link); // 一時的にリンクをDOMに追加
      link.click(); // 自動クリックでダウンロード
      document.body.removeChild(link); // リンクをDOMから削除

      // オブジェクトURLを解放（メモリリーク防止）
      URL.revokeObjectURL(pdfObjectUrl);

    } catch (error) {
      console.error("Failed to generate or download PDF:", error);
    }
  };

  return (
    <div>
      <h1>履歴書PDFダウンロード</h1>
      <button onClick={handleDownloadPDF} className="mt-4 p-2 bg-blue-500 text-white rounded">
        Download PDF
      </button>
    </div>
  );
}
