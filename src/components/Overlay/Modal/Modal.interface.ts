import { DialogProps, ModalOverlayProps } from "react-aria-components";

export interface BaseModalProps extends Omit<ModalOverlayProps, 'className'> {
    children: React.ReactNode;
    className?: string;
}

export interface BaseDialogProps extends Omit<DialogProps, 'className'> {
    title?: string;
    children: React.ReactNode;
    className?: string;
}
