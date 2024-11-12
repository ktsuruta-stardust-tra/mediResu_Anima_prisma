import React from "react";
interface Props {
    className: any;
  }

export const PreviewPageOne = ({
  className,
}: Props): JSX.Element => {
  return (
    <div className="border border-black p-4 w-full font-sans">
      {/* 氏名・性別行 */}
      <div className="flex border-b border-black">
        <div className="w-4/5 flex border-r border-black">
          <div className="w-16 bg-gray-100 border-r border-black p-2 flex items-center justify-center">
            氏 名
          </div>
          <div className="flex-1 p-2">
            <div className="text-xs">ふりがな</div>
            <div className="h-6"></div>
          </div>
        </div>
        <div className="w-1/5 p-2 flex justify-center items-center">
          <div className="flex space-x-4">
            <label className="flex items-center space-x-1">
              <div className="w-4 h-4 border border-black rounded-full"></div>
              <span>男</span>
            </label>
            <label className="flex items-center space-x-1">
              <div className="w-4 h-4 border border-black rounded-full"></div>
              <span>女</span>
            </label>
          </div>
        </div>
      </div>

      {/* 生年月日・電話行 */}
      <div className="flex border-b border-black">
        <div className="w-4/5 flex border-r border-black">
          <div className="w-16 bg-gray-100 border-r border-black p-2 flex items-center justify-center">
            生年月日
          </div>
          <div className="flex-1 p-2">
            <div className="flex space-x-2">
              <div className="flex-1 border-b border-black text-center">2000</div>
              <div>年</div>
              <div className="flex-1 border-b border-black text-center">00</div>
              <div>月</div>
              <div className="flex-1 border-b border-black text-center">00</div>
              <div>日</div>
            </div>
          </div>
        </div>
        <div className="w-1/5">
          <div className="bg-gray-100 border-b border-black p-1 text-center">電話</div>
          <div className="p-1 text-center">00000000000</div>
        </div>
      </div>

      {/* 現住所・メール行 */}
      <div className="flex">
        <div className="w-4/5 flex border-r border-black">
          <div className="w-16 bg-gray-100 border-r border-black p-2 flex items-center justify-center">
            現住所
          </div>
          <div className="flex-1 p-2">
            <div className="text-xs">ふりがな</div>
            <div className="border-b border-black mt-1">〒000 - 0000</div>
          </div>
        </div>
        <div className="w-1/5">
          <div className="bg-gray-100 border-b border-black p-1 text-center">E-mail</div>
          <div className="p-1 text-center">example@example.com</div>
        </div>
      </div>
    </div>
  );
};
