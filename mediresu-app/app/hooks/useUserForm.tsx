import { useState } from "react";

export function useUserForm<T>(initialData:T){

    const [formData, setFormData] = useState(initialData);

    const updateFormData = (newData:T) => {
        setFormData((prevData) => ({
            ...prevData,
            ...newData,
        }));
    };

    return [formData,updateFormData];
}