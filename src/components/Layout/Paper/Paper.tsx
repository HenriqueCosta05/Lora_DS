import { BasePaperProps } from "./Paper.interface";
import styles from "./Paper.module.css";

export const PaperComponent = (props: BasePaperProps) => {
    const {
        elevation = 1,
        variant = 'elevation',
        square = false,
        children,
        className,
        ...restProps
    } = props;

    const paperClassNames = [
        styles.paper,
        variant === 'elevation' ? styles[`elevation${elevation}`] : styles.outlined,
        square && styles.square,
        className
    ].filter(Boolean).join(" ");

    return (
        <div {...restProps} className={paperClassNames}>
            {children}
        </div>
    );
};
