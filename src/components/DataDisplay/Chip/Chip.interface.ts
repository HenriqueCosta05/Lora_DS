import { TagGroupProps, TagProps } from "react-aria-components";

export interface BaseChipGroupProps<T> extends Omit<TagGroupProps, 'className'> {
    children: React.ReactNode;
    label?: string;
    className?: string;
}

export interface BaseChipProps extends Omit<TagProps, 'className'> {
    children: React.ReactNode;
    variant?: 'filled' | 'outlined';
    color?: 'default' | 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info';
    size?: 'small' | 'medium';
    onDelete?: () => void;
    className?: string;
}
