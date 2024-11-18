// app/routes/preview2PdfWorkHistory.tsx
import { ActionFunction, json } from "@remix-run/node";
import puppeteer from "puppeteer-core";
import chromium from "@sparticuz/chromium";

import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
// const __dirname = path.dirname(fileURLToPath(import.meta.url));
// PDF生成のAction関数

export const action: ActionFunction = async ({ request }) => {

  
  try{
    const { url: relativeUrl , landscape} = await request.json();
    const fullUrl = `${new URL(request.url).origin}${relativeUrl}`;

    // const url = new URL(request.url);
    // const pageUrl = `${url.origin}/previewWorkHistory`; // PDFに変換したいページのURL

    //const browser = await puppeteer.launch();

    // PuppeteerをChromiumバイナリで起動


    // Chromiumバイナリのパスを確認
    const executablePath = await chromium.executablePath();

    console.log("Chromium executablePath:", executablePath);

    const browser = await puppeteer.launch({
      args: chromium.args, // 必要な引数を設定
      executablePath: await chromium.executablePath(), // Chromiumのパスを指定
      headless: chromium.headless, // headlessモードを有効化
    });


    const page = await browser.newPage();


    // PDFに変換したいページにアクセス
    await page.goto(fullUrl, {
      waitUntil: "networkidle0", // ページが完全に読み込まれるのを待つ
    });

    // A4サイズでPDFを生成
    const pdfBuffer = await page.pdf({
      format: "A4",
      landscape:landscape,
      printBackground: true,
      margin: { top: "0mm", right: "0mm", bottom: "0mm", left: "0mm" },
    });



    await browser.close();



    // // PDFバッファをローカルに保存 (開発環境用)
    // const filePath = path.resolve(__dirname, "../../public/work_history.pdf");
    // fs.writeFileSync(filePath, pdfBuffer);

    // PDFバッファをレスポンスとして返す
    return new Response(pdfBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "attachment; filename=work_history.pdf", // attachmentに変更
      },
    });
  }catch(error){
    console.error("Error generating PDF:", error);
    return new Response("Failed to generate PDF", { status: 500 });
  }

};