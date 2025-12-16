import { RadioGroupProps } from "react-aria-components";

export interface BaseRatingProps extends Omit<RadioGroupProps, 'children'> {
    max?: number;
    size?: 'small' | 'medium' | 'large';
    color?: 'default' | 'primary' | 'secondary' | 'warning';
    readOnly?: boolean;
    precision?: number;
    emptyIcon?: React.ReactNode;
    icon?: React.ReactNode;
    className?: string;
}
