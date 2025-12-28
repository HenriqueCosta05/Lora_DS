import { TooltipProps } from "react-aria-components";

export interface BaseTooltipTriggerProps {
    children: React.ReactNode;
    delay?: number;
    closeDelay?: number;
    isOpen?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (isOpen: boolean) => void;
}

export interface BaseTooltipProps extends Omit<TooltipProps, 'className'> {
    children: React.ReactNode;
    className?: string;
    /**
     * Whether the tooltip is currently open.
     * When used outside of TooltipTrigger, this controls visibility directly.
     */
    open?: boolean;
    /**
     * Placement of the tooltip relative to its trigger or position
     */
    placement?: 'top' | 'bottom' | 'left' | 'right' | 'top start' | 'top end' | 'bottom start' | 'bottom end';
    /**
     * Distance in pixels between the tooltip and its trigger
     */
    offset?: number;
    /**
     * Whether to show the arrow pointer
     * @default true
     */
    showArrow?: boolean;
}
