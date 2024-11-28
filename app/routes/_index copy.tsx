import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { HeaderComp } from "~/components/top/HeaderComp";
import { DiscriptionItemComp } from "~/components/login/DiscriptionItemComp";
import { DiscriptionComp } from "~/components/login/DiscriptionComp";
import { QaComp } from "~/components/login/QAComp";
import { useEffect, useState } from "react";
import { sendProfileToServer,getProfile } from "~/utils/liff";
import { Outlet } from "@remix-run/react";
import liff from "@line/liff";
import { json, redirect } from "@remix-run/node";
import { useLoaderData,useNavigate } from "@remix-run/react";



export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export let loader = async () => {
  // 必要なデータを取得したり、何か処理を行う
  return json({ liffId: process.env.LIFF_ID,  });
};

export default function Index() {

  const [saveStatus, setSaveStatus] = useState("");
  const [userId, setUserId] = useState(null);
  const [pushButton,setPushButton]=useState(false);
  const [isLoading,setIsLoading]=useState(false);
  const {liffId} =  useLoaderData();
  const navigate = useNavigate();

    useEffect(() => {
    liff.init({ liffId }).then(() => {
      if (liff.isLoggedIn()) {
        // ログイン済みであれば自動でプロフィール取得とサーバー送信処理を実行
        handleProfileFetchAndSave();
      }
    }).catch(error => {
      console.error("LIFF初期化エラー:", error);
      setSaveStatus("LIFF初期化失敗");
    });
  }, []);

  const handleButtonClick = () => {
    setPushButton(true);
    setIsLoading(true); // 初期化開始

    liff.init({ liffId }).then(() => {
      if (liff.isLoggedIn()) {
        handleProfileFetchAndSave();
      } else {
        liff.login({ redirectUri: window.location.href });
      }
    }).catch(error => {
      console.error("LIFF初期化エラー:", error);
      setSaveStatus("LIFF初期化失敗");
      setIsLoading(false);
    });
  };

  const handleProfileFetchAndSave = () => {
    getProfile()
      .then(profile => {
        sendProfileToServer(profile)
          .then(result => {
            setSaveStatus(result.success ? "保存成功" : "保存失敗");

            if (result.success && result.userId) {
              setUserId(result.userId);
              navigate("/top"); // 成功時に「/top」ページへ遷移
            }
          })
          .catch(error => {
            console.error("プロフィールのサーバー送信エラー:", error);
            setSaveStatus("保存失敗");
          });
      })
      .catch(error => {
        console.error("プロフィール取得エラー:", error);
        setSaveStatus("プロフィール取得失敗");
      })
      .finally(() => {
        setIsLoading(false); // ロード状態解除
      });
  };

  

  return (
    <div className="bg-white flex flex-col justify-start items-center w-full min-h-screen">
      <div className="bg-white overflow-hidden w-[375px]">
        <div className="flex flex-col w-[375px] items-center gap-5 px-5 py-10 bg-[#24b6ae]">
          <HeaderComp className="!flex-[0_0_auto]" group="/img/group-18-1.png" />
          <div className="relative self-stretch h-[115px] font-normal text-white text-xs text-justify tracking-[0] [font-family:'Inter',Helvetica] leading-5">
            「メディレジュ」は、医療業界に特化した履歴書·職務経歴書作成WEBサービスです。
            <br />
            私たちのサービスは、業界特化型のテンプレートと簡単な操作で、プロフェッショナルな履歴書や職務経歴書を短時間で作成することができます。業界のニーズに応じたデザインと内容で、あなたのキャリアをサポートします。
          </div>
          <div className="flex flex-col w-[261px] items-start gap-2.5">
            <div className="relative w-[263px] h-[70px] mr-[-2.00px]">
            <button onClick={handleButtonClick} className="active:scale-95 transition-transform duration-150 ease-in-out">
              <div className="relative w-[261px] h-[70px] bg-white rounded-md shadow-[0px_2px_2px_#00000040]">
                <div className="absolute top-[25px] left-[83px] [font-family:'Inter',Helvetica] font-semibold text-[#3d3d3d] text-base text-center tracking-[0] leading-5 whitespace-nowrap">
                  LINE連携で利用開始
                </div>
                <Outlet context={{userId}}></Outlet>
                <img className="absolute w-10 h-10 top-[15px] left-[22px]" alt="Line LOGO" src="/img/line-logo.svg" />
              </div>
            </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[375px] items-center px-5 py-10 bg-white">
          <DiscriptionItemComp
            className="!self-stretch !w-full"
            divClassName="!left-[83px]"
            line="/img/line-3-2.svg"
            lineClassName="!left-[125px] !w-[85px]"
          />
          <DiscriptionComp
            className="!self-stretch !h-[unset] !justify-center !flex-[0_0_auto] !pt-5 !pb-0 !px-0 !w-full"
            divClassName="!mb-[unset]"
            text = {<>かんたん<br/>作成!</>}
            text1 = "カンタンに履歴書や職務経歴書を作成できるシンプルなインターフェースを提供しています。面倒なフォーマット調整やレイアウト変更の心配は無用です。初心者でも簡単に使いこなせます。"
          />
          <DiscriptionComp
            className="!self-stretch !h-[unset] !justify-center !flex-[0_0_auto] !pt-5 !pb-0 !px-0 !w-full"
            divClassName="!mb-[unset]"
            divClassNameOverride="!mr-[-7.00px] !mt-[-10.00px] !ml-[-7.00px] !mb-[-8.00px]"
            text={
              <>
                医療
                <br />
                クリニック
                <br />
                特化!
              </>
            }
            text1="当サービスは、医療クリニック向けの履歴書・職務経歴書テンプレートを提供し、業界のニーズに沿った内容で採用担当者に強い印象を与えます。特有のスキルや経験を効果的にアピールできます。"
          />
          <DiscriptionComp
            className="!self-stretch !h-[unset] !justify-center !flex-[0_0_auto] !pt-5 !pb-0 !px-0 !w-full"
            divClassName="!tracking-[0.60px] !mb-[unset]"
            divClassNameOverride="!mr-[-9.50px] !ml-[-9.50px]"
            text={
              <>
                便利な
                <br />
                保存と共有!
              </>
            }
            text1="作成した履歴書や職務経歴書は、PDF形式で保存し、いつでも簡単に共有できます。仕事探しの際に役立つ情報をスムーズに提供できます。"
          />
        </div>
        <div className="flex flex-col w-[375px] items-center pt-10 pb-0 px-5 bg-[#d9eeec]">
          <DiscriptionItemComp
            className="!self-stretch !w-full"
            divClassName="!left-[67px]"
            line="/img/line-3-2.svg"
            lineClassName="!left-[125px] !w-[85px]"
            text="よくある質問について"
          />
          <QaComp
            className="!self-stretch !flex-[0_0_auto] !pt-5 !pb-0 !px-0 !w-full"
            divClassName="!self-stretch !h-[unset]"
            text={
              <>
                「メディレジュ」とは&nbsp;&nbsp;
                <br />
                どのようなサービスですか？
              </>
            }
            text1="「メディレジュ」は、医療業界（特に看護師・受付カウンセラー）に特化した履歴書・職務経歴書作成WEBサービスです。簡単な操作で、業界特化型のテンプレートを使用してプロフェッショナルな履歴書や職務経歴書を作成できます。"
          />
          <QaComp
            className="!self-stretch !flex-[0_0_auto] !pt-5 !pb-0 !px-0 !w-full"
            divClassName="!self-stretch !h-[unset]"
            divClassNameOverride="!left-[7px]"
            text={
              <>
                どのようにサービスを
                <br />
                利用することができますか？
              </>
            }
            text1="サービスを利用するには、まず当サイトに登録し、ログインします。その後、簡単な質問事項に回答頂く事で履歴書・経歴書の作成をスマホで行う事が出来ます。記載中の保存や修正も簡単に行えます。詳細な使い方については、当サイトの「使い方」ページをご覧ください。"
            text2="Q2."
          />
          <QaComp
            className="!self-stretch !flex-[0_0_auto] !pt-5 !pb-10 !px-0 !w-full"
            divClassName="!h-[unset]"
            divClassName1="!h-5 !whitespace-nowrap !top-[19px]"
            divClassNameOverride="!left-[7px]"
            groupClassName="!w-[285px]"
            text="サービスの利用は無料ですか？"
            text1="本サービスは完全無料となります。"
            text2="Q3."
          />
        </div>
        <p className="text-[#3d3d3d] text-[10px] px-4 py-2 mt-2 text-center">
            Copyright © 2024 LOGICA Inc. All Rights Reserved.
        </p>
        
      </div>
    </div>
  );
};

