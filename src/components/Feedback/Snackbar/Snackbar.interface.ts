import { HTMLAttributes } from "react";

export type SnackbarPosition = 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';

export type SnackbarSeverity = 'success' | 'info' | 'warning' | 'error';

export interface BaseSnackbarProps extends HTMLAttributes<HTMLDivElement> {
    open: boolean;
    message: string;
    position?: SnackbarPosition;
    severity?: SnackbarSeverity;
    autoHideDuration?: number;
    onClose?: () => void;
    action?: React.ReactNode;
    className?: string;
}
