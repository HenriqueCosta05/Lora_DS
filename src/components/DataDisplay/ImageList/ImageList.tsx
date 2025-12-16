import { BaseImageListProps, ImageListItemProps } from "./ImageList.interface";
import styles from "./ImageList.module.css";

export const ImageListComponent = (props: BaseImageListProps) => {
    const {
        children,
        cols = 3,
        gap = 8,
        rowHeight = 200,
        variant = 'standard',
        className,
        style,
        ...restProps
    } = props;

    const imageListClassNames = [
        styles.imageList,
        styles[variant],
        className
    ].filter(Boolean).join(" ");

    const imageListStyle = {
        ...style,
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        gap: `${gap}px`,
        ...(variant === 'standard' && rowHeight !== 'auto' && {
            gridAutoRows: `${rowHeight}px`,
        }),
    };

    return (
        <div {...restProps} className={imageListClassNames} style={imageListStyle}>
            {children}
        </div>
    );
};

export const ImageListItem = (props: ImageListItemProps) => {
    const {
        children,
        cols = 1,
        rows = 1,
        className,
        style,
        ...restProps
    } = props;

    const itemClassNames = [
        styles.imageListItem,
        className
    ].filter(Boolean).join(" ");

    const itemStyle = {
        ...style,
        gridColumn: `span ${cols}`,
        gridRow: `span ${rows}`,
    };

    return (
        <div {...restProps} className={itemClassNames} style={itemStyle}>
            {children}
        </div>
    );
};
