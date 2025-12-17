import { TooltipProps } from "react-aria-components";

export interface BaseTooltipTriggerProps {
    children: React.ReactNode;
    delay?: number;
    closeDelay?: number;
}

export interface BaseTooltipProps extends Omit<TooltipProps, 'className'> {
    children: React.ReactNode;
    className?: string;
}
