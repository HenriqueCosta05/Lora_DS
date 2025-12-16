import { CellProps, ColumnProps, RowProps, TableBodyProps, TableHeaderProps, TableProps } from "react-aria-components";

export interface BaseTableProps extends Omit<TableProps, 'className'> {
    children: React.ReactNode;
    className?: string;
}

export interface BaseTableHeaderProps<T> extends Omit<TableHeaderProps<T>, 'className'> {
    children: React.ReactNode;
    className?: string;
}

export interface BaseColumnProps extends Omit<ColumnProps, 'className'> {
    children: React.ReactNode;
    className?: string;
}

export interface BaseTableBodyProps<T> extends Omit<TableBodyProps<T>, 'className'> {
    children: React.ReactNode;
    className?: string;
}

export interface BaseRowProps<T> extends Omit<RowProps<T>, 'className'> {
    children: React.ReactNode;
    className?: string;
}

export interface BaseCellProps extends Omit<CellProps, 'className'> {
    children: React.ReactNode;
    className?: string;
}
