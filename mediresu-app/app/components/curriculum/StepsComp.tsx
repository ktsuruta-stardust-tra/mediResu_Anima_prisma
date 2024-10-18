import React from "react";

// 各ステップのコンポーネント用のPropsの型を定義
interface StepProps {
  stepNumber: string;       // ステップ番号（例: "STEP.01"）
  title: string;            // ステップのタイトル（例: "職務要約に"）
  subtitle: string;         // ステップのサブタイトル（例: "ついて"）
  isActive: boolean;        // アクティブかどうかを示すフラグ
}

// 各ステップのコンポーネント
const Step: React.FC<StepProps> = ({ stepNumber, title, subtitle, isActive }) => (
  <div className={`flex flex-col w-[62px] items-center gap-1 ${isActive ? '' : 'opacity-50'}`}>
    <div
      className={`flex items-center justify-center gap-2.5 px-[5px] py-1 ${
        isActive ? 'bg-[#24b6ae]' : 'border border-[#24b6ae80]'
      }`}
    >
      <div className={`font-medium ${isActive ? 'text-white' : 'text-[#24b6ae80]'} text-[10px]`}>
        {stepNumber}
      </div>
    </div>
    <div className={`font-medium ${isActive ? 'text-[#313131]' : 'text-[#31313180]'} text-xs text-center`}>
      {title}<br />{subtitle}
    </div>
  </div>
);

// ステップの進行状況を表示するコンポーネント
interface StepProgressProps {
  steps: { stepNumber: string; title: string; subtitle: string; isActive: boolean }[];
}

export const StepProgress: React.FC<StepProgressProps> = ({ steps }) => (
  <div className="flex w-full max-w-[375px] items-center justify-center gap-1.5 bg-white py-4">
    {steps.map((step, index) => (
      <Step
        key={index}
        stepNumber={step.stepNumber}
        title={step.title}
        subtitle={step.subtitle}
        isActive={step.isActive}
      />
    ))}
  </div>
);


