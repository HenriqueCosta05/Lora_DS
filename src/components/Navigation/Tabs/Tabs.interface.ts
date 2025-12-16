import { TabListProps, TabPanelProps, TabProps, TabsProps } from "react-aria-components";

export interface BaseTabsProps extends Omit<TabsProps, 'className'> {
    children: React.ReactNode;
    className?: string;
}

export interface BaseTabListProps<T> extends Omit<TabListProps<T>, 'className'> {
    children: React.ReactNode;
    className?: string;
}

export interface BaseTabProps extends Omit<TabProps, 'className'> {
    children: React.ReactNode;
    className?: string;
}

export interface BaseTabPanelProps extends Omit<TabPanelProps, 'className'> {
    children: React.ReactNode;
    className?: string;
}
