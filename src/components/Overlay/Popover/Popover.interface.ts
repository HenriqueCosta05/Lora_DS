import { DialogProps, PopoverProps } from "react-aria-components";

export interface BasePopoverProps extends Omit<PopoverProps, 'className'> {
    children: React.ReactNode;
    className?: string;
}

export interface BasePopoverDialogProps extends Omit<DialogProps, 'className'> {
    children: React.ReactNode;
    className?: string;
}
