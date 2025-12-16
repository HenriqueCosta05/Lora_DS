import { ComboBoxProps, ListBoxItemProps } from "react-aria-components";

export interface BaseAutocompleteProps<T extends object> extends ComboBoxProps<T> {
    label?: string;
    description?: string;
    errorMessage?: string;
    placeholder?: string;
    className?: string;
}

export interface BaseAutocompleteItemProps extends ListBoxItemProps {
    children: React.ReactNode;
    className?: string;
}
