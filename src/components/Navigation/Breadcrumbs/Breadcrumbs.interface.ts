import { BreadcrumbsProps } from "react-aria-components";

export interface BaseBreadcrumbsProps<T> extends Omit<BreadcrumbsProps<T>, 'className'> {
    children: React.ReactNode;
    className?: string;
}
