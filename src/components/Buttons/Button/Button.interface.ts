import { ButtonProps } from "react-aria-components";

export interface BaseButtonProps extends ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    onHover?: () => void;
    onFocus?: () => void;
    disabled?: boolean;
    variant?: 'primary' | 'secondary';
    size?: 'small' | 'medium' | 'large';
    fullWidth?: boolean;
    isLoading?: boolean;
}