import { HTMLAttributes } from "react";

export interface BaseImageListProps extends HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    cols?: number;
    gap?: number;
    rowHeight?: number | 'auto';
    variant?: 'standard' | 'quilted' | 'masonry';
    className?: string;
}

export interface ImageListItemProps extends HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    cols?: number;
    rows?: number;
    className?: string;
}
