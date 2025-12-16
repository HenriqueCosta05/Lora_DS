import { ButtonProps } from "react-aria-components";

export interface BaseButtonGroupProps {
    children: React.ReactNode;
    variant?: 'contained' | 'outlined' | 'text';
    size?: 'small' | 'medium' | 'large';
    orientation?: 'horizontal' | 'vertical';
    fullWidth?: boolean;
    disabled?: boolean;
    className?: string;
}

export interface ButtonGroupItemProps extends ButtonProps {
    children: React.ReactNode;
}
