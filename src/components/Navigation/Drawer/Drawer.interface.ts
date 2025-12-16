import { HTMLAttributes } from "react";

export type DrawerAnchor = 'left' | 'right' | 'top' | 'bottom';

export interface BaseDrawerProps extends HTMLAttributes<HTMLDivElement> {
    open: boolean;
    onClose: () => void;
    anchor?: DrawerAnchor;
    children: React.ReactNode;
    className?: string;
}
