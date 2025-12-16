import { HTMLAttributes } from "react";

export interface BaseBoxProps extends HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    component?: keyof JSX.IntrinsicElements;
    className?: string;
}
