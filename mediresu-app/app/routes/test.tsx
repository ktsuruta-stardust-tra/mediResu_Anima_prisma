import { useEffect } from "react";
import { ActionFunction } from "@remix-run/node";
import liff from "@line/liff";
import { getProfile,sendProfileToServer } from "~/utils/liff";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useState } from "react";
import prisma from "~/utils/prismaClient";
import { sessionStorage } from "~/utils/session";

export let action = async ({ request }) => {
  const session = await sessionStorage.getSession(request.headers.get("Cookie"));

  try{
    const data = await request.json();  // リクエストボディを取得
    console.log("Received data:", data);
    const {userId} = data;
    if(!userId){
      return json({ success: false, message: "line_id is required" }, { status: 400 });
    }
    // 必要なデータベース保存処理などを追加
      // line_id で既存のユーザーを検索
      let user = await prisma.users.findUnique({
        where: {
          line_id: userId,
        },
      });
      // ユーザーが見つからない場合、新しいユーザーを作成
      if (!user) {
        user = await prisma.users.create({
          data: {
            line_id: userId,
          },
        });
        console.log("Created new user with id:", user.id);
      } else {
        console.log("Found existing user with id:", user.id);
      }

      session.set("userId",user.id);
      const setCookieHeader = await sessionStorage.commitSession(session);
      // console.log("Set-Cookie header:", setCookieHeader);
      // セッションをコミットしてクッキーを返す
      return new Response(
        JSON.stringify({
          success: true,
          userId: user.id
        }),
        {
          headers: {
            "Content-Type": "application/json",
            "Set-Cookie": await sessionStorage.commitSession(session),
          },
        }
      );
    }catch(error){
      console.error("Error processing request:", error);
      return json({ success: false, message: "Internal Server Error" }, { status: 500 });
    }



};


  
