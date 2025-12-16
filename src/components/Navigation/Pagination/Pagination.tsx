import { Icon } from "@iconify-icon/react";
import { BasePaginationProps } from "./Pagination.interface";
import styles from "./Pagination.module.css";

const range = (start: number, end: number) => {
    const length = end - start + 1;
    return Array.from({ length }, (_, i) => start + i);
};

export const PaginationComponent = (props: BasePaginationProps) => {
    const {
        count,
        page,
        onChange,
        siblingCount = 1,
        boundaryCount = 1,
        showFirstButton = false,
        showLastButton = false,
        disabled = false,
        className,
        ...restProps
    } = props;

    const startPages = range(1, Math.min(boundaryCount, count));
    const endPages = range(Math.max(count - boundaryCount + 1, boundaryCount + 1), count);

    const siblingsStart = Math.max(
        Math.min(page - siblingCount, count - boundaryCount - siblingCount * 2 - 1),
        boundaryCount + 2
    );

    const siblingsEnd = Math.min(
        Math.max(page + siblingCount, boundaryCount + siblingCount * 2 + 2),
        endPages.length > 0 ? endPages[0] - 2 : count - 1
    );

    const itemList = [
        ...(showFirstButton ? ['first'] : []),
        'previous',
        ...startPages,
        ...(siblingsStart > boundaryCount + 2
            ? ['start-ellipsis']
            : boundaryCount + 1 < count - boundaryCount
            ? [boundaryCount + 1]
            : []),
        ...range(siblingsStart, siblingsEnd),
        ...(siblingsEnd < count - boundaryCount - 1
            ? ['end-ellipsis']
            : count - boundaryCount > boundaryCount
            ? [count - boundaryCount]
            : []),
        ...endPages,
        'next',
        ...(showLastButton ? ['last'] : []),
    ];

    const paginationClassNames = [
        styles.pagination,
        className
    ].filter(Boolean).join(" ");

    const handleClick = (value: string | number) => {
        if (disabled) return;

        if (value === 'first') onChange(1);
        else if (value === 'previous') onChange(Math.max(page - 1, 1));
        else if (value === 'next') onChange(Math.min(page + 1, count));
        else if (value === 'last') onChange(count);
        else if (typeof value === 'number') onChange(value);
    };

    return (
        <nav {...restProps} className={paginationClassNames}>
            <ul className={styles.list}>
                {itemList.map((item, index) => {
                    if (item === 'start-ellipsis' || item === 'end-ellipsis') {
                        return (
                            <li key={index} className={styles.item}>
                                <span className={styles.ellipsis}>…</span>
                            </li>
                        );
                    }

                    const isActive = item === page;
                    const isDisabled = disabled ||
                        (item === 'first' && page === 1) ||
                        (item === 'previous' && page === 1) ||
                        (item === 'next' && page === count) ||
                        (item === 'last' && page === count);

                    const buttonClassNames = [
                        styles.button,
                        isActive && styles.active,
                        isDisabled && styles.disabled,
                    ].filter(Boolean).join(" ");

                    return (
                        <li key={index} className={styles.item}>
                            <button
                                className={buttonClassNames}
                                onClick={() => handleClick(item)}
                                disabled={isDisabled}
                                aria-label={
                                    item === 'first' ? 'Go to first page' :
                                    item === 'previous' ? 'Go to previous page' :
                                    item === 'next' ? 'Go to next page' :
                                    item === 'last' ? 'Go to last page' :
                                    `Go to page ${item}`
                                }
                                aria-current={isActive ? 'page' : undefined}
                            >
                                {item === 'first' && <Icon icon="mdi:chevron-double-left" width="20" height="20" />}
                                {item === 'previous' && <Icon icon="mdi:chevron-left" width="20" height="20" />}
                                {item === 'next' && <Icon icon="mdi:chevron-right" width="20" height="20" />}
                                {item === 'last' && <Icon icon="mdi:chevron-double-right" width="20" height="20" />}
                                {typeof item === 'number' && item}
                            </button>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};
