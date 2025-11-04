import { Button } from "react-aria-components";
import { BaseButtonProps } from "./Button.interface";
import buttonStyles from "./Button.module.css";

export const ButtonComponent = (props: BaseButtonProps) => {
    const {
        variant = "primary",
        size,
        fullWidth,
        isLoading,
        disabled,
        children,
        className,
        ...restProps
    } = props;

    const classNames = [
        buttonStyles.button,
        variant === "secondary" && buttonStyles.secondary,
        size === "small" && buttonStyles.small,
        size === "large" && buttonStyles.large,
        fullWidth && buttonStyles.fullWidth,
        isLoading && buttonStyles.loading,
        className
    ].filter(Boolean).join(" ");

    return (
        <Button
            {...restProps}
            className={classNames}
            isDisabled={disabled || isLoading}
        >
            {children}
        </Button>
    );
};