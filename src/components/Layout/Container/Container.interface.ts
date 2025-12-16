import { HTMLAttributes } from "react";

export interface BaseContainerProps extends HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
    disableGutters?: boolean;
    className?: string;
}
