import { HTMLAttributes } from "react";

export type AlertSeverity = 'success' | 'info' | 'warning' | 'error';

export type AlertVariant = 'standard' | 'filled' | 'outlined';

export interface BaseAlertProps extends HTMLAttributes<HTMLDivElement> {
    severity?: AlertSeverity;
    variant?: AlertVariant;
    title?: string;
    onClose?: () => void;
    icon?: React.ReactNode;
    children: React.ReactNode;
    className?: string;
}
