import { TextFieldProps } from "react-aria-components";

export interface BaseInputGroupProps {
    children: React.ReactNode;
    label?: string;
    helperText?: string;
    error?: boolean;
    errorMessage?: string;
    startAdornment?: React.ReactNode;
    endAdornment?: React.ReactNode;
    className?: string;
}

export interface InputGroupFieldProps extends Omit<TextFieldProps, 'children'> {
    placeholder?: string;
}
