import { useState } from "react";

export function useExperienceItems<T>(initialData:T){

    const [formData, setFormData] = useState(initialData);

    const updateFormData = (newData:T) => {
        setFormData((prevData) => ({
            ...prevData,
            ...newData,
        }));
    };


    return [formData,updateFormData];
}