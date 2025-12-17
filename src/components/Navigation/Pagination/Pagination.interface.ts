import { HTMLAttributes } from "react";

export interface BasePaginationProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
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
