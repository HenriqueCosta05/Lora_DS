import { BaseSkeletonProps } from "./Skeleton.interface";
import styles from "./Skeleton.module.css";

export const SkeletonComponent = (props: BaseSkeletonProps) => {
    const {
        variant = 'text',
        animation = 'pulse',
        width,
        height,
        className,
        style,
        ...restProps
    } = props;

    const skeletonClassNames = [
        styles.skeleton,
        styles[variant],
        animation && styles[`animation${animation.charAt(0).toUpperCase()}${animation.slice(1)}`],
        className
    ].filter(Boolean).join(" ");

    const skeletonStyle = {
        ...style,
        width: typeof width === 'number' ? `${width}px` : width,
        height: typeof height === 'number' ? `${height}px` : height,
    };

    return (
        <div
            {...restProps}
            className={skeletonClassNames}
            style={skeletonStyle}
        />
    );
};
