import { ListBoxItemProps, ListBoxProps } from "react-aria-components";

export interface BaseListBoxProps<T> extends Omit<ListBoxProps<T>, 'className'> {
    children: React.ReactNode;
    className?: string;
}

export interface BaseListBoxItemProps extends Omit<ListBoxItemProps, 'className'> {
    children: React.ReactNode;
    className?: string;
}
