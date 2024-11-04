import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import { useState,useEffect } from "react";
import { sendProfileToServer,getProfile } from "./utils/liff";
import liff from "@line/liff";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import "./tailwind.css";




export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },

];

export let loader = async () => {
  // 必要なデータを取得したり、何か処理を行う
  return json({ liffId: process.env.LIFF_ID,  });
};



export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {

  // const [userId, setUserId] = useState("");
  // const [saveStatus, setSaveStatus] = useState(""); 
  // const {liffId} = useLoaderData();
  
  // useEffect(() => {
  //   liff.init({ liffId }).then(() => {
  //     if (liff.isLoggedIn()) {
  //       getProfile()
  //         .then(profile => {
  //           sendProfileToServer(profile)
  //             .then(result => {
  //               setSaveStatus(result.success ? "保存成功" : "保存失敗");
  
  //               if (result.success && result.userId) {
  //                 setUserId(result.userId);
  //               }
  //             })
  //             .catch(error => {
  //               console.error("プロフィールのサーバー送信エラー:", error);
  //               setSaveStatus("保存失敗");
  //             });
  //         })

  //         .catch(error => {
  //           console.error("プロフィール取得エラー:", error);
  //           setSaveStatus("プロフィール取得失敗");
  //         });
  //     } else {
  //       liff.login();
  //     }

  //   }).catch(error => {
  //     console.error("LIFF初期化エラー:", error);
  //     setSaveStatus("LIFF初期化失敗");
  //   });

  // }, [liffId]);


  return <Outlet/>;
}
