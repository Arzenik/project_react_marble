import { useState, useCallback } from 'react';

interface ValidationRules {
    [key: string]: (value: any) => string | undefined;
}

interface UseFormResult<T> {
    values: T;
    errors: { [key in keyof T]?: string };
    touched: { [key in keyof T]?: boolean };
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
    setFieldValue: (field: keyof T, value: any) => void;
    setFieldTouched: (field: keyof T, isTouched?: boolean) => void;
    isValid: boolean;
    resetForm: () => void;
}

export function useForm<T extends { [key: string]: any }>(
    initialValues: T,
    validationRules?: ValidationRules
): UseFormResult<T> {
    const [values, setValues] = useState<T>(initialValues);
    const [errors, setErrors] = useState<{ [key in keyof T]?: string }>({});
    const [touched, setTouched] = useState<{ [key in keyof T]?: boolean }>({});

    const validateField = useCallback(
        (name: keyof T, value: any) => {
            if (validationRules && validationRules[name as string]) {
                const error = validationRules[name as string](value);
                setErrors(prev => ({
                    ...prev,
                    [name]: error,
                }));
                return !error;
            }
            return true;
        },
        [validationRules]
    );

    const handleChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const { name, value } = e.target;
            setValues(prev => ({
                ...prev,
                [name]: value,
            }));
            validateField(name, value);
        },
        [validateField]
    );

    const handleBlur = useCallback(
        (e: React.FocusEvent<HTMLInputElement>) => {
            const { name } = e.target;
            setTouched(prev => ({
                ...prev,
                [name]: true,
            }));
            validateField(name, values[name]);
        },
        [validateField, values]
    );

    const setFieldValue = useCallback(
        (field: keyof T, value: any) => {
            setValues(prev => ({
                ...prev,
                [field]: value,
            }));
            validateField(field, value);
        },
        [validateField]
    );

    const setFieldTouched = useCallback((field: keyof T, isTouched = true) => {
        setTouched(prev => ({
            ...prev,
            [field]: isTouched,
        }));
    }, []);

    const resetForm = useCallback(() => {
        setValues(initialValues);
        setErrors({});
        setTouched({});
    }, [initialValues]);

    const isValid = Object.keys(errors).length === 0;

    return {
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        setFieldValue,
        setFieldTouched,
        isValid,
        resetForm,
    };
}

export default useForm; 