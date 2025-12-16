import { Button, OverlayArrow, Tooltip, TooltipTrigger } from "react-aria-components";
import { BaseTooltipProps, BaseTooltipTriggerProps } from "./Tooltip.interface";
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
        <Tooltip {...restProps} className={tooltipClassNames} offset={10}>
            <OverlayArrow>
                <svg width={12} height={12} viewBox="0 0 12 12" className={styles.arrow}>
                    <path d="M0 0 L6 6 L12 0" />
                </svg>
            </OverlayArrow>
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
