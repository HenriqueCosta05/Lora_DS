import { HTMLAttributes } from "react";

export type PaperElevation = 0 | 1 | 2 | 3 | 4 | 6 | 8 | 12 | 16 | 24;

export interface BasePaperProps extends HTMLAttributes<HTMLDivElement> {
    elevation?: PaperElevation;
    variant?: 'elevation' | 'outlined';
    square?: boolean;
    children: React.ReactNode;
    className?: string;
}
