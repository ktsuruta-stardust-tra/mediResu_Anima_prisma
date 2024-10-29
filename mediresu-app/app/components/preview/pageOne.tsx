import React from "react";
interface Props {
    className: any;
  }

export const PageOne = ({
  className,
}: Props): JSX.Element => {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-[842px] h-[595px] relative">
        <div className="absolute w-[371px] h-[142px] top-12 left-[31px] bg-[url(/img/subtract.svg)] bg-[100%_100%]">
          <div className="absolute w-[279px] h-[54px] top-px left-px">
            <div className="absolute w-[279px] h-[54px] top-0 left-0">
              <img
                className="absolute w-[279px] h-px top-[53px] left-0 object-cover"
                alt="Line"
                src="/img/line-2.svg"
              />

              <img
                className="absolute w-px h-[54px] top-0 left-[216px]"
                alt="Line"
                src="/img/line-3.svg"
              />
            </div>

            <div className="top-[3px] left-[7px] text-black text-[6px] leading-[normal] whitespace-nowrap absolute [font-family:'Inter',Helvetica] font-normal tracking-[0]">
              ふりがな
            </div>

            <div className="top-[29px] left-[7px] text-black text-[8px] leading-[normal] absolute [font-family:'Inter',Helvetica] font-normal tracking-[0]">
              氏　　名
            </div>

            <div className="absolute w-8 h-3.5 top-5 left-[231px]">
              <div className="top-px left-[3px] text-black text-[8px] leading-[normal] absolute [font-family:'Inter',Helvetica] font-normal tracking-[0]">
                男 ・ 女
              </div>

              <div className="absolute w-3.5 h-3.5 top-0 left-0 rounded-[7px] border border-solid border-[#ff0000]" />
            </div>

            <img
              className="absolute w-[216px] h-px top-3.5 left-0"
              alt="Line"
              src="/img/line-4.svg"
            />

            <div className="top-[25px] left-[52px] text-[#ff0000] text-sm leading-[normal] absolute [font-family:'Inter',Helvetica] font-normal tracking-[0]">
              山田山田山　太郎太郎太
            </div>

            <div className="top-px left-[51px] text-[#ff0000] text-[8px] leading-[normal] absolute [font-family:'Inter',Helvetica] font-normal tracking-[0]">
              やまだやまだやまだ　たろうたろうたろう
            </div>
          </div>

          <div className="absolute w-[370px] h-[73px] top-[69px] left-px">
            <img
              className="absolute w-[279px] h-px top-px left-0 object-cover"
              alt="Line"
              src="/img/line-2.svg"
            />

            <div className="absolute w-[370px] h-[73px] top-0 left-0">
              <img
                className="absolute w-[370px] h-px top-4 left-0"
                alt="Line"
                src="/img/line-52.svg"
              />

              <img
                className="absolute w-px h-[73px] top-0 left-[279px] object-cover"
                alt="Line"
                src="/img/line-6.svg"
              />

              <div className="top-[18px] left-[7px] text-black text-[7px] leading-[normal] whitespace-nowrap absolute [font-family:'Inter',Helvetica] font-normal tracking-[0]">
                現住所&nbsp;&nbsp;(〒　　　ー　　　　)
              </div>

              <div className="top-[17px] left-11 absolute [font-family:'Inter',Helvetica] font-normal text-[#ff0000] text-[8px] tracking-[0] leading-[normal]">
                000
              </div>

              <div className="top-[17px] left-[72px] absolute [font-family:'Inter',Helvetica] font-normal text-[#ff0000] text-[8px] tracking-[0] leading-[normal]">
                0000
              </div>
            </div>

            <div className="top-1 left-[7px] text-black text-[6px] leading-[normal] whitespace-nowrap absolute [font-family:'Inter',Helvetica] font-normal tracking-[0]">
              ふりがな
            </div>

            <div className="top-1 left-[283px] text-black text-[6px] leading-[normal] whitespace-nowrap absolute [font-family:'Inter',Helvetica] font-normal tracking-[0]">
              電話
            </div>

            <div className="absolute top-[18px] left-[283px] [font-family:'Inter',Helvetica] font-normal text-black text-[6px] tracking-[0] leading-[normal] whitespace-nowrap">
              E-mail
            </div>

            <div className="top-[3px] left-[52px] text-[#ff0000] text-[8px] leading-[normal] absolute [font-family:'Inter',Helvetica] font-normal tracking-[0]">
              あいうえおかきくけこさしすせそたちつてとなにぬねのはひふ
            </div>

            <div className="top-[42px] left-1.5 text-[#ff0000] text-[8px] leading-[normal] absolute [font-family:'Inter',Helvetica] font-normal tracking-[0]">
              あいうえこかきくけこさしすせそたちつてとなにぬねのはひふへほまみむ
            </div>

            <div className="absolute top-9 left-[285px] [font-family:'Inter',Helvetica] font-normal text-[#ff0000] text-[8px] tracking-[0] leading-[normal]">
              abcdefghijklmnopqrs
              <br />
              tuvwxyz@gmail.com
            </div>

            <div className="top-[3px] left-[301px] absolute [font-family:'Inter',Helvetica] font-normal text-[#ff0000] text-[8px] tracking-[0] leading-[normal]">
              00000000000
            </div>
          </div>

          <div className="top-[57px] left-2 text-black text-[7px] leading-[normal] whitespace-nowrap absolute [font-family:'Inter',Helvetica] font-normal tracking-[0]">
            生年月日
          </div>

          <div className="absolute w-[94px] h-2.5 top-14 left-[174px]">
            <div className="top-px left-0 text-black text-[7px] leading-[normal] whitespace-nowrap absolute [font-family:'Inter',Helvetica] font-normal tracking-[0]">
              年　　月　　日&nbsp;&nbsp;　 (満 　&nbsp;&nbsp;歳)
            </div>

            <div className="top-0 left-2.5 absolute [font-family:'Inter',Helvetica] font-normal text-[#ff0000] text-[8px] tracking-[0] leading-[normal]">
              00
            </div>

            <div className="top-0 left-[30px] absolute [font-family:'Inter',Helvetica] font-normal text-[#ff0000] text-[8px] tracking-[0] leading-[normal]">
              00
            </div>

            <div className="top-0 left-[73px] absolute [font-family:'Inter',Helvetica] font-normal text-[#ff0000] text-[8px] tracking-[0] leading-[normal]">
              00
            </div>
          </div>

          <div className="top-14 left-[151px] absolute [font-family:'Inter',Helvetica] font-normal text-[#ff0000] text-[8px] tracking-[0] leading-[normal]">
            2000
          </div>
        </div>

        <div className="absolute w-[371px] h-[296px] top-[51px] left-[440px] border border-solid border-black">
          <div className="absolute w-[371px] h-[296px] top-0 left-0">
            <img
              className="absolute w-[371px] h-px top-[18px] left-0 object-cover"
              alt="Line"
              src="/img/line-37.svg"
            />

            <img
              className="absolute w-[371px] h-px top-[38px] left-0"
              alt="Line"
              src="/img/line-49.svg"
            />

            <img
              className="absolute w-[371px] h-px top-14 left-0"
              alt="Line"
              src="/img/line-49.svg"
            />

            <img
              className="absolute w-[371px] h-px top-[74px] left-0"
              alt="Line"
              src="/img/line-49.svg"
            />

            <img
              className="absolute w-[371px] h-px top-[92px] left-0"
              alt="Line"
              src="/img/line-49.svg"
            />

            <img
              className="absolute w-[371px] h-px top-28 left-0"
              alt="Line"
              src="/img/line-49.svg"
            />

            <img
              className="absolute w-[371px] h-px top-[130px] left-0"
              alt="Line"
              src="/img/line-49.svg"
            />

            <img
              className="absolute w-[371px] h-px top-[148px] left-0 object-cover"
              alt="Line"
              src="/img/line-37.svg"
            />

            <img
              className="absolute w-[371px] h-px top-[166px] left-0 object-cover"
              alt="Line"
              src="/img/line-37.svg"
            />

            <img
              className="absolute w-[371px] h-px top-[186px] left-0"
              alt="Line"
              src="/img/line-49.svg"
            />

            <img
              className="absolute w-[371px] h-px top-[204px] left-0"
              alt="Line"
              src="/img/line-49.svg"
            />

            <img
              className="absolute w-[371px] h-px top-[222px] left-0"
              alt="Line"
              src="/img/line-49.svg"
            />

            <img
              className="absolute w-[371px] h-px top-60 left-0"
              alt="Line"
              src="/img/line-49.svg"
            />

            <img
              className="absolute w-[371px] h-px top-[260px] left-0"
              alt="Line"
              src="/img/line-49.svg"
            />

            <img
              className="absolute w-[371px] h-px top-[278px] left-0"
              alt="Line"
              src="/img/line-49.svg"
            />

            <img
              className="absolute w-px h-[296px] top-0 left-[61px]"
              alt="Line"
              src="/img/line-46.svg"
            />

            <img
              className="absolute w-px h-[296px] top-0 left-[108px]"
              alt="Line"
              src="/img/line-46.svg"
            />
          </div>

          <div className="top-[3px] left-[27px] text-black text-[7px] leading-[normal] whitespace-nowrap absolute [font-family:'Inter',Helvetica] font-normal tracking-[0]">
            年
          </div>

          <div className="top-[3px] left-20 text-black text-[7px] leading-[normal] whitespace-nowrap absolute [font-family:'Inter',Helvetica] font-normal tracking-[0]">
            月
          </div>

          <div className="top-[3px] left-[214px] text-black text-[7px] leading-[normal] whitespace-nowrap absolute [font-family:'Inter',Helvetica] font-normal tracking-[0]">
            学　歴・職　歴
          </div>

          <div className="top-[151px] left-[27px] text-black text-[7px] leading-[normal] whitespace-nowrap absolute [font-family:'Inter',Helvetica] font-normal tracking-[0]">
            年
          </div>

          <div className="top-[151px] left-20 text-black text-[7px] leading-[normal] whitespace-nowrap absolute [font-family:'Inter',Helvetica] font-normal tracking-[0]">
            月
          </div>

          <div className="top-[151px] left-[214px] text-black text-[7px] leading-[normal] whitespace-nowrap absolute [font-family:'Inter',Helvetica] font-normal tracking-[0]">
            免　許・資　格
          </div>

          <div className="top-[21px] left-[117px] text-[#ff0000] text-[8px] leading-[normal] absolute [font-family:'Inter',Helvetica] font-normal tracking-[0]">
            あいうえおかきくけこさしすせそたちつてと美容クリニック　退職
          </div>

          <div className="top-[21px] left-[19px] absolute [font-family:'Inter',Helvetica] font-normal text-[#ff0000] text-[8px] tracking-[0] leading-[normal]">
            2024
          </div>

          <div className="top-[21px] left-[81px] absolute [font-family:'Inter',Helvetica] font-normal text-[#ff0000] text-[8px] tracking-[0] leading-[normal]">
            2
          </div>

          <div className="top-10 left-[117px] text-[#ff0000] text-[8px] leading-[normal] absolute [font-family:'Inter',Helvetica] font-normal tracking-[0]">
            あいうえおかきくけこさしすせそたちつてと美容クリニック　入職
          </div>

          <div className="top-10 left-[19px] absolute [font-family:'Inter',Helvetica] font-normal text-[#ff0000] text-[8px] tracking-[0] leading-[normal]">
            2024
          </div>

          <div className="top-10 left-20 absolute [font-family:'Inter',Helvetica] font-normal text-[#ff0000] text-[8px] tracking-[0] leading-[normal]">
            3
          </div>

          <div className="top-[59px] left-[117px] text-[#ff0000] text-[8px] leading-[normal] absolute [font-family:'Inter',Helvetica] font-normal tracking-[0]">
            あいうえおかきくけこさしすせそたちつてと美容クリニック　退職
          </div>

          <div className="top-[59px] left-[19px] absolute [font-family:'Inter',Helvetica] font-normal text-[#ff0000] text-[8px] tracking-[0] leading-[normal]">
            2024
          </div>

          <div className="top-[59px] left-20 absolute [font-family:'Inter',Helvetica] font-normal text-[#ff0000] text-[8px] tracking-[0] leading-[normal]">
            4
          </div>

          <div className="top-[77px] left-[117px] text-[#ff0000] text-[8px] leading-[normal] absolute [font-family:'Inter',Helvetica] font-normal tracking-[0]">
            あいうえおかきくけこさしすせそたちつてと美容クリニック　入職
          </div>

          <div className="top-[77px] left-[19px] absolute [font-family:'Inter',Helvetica] font-normal text-[#ff0000] text-[8px] tracking-[0] leading-[normal]">
            2024
          </div>

          <div className="top-[77px] left-20 absolute [font-family:'Inter',Helvetica] font-normal text-[#ff0000] text-[8px] tracking-[0] leading-[normal]">
            4
          </div>

          <div className="top-[95px] left-[117px] text-[#ff0000] text-[8px] leading-[normal] absolute [font-family:'Inter',Helvetica] font-normal tracking-[0]">
            あいうえおかきくけこさしすせそたちつてと美容クリニック　退職
          </div>

          <div className="top-[95px] left-[19px] absolute [font-family:'Inter',Helvetica] font-normal text-[#ff0000] text-[8px] tracking-[0] leading-[normal]">
            2024
          </div>

          <div className="top-[95px] left-20 absolute [font-family:'Inter',Helvetica] font-normal text-[#ff0000] text-[8px] tracking-[0] leading-[normal]">
            4
          </div>

          <div className="top-[114px] left-[117px] text-[#ff0000] text-[8px] leading-[normal] absolute [font-family:'Inter',Helvetica] font-normal tracking-[0]">
            あいうえおかきくけこさしすせそたちつてと美容クリニック　入職
          </div>

          <div className="top-[114px] left-[19px] absolute [font-family:'Inter',Helvetica] font-normal text-[#ff0000] text-[8px] tracking-[0] leading-[normal]">
            2024
          </div>

          <div className="top-[114px] left-20 absolute [font-family:'Inter',Helvetica] font-normal text-[#ff0000] text-[8px] tracking-[0] leading-[normal]">
            4
          </div>

          <div className="top-[132px] left-[117px] text-[#ff0000] text-[8px] leading-[normal] absolute [font-family:'Inter',Helvetica] font-normal tracking-[0]">
            あいうえおかきくけこさしすせそたちつてと美容クリニック　退職
          </div>

          <div className="top-[132px] left-[19px] absolute [font-family:'Inter',Helvetica] font-normal text-[#ff0000] text-[8px] tracking-[0] leading-[normal]">
            2024
          </div>

          <div className="top-[132px] left-20 absolute [font-family:'Inter',Helvetica] font-normal text-[#ff0000] text-[8px] tracking-[0] leading-[normal]">
            4
          </div>

          <div className="top-[170px] left-[117px] text-[#ff0000] text-[8px] leading-[normal] absolute [font-family:'Inter',Helvetica] font-normal tracking-[0]">
            あいうえおかきくけこさしすせそたちつてとなにぬねの免許　取得
          </div>

          <div className="top-[170px] left-[19px] absolute [font-family:'Inter',Helvetica] font-normal text-[#ff0000] text-[8px] tracking-[0] leading-[normal]">
            2024
          </div>

          <div className="top-[170px] left-[79px] absolute [font-family:'Inter',Helvetica] font-normal text-[#ff0000] text-[8px] tracking-[0] leading-[normal]">
            12
          </div>

          <div className="top-[188px] left-[117px] text-[#ff0000] text-[8px] leading-[normal] absolute [font-family:'Inter',Helvetica] font-normal tracking-[0]">
            あいうえおかきくけこさしすせそたちつてとなにぬねの免許　取得
          </div>

          <div className="top-[188px] left-[19px] absolute [font-family:'Inter',Helvetica] font-normal text-[#ff0000] text-[8px] tracking-[0] leading-[normal]">
            2024
          </div>

          <div className="top-[188px] left-[79px] absolute [font-family:'Inter',Helvetica] font-normal text-[#ff0000] text-[8px] tracking-[0] leading-[normal]">
            10
          </div>

          <div className="top-[207px] left-[117px] text-[#ff0000] text-[8px] leading-[normal] absolute [font-family:'Inter',Helvetica] font-normal tracking-[0]">
            あいうえおかきくけこさしすせそたちつてとなにぬねの免許　取得
          </div>

          <div className="top-[207px] left-[19px] absolute [font-family:'Inter',Helvetica] font-normal text-[#ff0000] text-[8px] tracking-[0] leading-[normal]">
            2024
          </div>

          <div className="top-[207px] left-[79px] absolute [font-family:'Inter',Helvetica] font-normal text-[#ff0000] text-[8px] tracking-[0] leading-[normal]">
            12
          </div>

          <div className="top-[225px] left-[117px] text-[#ff0000] text-[8px] leading-[normal] absolute [font-family:'Inter',Helvetica] font-normal tracking-[0]">
            あいうえおかきくけこさしすせそたちつてとなにぬねの免許　取得
          </div>

          <div className="top-[225px] left-[19px] absolute [font-family:'Inter',Helvetica] font-normal text-[#ff0000] text-[8px] tracking-[0] leading-[normal]">
            2024
          </div>

          <div className="top-[225px] left-[79px] absolute [font-family:'Inter',Helvetica] font-normal text-[#ff0000] text-[8px] tracking-[0] leading-[normal]">
            10
          </div>

          <div className="top-[243px] left-[117px] text-[#ff0000] text-[8px] leading-[normal] absolute [font-family:'Inter',Helvetica] font-normal tracking-[0]">
            あいうえおかきくけこさしすせそたちつてとなにぬねの免許　取得
          </div>

          <div className="top-[243px] left-[19px] absolute [font-family:'Inter',Helvetica] font-normal text-[#ff0000] text-[8px] tracking-[0] leading-[normal]">
            2024
          </div>

          <div className="top-[243px] left-[79px] absolute [font-family:'Inter',Helvetica] font-normal text-[#ff0000] text-[8px] tracking-[0] leading-[normal]">
            10
          </div>

          <div className="top-[262px] left-[117px] text-[#ff0000] text-[8px] leading-[normal] absolute [font-family:'Inter',Helvetica] font-normal tracking-[0]">
            あいうえおかきくけこさしすせそたちつてとなにぬねの免許　取得
          </div>

          <div className="top-[262px] left-[19px] absolute [font-family:'Inter',Helvetica] font-normal text-[#ff0000] text-[8px] tracking-[0] leading-[normal]">
            2024
          </div>

          <div className="top-[262px] left-[79px] absolute [font-family:'Inter',Helvetica] font-normal text-[#ff0000] text-[8px] tracking-[0] leading-[normal]">
            12
          </div>

          <div className="top-[280px] left-[117px] text-[#ff0000] text-[8px] leading-[normal] absolute [font-family:'Inter',Helvetica] font-normal tracking-[0]">
            あいうえおかきくけこさしすせそたちつてとなにぬねの免許　取得
          </div>

          <div className="top-[280px] left-[19px] absolute [font-family:'Inter',Helvetica] font-normal text-[#ff0000] text-[8px] tracking-[0] leading-[normal]">
            2024
          </div>

          <div className="top-[280px] left-[79px] absolute [font-family:'Inter',Helvetica] font-normal text-[#ff0000] text-[8px] tracking-[0] leading-[normal]">
            10
          </div>
        </div>

        <div className="absolute w-[371px] h-[100px] top-[360px] left-[440px] border border-solid border-black">
          <img
            className="absolute w-[371px] h-px top-5 -left-px"
            alt="Line"
            src="/img/line-49.svg"
          />

          <div className="absolute top-1 left-[7px] [font-family:'Inter',Helvetica] font-normal text-black text-[7px] tracking-[0] leading-[normal] whitespace-nowrap">
            志望の動機、自己PRなど
          </div>

          <div className="top-[25px] left-2 text-[#ff0000] text-[8px] leading-[11px] absolute [font-family:'Inter',Helvetica] font-normal tracking-[0]">
            あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほあいうえおかきくけこさしすせ
            <br />
            そたちつてとなにぬねのはひふへほあいうえおかきくけこさしすせそたちつてとなにぬねのはひふ
            <br />
            へほあいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほあいうえおかきくけこさし
            <br />
            すせそたちつてとなにぬねのはひふへほあいうえおかきくけこさしすせそたちつてとなにぬねのは
            <br />
            ひふへほあいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほあいうえおかきくけこ
            <br />
            さしすせそたちつてとなにぬねのはひふへほあいうえおかきくけこさしすせそたちつてとなにぬね
          </div>
        </div>

        <div className="absolute w-[371px] h-[100px] top-[472px] left-[440px] border border-solid border-black">
          <img
            className="absolute w-[371px] h-px top-[18px] -left-px"
            alt="Line"
            src="/img/line-49.svg"
          />

          <div className="top-1 left-1.5 text-black text-[7px] leading-[normal] whitespace-nowrap absolute [font-family:'Inter',Helvetica] font-normal tracking-[0]">
            本人希望記入欄（特に給料、職種、勤務時間、勤務地、その他についての希望などがあれば記入）
          </div>

          <div className="top-[26px] left-2 text-[#ff0000] text-[8px] leading-[11px] absolute [font-family:'Inter',Helvetica] font-normal tracking-[0]">
            あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほあいうえおかきくけこさしすせ
            <br />
            そたちつてとなにぬねのはひふへほあいうえおかきくけこさしすせそたちつてとなにぬねのはひふ
            <br />
            へほあいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほあいうえおかきくけこさし
            <br />
            すせそたちつてとなにぬねのはひふへほあいうえおかきくけこさしすせそたちつてとなにぬねのは
            <br />
            ひふへほあいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほあいうえおかきくけこ
            <br />
            さしすせそたちつてとなにぬねのはひふへほあいうえおかきくけこさしすせそたちつてとなにぬね
          </div>
        </div>

        <div className="absolute w-[371px] h-[372px] top-[200px] left-[31px]">
          <img
            className="absolute w-[370px] h-px top-[18px] left-0 object-cover"
            alt="Line"
            src="/img/line-11.svg"
          />

          <img
            className="absolute w-[370px] h-px top-[38px] left-0"
            alt="Line"
            src="/img/line-52.svg"
          />

          <img
            className="absolute w-[370px] h-px top-28 left-0"
            alt="Line"
            src="/img/line-52.svg"
          />

          <img
            className="absolute w-[370px] h-px top-[186px] left-0"
            alt="Line"
            src="/img/line-52.svg"
          />

          <img
            className="absolute w-[370px] h-px top-[260px] left-0"
            alt="Line"
            src="/img/line-52.svg"
          />

          <img
            className="absolute w-[370px] h-px top-14 left-0"
            alt="Line"
            src="/img/line-52.svg"
          />

          <img
            className="absolute w-[370px] h-px top-[130px] left-0"
            alt="Line"
            src="/img/line-52.svg"
          />

          <img
            className="absolute w-[370px] h-px top-[204px] left-0"
            alt="Line"
            src="/img/line-52.svg"
          />

          <img
            className="absolute w-[370px] h-px top-[278px] left-0"
            alt="Line"
            src="/img/line-52.svg"
          />

          <img
            className="absolute w-[370px] h-px top-[74px] left-0"
            alt="Line"
            src="/img/line-52.svg"
          />

          <img
            className="absolute w-[370px] h-px top-[148px] left-0"
            alt="Line"
            src="/img/line-52.svg"
          />

          <img
            className="absolute w-[370px] h-px top-[222px] left-0"
            alt="Line"
            src="/img/line-52.svg"
          />

          <img
            className="absolute w-[370px] h-px top-[296px] left-0"
            alt="Line"
            src="/img/line-52.svg"
          />

          <img
            className="absolute w-[370px] h-px top-[92px] left-0"
            alt="Line"
            src="/img/line-52.svg"
          />

          <img
            className="absolute w-[370px] h-px top-[166px] left-0"
            alt="Line"
            src="/img/line-52.svg"
          />

          <img
            className="absolute w-[370px] h-px top-60 left-0"
            alt="Line"
            src="/img/line-52.svg"
          />

          <img
            className="absolute w-[370px] h-px top-[316px] left-0"
            alt="Line"
            src="/img/line-52.svg"
          />

          <img
            className="absolute w-[370px] h-px top-[334px] left-0"
            alt="Line"
            src="/img/line-52.svg"
          />

          <img
            className="absolute w-[370px] h-px top-[352px] left-0"
            alt="Line"
            src="/img/line-52.svg"
          />

          <img
            className="absolute w-px h-[372px] top-0 left-[60px]"
            alt="Line"
            src="/img/line-13.svg"
          />

          <img
            className="absolute w-px h-[372px] top-0 left-[107px]"
            alt="Line"
            src="/img/line-13.svg"
          />

          <div className="top-1 left-[27px] text-black text-[7px] leading-[normal] whitespace-nowrap absolute [font-family:'Inter',Helvetica] font-normal tracking-[0]">
            年
          </div>

          <div className="top-1 left-20 text-black text-[7px] leading-[normal] whitespace-nowrap absolute [font-family:'Inter',Helvetica] font-normal tracking-[0]">
            月
          </div>

          <div className="top-1 left-[214px] text-black text-[7px] leading-[normal] whitespace-nowrap absolute [font-family:'Inter',Helvetica] font-normal tracking-[0]">
            学　歴・職　歴
          </div>

          <div className="absolute w-[371px] h-[372px] top-0 left-0 border border-solid border-black" />

          <div className="top-[23px] left-5 absolute [font-family:'Inter',Helvetica] font-normal text-[#ff0000] text-[8px] tracking-[0] leading-[normal]">
            2016
          </div>

          <div className="top-[41px] left-5 absolute [font-family:'Inter',Helvetica] font-normal text-[#ff0000] text-[8px] tracking-[0] leading-[normal]">
            2018
          </div>

          <div className="top-[23px] left-[118px] text-[#ff0000] text-[8px] leading-[normal] absolute [font-family:'Inter',Helvetica] font-normal tracking-[0]">
            都立あいうえおかきくけこさしすせそたち高等学校　普通科　入学
          </div>

          <div className="top-[41px] left-[118px] text-[#ff0000] text-[8px] leading-[normal] absolute [font-family:'Inter',Helvetica] font-normal tracking-[0]">
            都立あいうえおかきくけこさしすせそたち高等学校　普通科　中退
          </div>

          <div className="top-[23px] left-[81px] absolute [font-family:'Inter',Helvetica] font-normal text-[#ff0000] text-[8px] tracking-[0] leading-[normal]">
            4
          </div>

          <div className="top-[41px] left-[81px] absolute [font-family:'Inter',Helvetica] font-normal text-[#ff0000] text-[8px] tracking-[0] leading-[normal]">
            3
          </div>

          <div className="top-[59px] left-5 absolute [font-family:'Inter',Helvetica] font-normal text-[#ff0000] text-[8px] tracking-[0] leading-[normal]">
            2018
          </div>

          <div className="top-[59px] left-[118px] text-[#ff0000] text-[8px] leading-[normal] absolute [font-family:'Inter',Helvetica] font-normal tracking-[0]">
            都立あいうえおかきくけこさしすせそたち高等学校　普通科　入学
          </div>

          <div className="top-[59px] left-[81px] absolute [font-family:'Inter',Helvetica] font-normal text-[#ff0000] text-[8px] tracking-[0] leading-[normal]">
            4
          </div>

          <div className="top-[78px] left-5 absolute [font-family:'Inter',Helvetica] font-normal text-[#ff0000] text-[8px] tracking-[0] leading-[normal]">
            2021
          </div>

          <div className="top-[78px] left-[118px] text-[#ff0000] text-[8px] leading-[normal] absolute [font-family:'Inter',Helvetica] font-normal tracking-[0]">
            都立あいうえおかきくけこさしすせそたち高等学校　普通科　卒業
          </div>

          <div className="top-[78px] left-[81px] absolute [font-family:'Inter',Helvetica] font-normal text-[#ff0000] text-[8px] tracking-[0] leading-[normal]">
            3
          </div>

          <div className="top-[97px] left-5 absolute [font-family:'Inter',Helvetica] font-normal text-[#ff0000] text-[8px] tracking-[0] leading-[normal]">
            2018
          </div>

          <div className="top-[97px] left-[118px] text-[#ff0000] text-[8px] leading-[normal] absolute [font-family:'Inter',Helvetica] font-normal tracking-[0]">
            国立あいうえおかきくけこさしすせそたちつ大学　看護学科　入学
          </div>

          <div className="top-[97px] left-[81px] absolute [font-family:'Inter',Helvetica] font-normal text-[#ff0000] text-[8px] tracking-[0] leading-[normal]">
            4
          </div>

          <div className="top-[116px] left-5 absolute [font-family:'Inter',Helvetica] font-normal text-[#ff0000] text-[8px] tracking-[0] leading-[normal]">
            2021
          </div>

          <div className="top-[116px] left-[118px] text-[#ff0000] text-[8px] leading-[normal] absolute [font-family:'Inter',Helvetica] font-normal tracking-[0]">
            国立あいうえおかきくけこさしすせそたちつ大学　看護学科　中退
          </div>

          <div className="top-[116px] left-[81px] absolute [font-family:'Inter',Helvetica] font-normal text-[#ff0000] text-[8px] tracking-[0] leading-[normal]">
            3
          </div>

          <div className="top-[133px] left-5 absolute [font-family:'Inter',Helvetica] font-normal text-[#ff0000] text-[8px] tracking-[0] leading-[normal]">
            2018
          </div>

          <div className="top-[133px] left-[118px] text-[#ff0000] text-[8px] leading-[normal] absolute [font-family:'Inter',Helvetica] font-normal tracking-[0]">
            国立あいうえおかきくけこさしすせそたちつ大学　看護学科　入学
          </div>

          <div className="top-[133px] left-[81px] absolute [font-family:'Inter',Helvetica] font-normal text-[#ff0000] text-[8px] tracking-[0] leading-[normal]">
            4
          </div>

          <div className="top-[152px] left-5 absolute [font-family:'Inter',Helvetica] font-normal text-[#ff0000] text-[8px] tracking-[0] leading-[normal]">
            2021
          </div>

          <div className="top-[152px] left-[118px] text-[#ff0000] text-[8px] leading-[normal] absolute [font-family:'Inter',Helvetica] font-normal tracking-[0]">
            国立あいうえおかきくけこさしすせそたちつ大学　看護学科　卒業
          </div>

          <div className="top-[152px] left-[81px] absolute [font-family:'Inter',Helvetica] font-normal text-[#ff0000] text-[8px] tracking-[0] leading-[normal]">
            3
          </div>

          <div className="top-[172px] left-5 absolute [font-family:'Inter',Helvetica] font-normal text-[#ff0000] text-[8px] tracking-[0] leading-[normal]">
            2021
          </div>

          <div className="top-[172px] left-[118px] text-[#ff0000] text-[8px] leading-[normal] absolute [font-family:'Inter',Helvetica] font-normal tracking-[0]">
            あいうえおかきくけこさしすせそたちつてと美容クリニック　入職
          </div>

          <div className="top-[172px] left-[81px] absolute [font-family:'Inter',Helvetica] font-normal text-[#ff0000] text-[8px] tracking-[0] leading-[normal]">
            4
          </div>

          <div className="top-[190px] left-5 absolute [font-family:'Inter',Helvetica] font-normal text-[#ff0000] text-[8px] tracking-[0] leading-[normal]">
            2022
          </div>

          <div className="top-[190px] left-[118px] text-[#ff0000] text-[8px] leading-[normal] absolute [font-family:'Inter',Helvetica] font-normal tracking-[0]">
            あいうえおかきくけこさしすせそたちつてと美容クリニック　退職
          </div>

          <div className="top-[190px] left-20 absolute [font-family:'Inter',Helvetica] font-normal text-[#ff0000] text-[8px] tracking-[0] leading-[normal]">
            10
          </div>

          <div className="top-[209px] left-5 absolute [font-family:'Inter',Helvetica] font-normal text-[#ff0000] text-[8px] tracking-[0] leading-[normal]">
            2022
          </div>

          <div className="top-[209px] left-[118px] text-[#ff0000] text-[8px] leading-[normal] absolute [font-family:'Inter',Helvetica] font-normal tracking-[0]">
            あいうえおかきくけこさしすせそたちつてと美容クリニック　入職
          </div>

          <div className="top-[209px] left-20 absolute [font-family:'Inter',Helvetica] font-normal text-[#ff0000] text-[8px] tracking-[0] leading-[normal]">
            10
          </div>

          <div className="top-[227px] left-5 absolute [font-family:'Inter',Helvetica] font-normal text-[#ff0000] text-[8px] tracking-[0] leading-[normal]">
            2023
          </div>

          <div className="top-[246px] left-[118px] text-[#ff0000] text-[8px] leading-[normal] absolute [font-family:'Inter',Helvetica] font-normal tracking-[0]">
            あいうえおかきくけこさしすせそたちつてと美容クリニック　入職
          </div>

          <div className="top-[227px] left-[82px] absolute [font-family:'Inter',Helvetica] font-normal text-[#ff0000] text-[8px] tracking-[0] leading-[normal]">
            2
          </div>

          <div className="top-[246px] left-5 absolute [font-family:'Inter',Helvetica] font-normal text-[#ff0000] text-[8px] tracking-[0] leading-[normal]">
            2023
          </div>

          <div className="top-[227px] left-[118px] text-[#ff0000] text-[8px] leading-[normal] absolute [font-family:'Inter',Helvetica] font-normal tracking-[0]">
            あいうえおかきくけこさしすせそたちつてと美容クリニック　退職
          </div>
claude.ai
          <div className="top-[246px] left-[82px] absolute [font-family:'Inter',Helvetica] font-normal text-[#ff0000] text-[8px] tracking-[0] leading-[normal]">
            2
          </div>

          <div className="top-[264px] left-[118px] text-[#ff0000] text-[8px] leading-[normal] absolute [font-family:'Inter',Helvetica] font-normal tracking-[0]">
            あいうえおかきくけこさしすせそたちつてと美容クリニック　退職
          </div>

          <div className="top-[264px] left-5 absolute [font-family:'Inter',Helvetica] font-normal text-[#ff0000] text-[8px] tracking-[0] leading-[normal]">
            2023
          </div>

          <div className="top-[264px] left-[82px] absolute [font-family:'Inter',Helvetica] font-normal text-[#ff0000] text-[8px] tracking-[0] leading-[normal]">
            9
          </div>

          <div className="top-[282px] left-[118px] text-[#ff0000] text-[8px] leading-[normal] absolute [font-family:'Inter',Helvetica] font-normal tracking-[0]">
            あいうえおかきくけこさしすせそたちつてと美容クリニック　入職
          </div>

          <div className="top-[282px] left-5 absolute [font-family:'Inter',Helvetica] font-normal text-[#ff0000] text-[8px] tracking-[0] leading-[normal]">
            2023
          </div>

          <div className="top-[282px] left-[82px] absolute [font-family:'Inter',Helvetica] font-normal text-[#ff0000] text-[8px] tracking-[0] leading-[normal]">
            9
          </div>

          <div className="top-[301px] left-[118px] text-[#ff0000] text-[8px] leading-[normal] absolute [font-family:'Inter',Helvetica] font-normal tracking-[0]">
            あいうえおかきくけこさしすせそたちつてと美容クリニック　退職
          </div>

          <div className="top-[301px] left-5 absolute [font-family:'Inter',Helvetica] font-normal text-[#ff0000] text-[8px] tracking-[0] leading-[normal]">
            2024
          </div>

          <div className="top-[301px] left-[82px] absolute [font-family:'Inter',Helvetica] font-normal text-[#ff0000] text-[8px] tracking-[0] leading-[normal]">
            1
          </div>

          <div className="top-80 left-[118px] text-[#ff0000] text-[8px] leading-[normal] absolute [font-family:'Inter',Helvetica] font-normal tracking-[0]">
            あいうえおかきくけこさしすせそたちつてと美容クリニック　入職
          </div>

          <div className="top-80 left-5 absolute [font-family:'Inter',Helvetica] font-normal text-[#ff0000] text-[8px] tracking-[0] leading-[normal]">
            2024
          </div>

          <div className="top-80 left-[82px] absolute [font-family:'Inter',Helvetica] font-normal text-[#ff0000] text-[8px] tracking-[0] leading-[normal]">
            1
          </div>

          <div className="top-[338px] left-[118px] text-[#ff0000] text-[8px] leading-[normal] absolute [font-family:'Inter',Helvetica] font-normal tracking-[0]">
            あいうえおかきくけこさしすせそたちつてと美容クリニック　退職
          </div>

          <div className="top-[338px] left-5 absolute [font-family:'Inter',Helvetica] font-normal text-[#ff0000] text-[8px] tracking-[0] leading-[normal]">
            2024
          </div>

          <div className="top-[338px] left-[82px] absolute [font-family:'Inter',Helvetica] font-normal text-[#ff0000] text-[8px] tracking-[0] leading-[normal]">
            2
          </div>

          <div className="top-[357px] left-[118px] text-[#ff0000] text-[8px] leading-[normal] absolute [font-family:'Inter',Helvetica] font-normal tracking-[0]">
            あいうえおかきくけこさしすせそたちつてと美容クリニック　入職
          </div>

          <div className="top-[357px] left-5 absolute [font-family:'Inter',Helvetica] font-normal text-[#ff0000] text-[8px] tracking-[0] leading-[normal]">
            2024
          </div>

          <div className="top-[357px] left-[82px] absolute [font-family:'Inter',Helvetica] font-normal text-[#ff0000] text-[8px] tracking-[0] leading-[normal]">
            2
          </div>
        </div>

        <div className="absolute w-[63px] h-2.5 top-[30px] left-[249px]">
          <div className="top-px left-0 text-black text-[7px] leading-[normal] whitespace-nowrap absolute [font-family:'Inter',Helvetica] font-normal tracking-[0]">
            年　　月　　日現在
          </div>

          <div className="top-0 left-[11px] absolute [font-family:'Inter',Helvetica] font-normal text-[#ff0000] text-[8px] tracking-[0] leading-[normal]">
            12
          </div>

          <div className="top-0 left-[33px] absolute [font-family:'Inter',Helvetica] font-normal text-[#ff0000] text-[8px] tracking-[0] leading-[normal]">
            12
          </div>
        </div>

        <div className="top-[27px] left-[30px] text-black text-sm leading-[normal] absolute [font-family:'Inter',Helvetica] font-normal tracking-[0]">
          履　歴　書
        </div>

        <div className="top-[30px] left-[228px] absolute [font-family:'Inter',Helvetica] font-normal text-[#ff0000] text-[8px] tracking-[0] leading-[normal]">
          2024
        </div>
      </div>
    </div>
  );
};
