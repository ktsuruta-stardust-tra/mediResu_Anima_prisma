import { ActionFunction } from "@remix-run/node";
import chromium from "chrome-aws-lambda";

export const action: ActionFunction = async ({ request }) => {
  try {
    const { url: relativeUrl, landscape } = await request.json();

    if (!relativeUrl || typeof relativeUrl !== "string") {
      return new Response("Invalid URL", { status: 400 });
    }

    const fullUrl = `${new URL(request.url).origin}${relativeUrl}`;
    console.log("Generating PDF for URL:", fullUrl);
    
    const browser = await chromium.puppeteer.launch({
      args: [...chromium.args, "--no-sandbox", "--disable-setuid-sandbox"],
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath,
      headless: true, // 本番・ローカル両方で動作可能
    });

    const page = await browser.newPage();

    try {
      await page.goto(fullUrl, {
        waitUntil: "domcontentloaded", // パフォーマンス改善
      });
    } catch (gotoError) {
      console.error("Failed to navigate to the page:", gotoError);
      return new Response("Failed to load the page for PDF generation", { status: 500 });
    }

    const pdfBuffer = await page.pdf({
      format: "a4",
      landscape: landscape,
      printBackground: true,
      margin: { top: "0mm", right: "0mm", bottom: "0mm", left: "0mm" },
    });

    await browser.close();

    return new Response(pdfBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "attachment; filename=work_history.pdf",
        "Content-Length": pdfBuffer.length.toString(), // 推奨
      },
    });
  } catch (error) {
    console.error("Error generating PDF:", error.message, error.stack);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
