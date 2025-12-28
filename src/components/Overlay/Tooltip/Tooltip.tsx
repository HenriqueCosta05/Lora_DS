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
    const {
        children,
        className,
        open,
        placement = 'top',
        offset = 10,
        showArrow = true,
        ...restProps
    } = props;

    const tooltipClassNames = [
        styles.tooltip,
        open !== undefined && styles.standalone,
        className
    ].filter(Boolean).join(" ");

    const tooltipStyle = open !== undefined ? {
        display: open ? 'block' : 'none'
    } : undefined;

    return (
        <Tooltip
            {...restProps}
            className={tooltipClassNames}
            style={tooltipStyle}
            offset={offset}
            placement={placement as any}
        >
            {showArrow && (
                <OverlayArrow>
                    <svg width={12} height={12} viewBox="0 0 12 12" className={styles.arrow}>
                        <path d="M0 0 L6 6 L12 0" />
                    </svg>
                </OverlayArrow>
            )}
            {children}
        </Tooltip>
    );
};

export const TooltipButtonComponent = (props: { children: React.ReactNode; className?: string; }) => {
    const { children, className } = props;

    return (
        <Button className={className}>
            {children}
        </Button>
    );
};
