import { ProgressBarProps } from "react-aria-components";

export interface BaseProgressProps extends Omit<ProgressBarProps, 'className'> {
    variant?: 'linear' | 'circular';
    color?: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info';
    size?: 'small' | 'medium' | 'large';
    showValue?: boolean;
    className?: string;
}
