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
    // リクエストヘッダーからCookieを取得
    const cookies = request.headers.get("Cookie") || "";

    // const url = new URL(request.url);
    // const pageUrl = `${url.origin}/previewWorkHistory`; // PDFに変換したいページのURL

    //const browser = await puppeteer.launch();

    // PuppeteerをChromiumバイナリで起動


    // Chromiumバイナリのパスを確認
    const executablePath = await chromium.executablePath();

    const browser = await puppeteer.launch({
      args: [
        ...chromium.args, // Chromiumの基本引数
        "--font-render-hinting=none",          // フォントのヒンティングを無効化
        "--enable-font-antialiasing",          // アンチエイリアスを有効化
        "--disable-gpu",                       // 必要に応じてGPUを無効化
        "--no-sandbox",                        // サンドボックスを無効化
        "--disable-setuid-sandbox",            // セットUIDサンドボックスを無効化
        "--lang=ja-JP",                        // 言語設定を日本語に
      ],
      executablePath, // Chromiumの実行可能パスを指定
      headless: chromium.headless, // ヘッドレスモードを有効化
    });

    const page = await browser.newPage();

    // Cookieをリクエストヘッダーに設定
    await page.setExtraHTTPHeaders({
      Cookie: cookies,
    });

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