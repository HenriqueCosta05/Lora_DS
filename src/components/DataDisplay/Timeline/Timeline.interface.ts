import { HTMLAttributes } from "react";

export interface TimelineItem {
    title: string;
    description?: string;
    time?: string;
    icon?: React.ReactNode;
    color?: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info';
}

export interface BaseTimelineProps extends HTMLAttributes<HTMLDivElement> {
    items: TimelineItem[];
    position?: 'left' | 'right' | 'alternate';
    className?: string;
}
