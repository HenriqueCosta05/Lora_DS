import { BaseGridProps } from "./Grid.interface";
import styles from "./Grid.module.css";

export const GridComponent = (props: BaseGridProps) => {
    const {
        children,
        container = false,
        item = false,
        spacing = 0,
        columns = 12,
        justify,
        alignItems,
        className,
        style,
        ...restProps
    } = props;

    const gridClassNames = [
        container && styles.container,
        item && styles.item,
        className
    ].filter(Boolean).join(" ");

    const gridStyle = {
        ...style,
        ...(container && {
            gap: spacing ? `${spacing * 8}px` : undefined,
            gridTemplateColumns: `repeat(${columns}, 1fr)`,
            justifyContent: justify,
            alignItems,
        }),
    };

    return (
        <div {...restProps} className={gridClassNames} style={gridStyle}>
            {children}
        </div>
    );
};
