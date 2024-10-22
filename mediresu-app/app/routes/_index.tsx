import { useEffect } from "react";
import { ActionFunction } from "@remix-run/node";
import liff from "@line/liff";
import { getProfile,sendProfileToServer } from "~/utils/liff";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useState } from "react";
import { useOutletContext } from "@remix-run/react";
import { Link } from "@remix-run/react";


// export let action = async ({ request }) => {
//   const data = await request.json();  // リクエストボディを取得
//   console.log("Received data:", data);
  
//   // 必要なデータベース保存処理などを追加
  
//   return json({ success: true });
// };



export default function ProfilePage() {
  const userId = useOutletContext<any>();

  return (
    <div className="p-4">
    <h1 className="text-lg font-bold">LIFF Test Page</h1>
    {userId ? (
      <p className="text-red-500 dark:text-white">
        <Link to="top">
        <strong>LINE ID:</strong> {userId}
        </Link>
      </p>
    ) : (
      <p>LINE IDを取得中...</p>
    )}
  </div>
  );

  }



  
