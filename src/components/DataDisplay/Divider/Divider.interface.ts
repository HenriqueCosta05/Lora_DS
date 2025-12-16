import { SeparatorProps } from "react-aria-components";

export interface BaseDividerProps extends Omit<SeparatorProps, 'className'> {
    orientation?: 'horizontal' | 'vertical';
    variant?: 'fullWidth' | 'inset' | 'middle';
    className?: string;
}
