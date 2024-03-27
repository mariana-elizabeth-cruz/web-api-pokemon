import { useState } from "react";

//hook para destructuralizar los datos
export const useForm = (initial = {}) => {
    const [form, setForm] = useState(initial)

    const onInputForm = ({ target }) => {
        const { name, value } = target;
        setForm({
            ...form,
            [name]: value,
        });
    };

    const onResetForm = () => {
        setForm(initial)
    }

    return {
        ...form,
        form,
        onInputForm,
        onResetForm,
    };
};