import { Table, TableHeader, Column, TableBody, Row, Cell, Button } from "react-aria-components";
import { BaseTableProps, BaseTableHeaderProps, BaseColumnProps, BaseTableBodyProps, BaseRowProps, BaseCellProps } from "./Table.interface";
import styles from "./Table.module.css";

export const TableComponent = (props: BaseTableProps) => {
    const { children, className, ...restProps } = props;

    const tableClassNames = [
        styles.table,
        className
    ].filter(Boolean).join(" ");

    return (
        <Table {...restProps} className={tableClassNames}>
            {children}
        </Table>
    );
};

export const TableHeaderComponent = <T extends object>(props: BaseTableHeaderProps<T>) => {
    const { children, className, ...restProps } = props;

    const headerClassNames = [
        styles.tableHeader,
        className
    ].filter(Boolean).join(" ");

    return (
        <TableHeader {...restProps} className={headerClassNames}>
            {children}
        </TableHeader>
    );
};

export const ColumnComponent = (props: BaseColumnProps) => {
    const { children, className, ...restProps } = props;

    const columnClassNames = [
        styles.column,
        className
    ].filter(Boolean).join(" ");

    return (
        <Column {...restProps} className={columnClassNames}>
            {({ allowsSorting, sortDirection }) => (
                <>
                    {children}
                    {allowsSorting && (
                        <span aria-hidden="true" className={styles.sortIndicator}>
                            {sortDirection === 'ascending' ? '▲' : sortDirection === 'descending' ? '▼' : '⇅'}
                        </span>
                    )}
                </>
            )}
        </Column>
    );
};

export const TableBodyComponent = <T extends object>(props: BaseTableBodyProps<T>) => {
    const { children, className, ...restProps } = props;

    const bodyClassNames = [
        styles.tableBody,
        className
    ].filter(Boolean).join(" ");

    return (
        <TableBody {...restProps} className={bodyClassNames}>
            {children}
        </TableBody>
    );
};

export const RowComponent = <T extends object>(props: BaseRowProps<T>) => {
    const { children, className, ...restProps } = props;

    const rowClassNames = [
        styles.row,
        className
    ].filter(Boolean).join(" ");

    return (
        <Row {...restProps} className={rowClassNames}>
            {children}
        </Row>
    );
};

export const CellComponent = (props: BaseCellProps) => {
    const { children, className, ...restProps } = props;

    const cellClassNames = [
        styles.cell,
        className
    ].filter(Boolean).join(" ");

    return (
        <Cell {...restProps} className={cellClassNames}>
            {children}
        </Cell>
    );
};
