import PropTypes from "prop-types";
import React from "react";

// // チェックリストアイテムのコンポーネント用のPropsの型を定義
// interface ChecklistItemProps {
//   label: string; // labelは文字列型
// }

// // チェックリストアイテムのコンポーネント
// const ChecklistItem: React.FC<ChecklistItemProps> = ({ label }): JSX.Element => (
//   <div className="flex w-[255px] h-[30px] items-center gap-2.5 px-0 py-2.5 relative">
//     <div className="relative w-[30px] h-[30px] mt-[-10.00px] mb-[-10.00px] bg-white rounded border border-solid border-[#24b6ae]" />
//     <div className="w-fit mt-[-4.50px] mb-[-2.50px] font-bold text-[#313131] text-sm relative [font-family:'Inter',Helvetica] tracking-[0] leading-[normal]">
//       {label}
//     </div>
//   </div>
// );

// Propsの型を定義
interface ChecklistSectionProps {
  title: string;          // titleは文字列型
  itemCount: number;      // itemCountは数値型
  operations: any[];        // itemsは文字列の配列型
  selectedItems:Set<number>;
  otherTexts:{[key:number]:string};
  handleCheckboxChange:(id:number) => void;
  handleOtherTextChange:(id:number, value:string) => void;

}

// セクションコンポーネント
export const ChecklistSection = ({
  title,
  itemCount,
  operations,
  selectedItems,
  otherTexts,
  handleCheckboxChange,
  handleOtherTextChange,
}: ChecklistSectionProps): JSX.Element => {
  let checkedCount = 0

  operations.forEach(operation => {
    if(selectedItems.has(operation.id)){
      checkedCount++;
    }
  });
  const handleCheckCount = (isChecked:boolean) =>{
    if(isChecked)checkedCount++;
    else checkedCount --;
  }


  return (
    <div className="w-[335px] items-center flex flex-col relative flex-[0_0_auto]">
      <div className="flex flex-col items-center relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex items-start pt-2.5 pb-0 px-5 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex h-[50px] items-center relative flex-1 grow ">
          <div
  className={`flex flex-col items-center justify-center px-1 py-3 relative flex-1 self-stretch grow mt-[-1.00px] mb-[-1.00px] ml-[-1.00px] mr-[-1.00px] rounded-[4px_0px_0px_0px] border border-solid border-[#24b6ae] ${
    checkedCount > 0 ? 'bg-[#24b6ae] text-[#eefffe]' : 'bg-[#eefffe] text-[#24b6ae]'
  }`}
>
              <div className="w-fit ml-[-4.50px] mr-[-2.50px] font-bold text-base text-center whitespace-nowrap relative [font-family:'Inter',Helvetica] tracking-[0] leading-[normal]">
                {checkedCount} / {itemCount}
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[220px] items-start gap-2.5 relative">
            <div className="flex flex-col h-[50px] items-center justify-center gap-[5px] relative self-stretch w-full">
              <div className="flex flex-col items-center justify-center px-5 py-3 relative flex-1 self-stretch w-full grow mt-[-1.00px] mb-[-1.00px] ml-[-1.00px] mr-[-1.00px] bg-white rounded-[0px_4px_0px_0px] border border-solid border-[#24b6ae]">
                <div className="relative w-fit [font-family:'Inter',Helvetica] font-bold text-[#24b6ae] text-sm tracking-[0] leading-[normal]">
                  {title}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-[295px] items-start gap-2.5 px-5 py-[21px] relative flex-[0_0_auto] bg-white rounded-[0px_0px_4px_4px] border border-solid border-[#24b6ae]">
        {operations.map((operation:any) => (
          <div key={operation.id} >
            <div className="flex w-[255px] h-[30px] items-center gap-2.5 px-0 py-2.5 relative">
              <label className="inline-flex items-center cursor-pointer gap-2">
                <input 
                  type="checkbox" 
                  className="hidden peer w-[30px] h-[30px]" // チェックボックスのサイズを固定
                  name="operations"
                  value={operation.id}
                  checked={selectedItems.has(operation.id)}
                  onChange={(e) => {
                    handleCheckboxChange(operation.id);
                    handleCheckCount(e.target.checked);
                  }} 
                />
                <div className="peer-checked:hidden relative w-[30px] h-[30px] bg-white rounded border border-solid border-[#24b6ae] flex-shrink-0" />
                <div className="relative w-[30px] h-[30px] bg-[#24b6ae] rounded border border-solid border-[#24b6ae] hidden peer-checked:flex items-center justify-center transition-all duration-300 flex-shrink-0">
                  <img src="/img/userinfo/vector-1.svg" alt="check icon" className="w-[20px] h-[20px]" />
                </div>
                <span className="ml-2 font-bold text-gray-700 leading-tight flex items-center">{operation.name}</span>
              </label>
            </div>
            {operation.name=="その他" && (
              <div className="flex h-[120px] items-start gap-[15px] relative self-stretch w-full mt-3">
                <div className="items-start gap-[5px] flex-1 self-stretch grow flex flex-col relative">
                  {/* <div className="relative flex-1 self-stretch w-full grow bg-white rounded border border-solid border-[#cccccc]" /> */}
                  <textarea
                    className="relative flex-1 self-stretch w-full grow bg-white rounded border border-solid border-[#cccccc]"
                    defaultValue={otherTexts[operation.id] || ''}
                    placeholder="その他の内容を入力"
                    onChange={(e) => handleOtherTextChange(operation.id, e.target.value)}
                    disabled={!selectedItems.has(operation.id)}
                  />
                </div>
              </div>
            )}
          </div>
        ))}
        <div className="flex h-[50px] items-center justify-center gap-1.5 relative self-stretch w-full bg-[#d9ecec] rounded">
          <div className="relative w-[30px] h-[30px] bg-[#24b6ae] rounded-[15px]">
            <img className="absolute w-[13px] h-[13px] top-2 left-[9px]" alt="Image" src="/img/3.svg" />
          </div>

          <div className="w-fit font-bold text-black text-sm relative [font-family:'Inter',Helvetica] tracking-[0] leading-[normal]">
            閉じる
          </div>
        </div>
      </div>
    </div>
  );
};