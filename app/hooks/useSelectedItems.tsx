// useSelectedItems.ts
import { useState,useEffect } from 'react';

export function useSelectedItems(initialSelectedIds:number[]=[]) {

    const [selectedItems, setSelectedItems] = useState<Set<number>>(new Set(initialSelectedIds));

    const handleCheckboxChange = (id: number) => {

        setSelectedItems((prevSelectedItems) => {
            console.trace(`handleCheckboxChange called with id: ${id}`);
            const updatedSelectedItems = new Set(prevSelectedItems);

            if (updatedSelectedItems.has(id)) {
                updatedSelectedItems.delete(id);
            } else {
                updatedSelectedItems.add(id);
            }

            return updatedSelectedItems;
        });
    };

    return { selectedItems, handleCheckboxChange };
}
