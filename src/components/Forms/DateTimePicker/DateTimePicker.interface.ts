import { DatePickerProps as AriaDatePickerProps } from "react-aria-components";

export interface BaseDateTimePickerProps extends Omit<AriaDatePickerProps<any>, 'children'> {
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
