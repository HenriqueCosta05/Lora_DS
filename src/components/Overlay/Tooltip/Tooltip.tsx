import { TooltipTrigger, Tooltip, Button } from "react-aria-components";
import { BaseTooltipTriggerProps, BaseTooltipProps } from "./Tooltip.interface";
import styles from "./Tooltip.module.css";

export const TooltipTriggerComponent = (props: BaseTooltipTriggerProps) => {
    const { children, ...restProps } = props;

    return (
        <TooltipTrigger {...restProps}>
            {children}
        </TooltipTrigger>
    );
};

export const TooltipComponent = (props: BaseTooltipProps) => {
    const { children, className, ...restProps } = props;

    const tooltipClassNames = [
        styles.tooltip,
        className
    ].filter(Boolean).join(" ");

    return (
        <Tooltip {...restProps} className={tooltipClassNames}>
            {children}
        </Tooltip>
    );
};

export const TooltipButtonComponent = (props: { children: React.ReactNode; className?: string }) => {
    const { children, className } = props;

    return (
        <Button className={className}>
            {children}
        </Button>
    );
};
