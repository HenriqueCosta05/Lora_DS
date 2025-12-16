import { HTMLAttributes } from "react";

export interface BasePaginationProps extends HTMLAttributes<HTMLDivElement> {
    count: number;
    page: number;
    onChange: (page: number) => void;
    siblingCount?: number;
    boundaryCount?: number;
    showFirstButton?: boolean;
    showLastButton?: boolean;
    disabled?: boolean;
    className?: string;
}
