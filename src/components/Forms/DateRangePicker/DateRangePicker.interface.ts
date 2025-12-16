import { DateRangePickerProps as AriaDateRangePickerProps } from "react-aria-components";

export interface BaseDateRangePickerProps extends Omit<AriaDateRangePickerProps<any>, 'children'> {
    label?: string;
    helperText?: string;
    error?: boolean;
    errorMessage?: string;
    className?: string;
}
