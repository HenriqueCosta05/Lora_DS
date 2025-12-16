import { Button } from "react-aria-components";
import { BaseButtonGroupProps, ButtonGroupItemProps } from "./ButtonGroup.interface";
import styles from "./ButtonGroup.module.css";

export const ButtonGroupComponent = (props: BaseButtonGroupProps) => {
    const {
        children,
        variant = 'contained',
        size = 'medium',
        orientation = 'horizontal',
        fullWidth = false,
        disabled = false,
        className,
    } = props;

    const groupClassNames = [
        styles.buttonGroup,
        styles[variant],
        styles[size],
        styles[orientation],
        fullWidth && styles.fullWidth,
        disabled && styles.disabled,
        className
    ].filter(Boolean).join(" ");

    return (
        <div className={groupClassNames} role="group">
            {children}
        </div>
    );
};

export const ButtonGroupItem = (props: ButtonGroupItemProps) => {
    const { children, className, ...restProps } = props;

    const buttonClassNames = [
        styles.button,
        className
    ].filter(Boolean).join(" ");

    return (
        <Button {...restProps} className={buttonClassNames}>
            {children}
        </Button>
    );
};
