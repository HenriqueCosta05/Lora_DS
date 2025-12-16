import { MenuTriggerProps, MenuProps, MenuItemProps } from "react-aria-components";

export interface BaseMenuTriggerProps extends MenuTriggerProps {
    children: React.ReactNode;
}

export interface BaseMenuProps<T> extends Omit<MenuProps<T>, 'className'> {
    children: React.ReactNode;
    className?: string;
}

export interface BaseMenuItemProps extends Omit<MenuItemProps, 'className'> {
    children: React.ReactNode;
    className?: string;
}
