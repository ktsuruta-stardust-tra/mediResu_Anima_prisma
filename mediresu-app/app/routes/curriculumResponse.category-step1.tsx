// CategoryWithItems.tsx
import { Link,useOutletContext } from "@remix-run/react";
import { ChecklistSection } from "~/components/curriculum/ChecklistSection";
import { StepProgress } from "~/components/curriculum/StepsComp";
import { SubItemsComp } from "~/components/userinfo/SubItemsComp";
import { ItemsAnyComp } from "~/components/userinfo/ItemsAnyComp";
import { BackEndComp } from "~/components/userinfo/BackEndComp";

export default function CategoryWithItemsPage1() {
  const { categories, selectedItems, handleCheckboxChange, setOtherTexts, otherTexts } = useOutletContext<{
    categories: any[];
    selectedItems: Set<number>;
    handleCheckboxChange: (id: number) => void;
    setOtherTexts: React.Dispatch<React.SetStateAction<{ [key: number]: string }>>;
    otherTexts: { [key: number]: string };
  }>();

  const handleOtherTextChange = (id: number, value: string) => {
    console.log(`handleOtherTextChange triggered for ID: ${id}, new value: ${value}`);
    console.log(otherTexts);
    setOtherTexts((prev) => ({
      ...prev,
      [id]: value,
    }));
  };
  // console.log(categories)
  
  const steps = [
    { stepNumber: "STEP.01", title: "職務要約に", subtitle: "ついて", isActive: false },
    { stepNumber: "STEP.02", title: "自費診療の", subtitle: "経験", isActive: true },
    { stepNumber: "STEP.03", title: "保健診療の", subtitle: "経験", isActive: false },
    { stepNumber: "STEP.04", title: "その他の", subtitle: "スキル", isActive: false },
  ];


  return (
    <main className="flex flex-col items-center w-full bg-[#d9ecec]">
        <div className="flex w-full max-w-[375px] items-center justify-center gap-1.5 bg-white py-4">
            <StepProgress steps={steps} />
        </div>
    
        <div className="flex flex-col w-full max-w-[375px] items-start gap-2.5 p-5 bg-[#d9ecec]">
            <div className="flex flex-col items-start px-0 py-[5px] w-full bg-white rounded-md">
                <ItemsAnyComp className="!flex-[0_0_auto] mt-" text="自費治療の経験" />
                <SubItemsComp
                    className="!self-stretch !flex-[0_0_auto] !pt-2.5 !pb-0 !px-0 !w-full"
                    divClassName="!h-[unset] !mr-[-1.00px] !tracking-[-0.56px] !leading-[normal] !w-fit"
                    text="ご経験があるものにチェックをつけてください。"
                />
                {categories.filter(category=> category.id <= 4).map((category) => (
                    <div key={category.id}>
                        <ChecklistSection 
                          key={category.id} 
                          title={category.name} 
                          itemCount={category.operations.length} 
                          operations={category.operations}
                          selectedItems={selectedItems}
                          otherTexts={otherTexts}
                          handleCheckboxChange={handleCheckboxChange}
                          handleOtherTextChange={handleOtherTextChange}
                        />
                    </div>
                ))}

                <BackEndComp className="w-full" img="/img/userinfo/subtract-1.svg" subtract="/img/userinfo/subtract-6.svg" text="次へ" backLink="../job-summary" nextLink="../category-step2" />
            </div>
        </div>
    </main>
  );
}
