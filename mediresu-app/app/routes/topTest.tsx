import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { HeaderComp } from "~/components/top/HeaderComp";
import { DiscriptionItemComp } from "~/components/login/DiscriptionItemComp";
import { DiscriptionComp } from "~/components/login/DiscriptionComp";
import { QaComp } from "~/components/login/QAComp";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
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
            <Link to="top">
              <div className="relative w-[261px] h-[70px] bg-white rounded-md shadow-[0px_2px_2px_#00000040]">
                <div className="absolute top-[25px] left-[83px] [font-family:'Inter',Helvetica] font-semibold text-[#3d3d3d] text-base text-center tracking-[0] leading-5 whitespace-nowrap">
                  LINE連携で利用開始
                </div>
                <img className="absolute w-10 h-10 top-[15px] left-[22px]" alt="Line LOGO" src="/img/line-logo.svg" />
              </div>
              </Link>
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



// const resources = [
//   {
//     href: "https://remix.run/start/quickstart",
//     text: "Quick Start (5 min)",
//     icon: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="24"
//         height="20"
//         viewBox="0 0 20 20"
//         fill="none"
//         className="stroke-gray-600 group-hover:stroke-current dark:stroke-gray-300"
//       >
//         <path
//           d="M8.51851 12.0741L7.92592 18L15.6296 9.7037L11.4815 7.33333L12.0741 2L4.37036 10.2963L8.51851 12.0741Z"
//           strokeWidth="1.5"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//       </svg>
//     ),
//   },
//   {
//     href: "https://remix.run/start/tutorial",
//     text: "Tutorial (30 min)",
//     icon: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="24"
//         height="20"
//         viewBox="0 0 20 20"
//         fill="none"
//         className="stroke-gray-600 group-hover:stroke-current dark:stroke-gray-300"
//       >
//         <path
//           d="M4.561 12.749L3.15503 14.1549M3.00811 8.99944H1.01978M3.15503 3.84489L4.561 5.2508M8.3107 1.70923L8.3107 3.69749M13.4655 3.84489L12.0595 5.2508M18.1868 17.0974L16.635 18.6491C16.4636 18.8205 16.1858 18.8205 16.0144 18.6491L13.568 16.2028C13.383 16.0178 13.0784 16.0347 12.915 16.239L11.2697 18.2956C11.047 18.5739 10.6029 18.4847 10.505 18.142L7.85215 8.85711C7.75756 8.52603 8.06365 8.21994 8.39472 8.31453L17.6796 10.9673C18.0223 11.0653 18.1115 11.5094 17.8332 11.7321L15.7766 13.3773C15.5723 13.5408 15.5554 13.8454 15.7404 14.0304L18.1868 16.4767C18.3582 16.6481 18.3582 16.926 18.1868 17.0974Z"
//           strokeWidth="1.5"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//       </svg>
//     ),
//   },
//   {
//     href: "https://remix.run/docs",
//     text: "Remix Docs",
//     icon: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="24"
//         height="20"
//         viewBox="0 0 20 20"
//         fill="none"
//         className="stroke-gray-600 group-hover:stroke-current dark:stroke-gray-300"
//       >
//         <path
//           d="M9.99981 10.0751V9.99992M17.4688 17.4688C15.889 19.0485 11.2645 16.9853 7.13958 12.8604C3.01467 8.73546 0.951405 4.11091 2.53116 2.53116C4.11091 0.951405 8.73546 3.01467 12.8604 7.13958C16.9853 11.2645 19.0485 15.889 17.4688 17.4688ZM2.53132 17.4688C0.951566 15.8891 3.01483 11.2645 7.13974 7.13963C11.2647 3.01471 15.8892 0.951453 17.469 2.53121C19.0487 4.11096 16.9854 8.73551 12.8605 12.8604C8.73562 16.9853 4.11107 19.0486 2.53132 17.4688Z"
//           strokeWidth="1.5"
//           strokeLinecap="round"
//         />
//       </svg>
//     ),
//   },
//   {
//     href: "https://rmx.as/discord",
//     text: "Join Discord",
//     icon: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="24"
//         height="20"
//         viewBox="0 0 24 20"
//         fill="none"
//         className="stroke-gray-600 group-hover:stroke-current dark:stroke-gray-300"
//       >
//         <path
//           d="M15.0686 1.25995L14.5477 1.17423L14.2913 1.63578C14.1754 1.84439 14.0545 2.08275 13.9422 2.31963C12.6461 2.16488 11.3406 2.16505 10.0445 2.32014C9.92822 2.08178 9.80478 1.84975 9.67412 1.62413L9.41449 1.17584L8.90333 1.25995C7.33547 1.51794 5.80717 1.99419 4.37748 2.66939L4.19 2.75793L4.07461 2.93019C1.23864 7.16437 0.46302 11.3053 0.838165 15.3924L0.868838 15.7266L1.13844 15.9264C2.81818 17.1714 4.68053 18.1233 6.68582 18.719L7.18892 18.8684L7.50166 18.4469C7.96179 17.8268 8.36504 17.1824 8.709 16.4944L8.71099 16.4904C10.8645 17.0471 13.128 17.0485 15.2821 16.4947C15.6261 17.1826 16.0293 17.8269 16.4892 18.4469L16.805 18.8725L17.3116 18.717C19.3056 18.105 21.1876 17.1751 22.8559 15.9238L23.1224 15.724L23.1528 15.3923C23.5873 10.6524 22.3579 6.53306 19.8947 2.90714L19.7759 2.73227L19.5833 2.64518C18.1437 1.99439 16.6386 1.51826 15.0686 1.25995ZM16.6074 10.7755L16.6074 10.7756C16.5934 11.6409 16.0212 12.1444 15.4783 12.1444C14.9297 12.1444 14.3493 11.6173 14.3493 10.7877C14.3493 9.94885 14.9378 9.41192 15.4783 9.41192C16.0471 9.41192 16.6209 9.93851 16.6074 10.7755ZM8.49373 12.1444C7.94513 12.1444 7.36471 11.6173 7.36471 10.7877C7.36471 9.94885 7.95323 9.41192 8.49373 9.41192C9.06038 9.41192 9.63892 9.93712 9.6417 10.7815C9.62517 11.6239 9.05462 12.1444 8.49373 12.1444Z"
//           strokeWidth="1.5"
//         />
//       </svg>
//     ),
//   },
// ];
