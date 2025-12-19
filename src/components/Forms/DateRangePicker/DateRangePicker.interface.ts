import { DateRangePickerProps as AriaDateRangePickerProps } from "react-aria-components";

export interface BaseDateRangePickerProps extends Omit<AriaDateRangePickerProps<any>, 'children'> {
    label?: string;
    helperText?: string;
    error?: boolean;
    errorMessage?: string;
    className?: string;
    /**
     * The locale to use for formatting dates.
     * @example 'en-US', 'pt-BR', 'es-ES', 'fr-FR', etc.
     */
    locale?: string;
}
