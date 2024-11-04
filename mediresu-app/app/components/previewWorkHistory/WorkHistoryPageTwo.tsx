import React from "react";

export function WorkHistoryPageTwo(){

    return (
      <div className="bg-gray-200 flex items-center justify-center min-h-screen">
        {/* A4サイズの枠 */}
        <div className="bg-white border border-gray-500 w-[210mm] h-[297mm] max-w-[210mm] max-h-[297mm] flex-shrink-0 relative">
          {/* 内側のボックス */}
          <div className="absolute" style={{ width: '188mm', height: '134mm', top: '13mm', left: '10mm', border: '1px solid black' }} />

          {/* テキスト位置・サイズ */}
          <div className="absolute" style={{ top: '8mm', left: '10mm', fontFamily: "'Inter', Helvetica", fontSize: '3.5mm', fontWeight: 'normal', color: 'black', whiteSpace: 'nowrap' }}>
          ■使用できる機器について
          </div>
        </div>
      </div>
    );
  };
  