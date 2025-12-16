import { DatePickerProps as AriaDatePickerProps } from "react-aria-components";

export interface BaseDatePickerProps extends Omit<AriaDatePickerProps<any>, 'children'> {
    label?: string;
    helperText?: string;
    error?: boolean;
    errorMessage?: string;
    className?: string;
}
