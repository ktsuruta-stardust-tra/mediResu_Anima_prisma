import { useState } from "react";


export function useUserAddedFormManager<T>(initialData: T[],defaultItem:T) {

    const [addedFormData,setAddedFormData] = useState<T[]>(initialData.length > 0 ? initialData:[defaultItem]);

    const updateAddedFormData = (newData:Partial<T>, orderNumKey: keyof T) => {
        setAddedFormData((prevData) => {

            // orderNumKeyが -1 の場合、最後のアイテムを削除
            if (newData[orderNumKey] === -1) {
                return prevData.length > 0 ? prevData.slice(0, -1) : prevData;
            }

            const existingItem = prevData.find((item) => item[orderNumKey] === newData[orderNumKey]);

            if(existingItem){
                //console.log("aaaaaaaaa",orderNumKey,prevData);
                return prevData.map((item) => item[orderNumKey]===newData[orderNumKey]?{...item,...newData}:item);

            }else{
                const newItem = {...defaultItem,...newData};
                //console.log("adding new item:" , newItem);
                return [...prevData,newItem];
            }

        });

    }
    return [addedFormData,updateAddedFormData];
}


// export function useUserDeleteFormManager<T>(initialData: T[]) {
//     const [formData, updateFormData] = useState<T[]>(initialData);

//     const removeLastItem = () => {
//         updateFormData((prevData) => {
//             if (prevData.length === 0) return prevData; // 空配列ならそのまま返す
//             return prevData.slice(0, prevData.length - 1);
//         });
//     };

//     return [formData, removeLastItem] as const;
// }

