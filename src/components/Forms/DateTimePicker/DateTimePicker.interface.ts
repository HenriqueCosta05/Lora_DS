import { DatePickerProps as AriaDatePickerProps } from "react-aria-components";

export interface BaseDateTimePickerProps extends Omit<AriaDatePickerProps<any>, 'children'> {
    label?: string;
    helperText?: string;
    error?: boolean;
    errorMessage?: string;
    className?: string;
}
