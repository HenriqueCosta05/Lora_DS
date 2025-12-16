import { SelectProps, ListBoxItemProps } from "react-aria-components";

export interface BaseSelectProps<T extends object> extends Omit<SelectProps<T>, 'className'> {
    label?: string;
    description?: string;
    errorMessage?: string;
    placeholder?: string;
    children: React.ReactNode;
    className?: string;
}

export interface BaseSelectItemProps extends Omit<ListBoxItemProps, 'className'> {
    children: React.ReactNode;
    className?: string;
}
