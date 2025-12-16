import { HTMLAttributes } from "react";

export type BadgeVariant = 'standard' | 'dot';

export type BadgeColor = 'default' | 'primary' | 'secondary' | 'error' | 'success' | 'warning' | 'info';

export type BadgePosition = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';

export interface BaseBadgeProps extends HTMLAttributes<HTMLSpanElement> {
    children: React.ReactNode;
    badgeContent?: React.ReactNode;
    variant?: BadgeVariant;
    color?: BadgeColor;
    position?: BadgePosition;
    max?: number;
    showZero?: boolean;
    invisible?: boolean;
    className?: string;
}
