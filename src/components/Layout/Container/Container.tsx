import { BaseContainerProps } from "./Container.interface";
import styles from "./Container.module.css";

export const ContainerComponent = (props: BaseContainerProps) => {
    const {
        children,
        maxWidth = 'lg',
        disableGutters = false,
        className,
        ...restProps
    } = props;

    const containerClassNames = [
        styles.container,
        maxWidth && styles[maxWidth],
        disableGutters && styles.disableGutters,
        className
    ].filter(Boolean).join(" ");

    return (
        <div {...restProps} className={containerClassNames}>
            {children}
        </div>
    );
};
