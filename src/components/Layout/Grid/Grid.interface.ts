import { HTMLAttributes } from "react";

export type GridJustify = 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
export type GridAlign = 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';

export interface BaseGridProps extends HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    container?: boolean;
    item?: boolean;
    spacing?: number;
    columns?: number;
    justify?: GridJustify;
    alignItems?: GridAlign;
    className?: string;
}
