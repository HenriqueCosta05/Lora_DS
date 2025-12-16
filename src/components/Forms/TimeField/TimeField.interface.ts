import { TimeFieldProps as AriaTimeFieldProps } from "react-aria-components";

export interface BaseTimeFieldProps extends Omit<AriaTimeFieldProps<any>, 'children'> {
    label?: string;
    helperText?: string;
    error?: boolean;
    errorMessage?: string;
    className?: string;
}
