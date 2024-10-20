import { useState } from "react";


export function useUserAddedFormManager<T>(initialData: T[],defaultItem:T) {

    const [addedFormData,setAddedFormData] = useState<T[]>(initialData.length > 0 ? initialData:[defaultItem]);

    const updateAddedFormData = (newData:Partial<T>, orderNumKey: keyof T) => {
        setAddedFormData((prevData) => {

            // console.log("Previous Data:", prevData);
            // console.log("New Data (with order_num):", newData);
            // // console.log(prevData);
            // console.log("ordernumkey",orderNumKey);

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
