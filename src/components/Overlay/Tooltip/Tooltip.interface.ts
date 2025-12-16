import { TooltipProps, TooltipTriggerProps } from "react-aria-components";

export interface BaseTooltipTriggerProps extends TooltipTriggerProps {
    children: React.ReactNode;
}

export interface BaseTooltipProps extends Omit<TooltipProps, 'className'> {
    children: React.ReactNode;
    className?: string;
}
