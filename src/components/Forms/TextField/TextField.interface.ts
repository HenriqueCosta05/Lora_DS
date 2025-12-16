import { TextFieldProps } from "react-aria-components";

export interface BaseTextFieldProps extends Omit<TextFieldProps, 'className'> {
    label?: string;
    description?: string;
    errorMessage?: string;
    placeholder?: string;
    isRequired?: boolean;
    isDisabled?: boolean;
    isReadOnly?: boolean;
    type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'search';
    fullWidth?: boolean;
    className?: string;
}
