import { HTMLAttributes } from "react";

export interface BaseBackdropProps extends HTMLAttributes<HTMLDivElement> {
    open: boolean;
    invisible?: boolean;
    onClose?: () => void;
    className?: string;
}
