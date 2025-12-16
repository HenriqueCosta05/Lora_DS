import { LinkProps } from "react-aria-components";

export interface BaseLinkProps extends Omit<LinkProps, 'className'> {
    children: React.ReactNode;
    variant?: 'default' | 'button';
    color?: 'primary' | 'secondary' | 'inherit';
    underline?: 'none' | 'hover' | 'always';
    className?: string;
}
