
interface Props {
    year: string;
    month:string;
    detail:string;
    status:string;
  }

export function Career({
    year,
    month,
    detail,
    status,
}:Props){
    return(
        <div className="flex h-[18px] items-center relative self-stretch w-full">
            <div className="flex w-[61px] h-5 items-center justify-center gap-2.5 px-[26px] py-1 relative mt-[-1.00px] mb-[-1.00px] ml-[-1.00px] mr-[-1.20px] bg-white border border-solid border-black">
                <div className="relative w-fit mt-[-0.50px] ml-[-6.00px] mr-[-4.00px] [font-family:'Inter',Helvetica] font-normal text-[#ff0000] text-[8px] tracking-[0] leading-[normal]">
                    {year}
                </div>
            </div>

            <div className="flex w-[50px] h-5 items-center justify-center gap-2.5 px-[26px] py-1 relative mt-[-1.00px] mr-[-1px] mb-[-1.00px]  bg-white border border-solid border-black">
                <div className="relative w-fit mt-[-0.50px] ml-[-5.00px] mr-[-3.00px] [font-family:'Inter',Helvetica] font-normal text-[#ff0000] text-[8px] tracking-[0] leading-[normal]">
                    {month}
                </div>
            </div>

            <div className="flex w-[265px] h-5 items-center justify-center gap-2.5 px-[26px] py-1 relative mt-[-1.00px] mb-[-1.00px] mr-[-1.00px] bg-white border border-solid border-black">
                <div className="w-fit mt-[-0.50px] ml-[-17.50px] mr-[-17.50px] text-[#ff0000] text-[8px] leading-[normal] relative [font-family:'Inter',Helvetica] font-normal tracking-[0] break-words whitespace-pre-wrap">
                    {detail}   {status}
                </div>
            </div>
      </div>
    )
}