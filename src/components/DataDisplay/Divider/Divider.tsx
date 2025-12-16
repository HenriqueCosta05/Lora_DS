import { Separator } from "react-aria-components";
import { BaseDividerProps } from "./Divider.interface";
import styles from "./Divider.module.css";

export const DividerComponent = (props: BaseDividerProps) => {
    const { orientation = 'horizontal', variant = 'fullWidth', className, ...restProps } = props;

    const dividerClassNames = [
        styles.divider,
        styles[orientation],
        styles[variant],
        className
    ].filter(Boolean).join(" ");

    return (
        <Separator {...restProps} orientation={orientation} className={dividerClassNames} />
    );
};
