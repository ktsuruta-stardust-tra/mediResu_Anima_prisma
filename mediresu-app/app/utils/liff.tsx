import liff from "@line/liff";
import { json } from "@remix-run/react";

export async function getProfile() {
    const profile = await liff.getProfile();
    return {
      userId: profile.userId,
      displayName: profile.displayName,
      pictureUrl: profile.pictureUrl,
      statusMessage: profile.statusMessage,
    };
  }

export async function sendProfileToServer(profile:any) {
    // await fetch("https:///z-110-54-74-143.ngrok-free.app", {
    const response = await fetch("/getUserId", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(profile),
    });
        // responseから戻り値を取得
        const result = await response.json() // サーバーからのJSONレスポンスをパース
        // console.log(result);
        return result;
  }
  
