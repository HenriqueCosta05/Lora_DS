import { Button, Dialog, DialogTrigger, OverlayArrow, Popover } from "react-aria-components";
import { BasePopoverDialogProps, BasePopoverProps } from "./Popover.interface";
import styles from "./Popover.module.css";

export const PopoverTriggerComponent = DialogTrigger;

export const PopoverComponent = (props: BasePopoverProps) => {
    const { children, className, ...restProps } = props;

    const popoverClassNames = [
        styles.popover,
        className
    ].filter(Boolean).join(" ");

    return (
        <Popover {...restProps} className={popoverClassNames}>
            <OverlayArrow>
                <svg width={12} height={12} viewBox="0 0 12 12" className={styles.arrow}>
                    <path d="M0 0 L6 6 L12 0" />
                </svg>
            </OverlayArrow>
            {children}
        </Popover>
    );
};

export const PopoverDialogComponent = (props: BasePopoverDialogProps) => {
    const { children, className, ...restProps } = props;

    const dialogClassNames = [
        styles.dialog,
        className
    ].filter(Boolean).join(" ");

    return (
        <Dialog {...restProps} className={dialogClassNames}>
            {children}
        </Dialog>
    );
};

export const PopoverButtonComponent = (props: { children: React.ReactNode; className?: string }) => {
    const { children, className } = props;

    return (
        <Button className={className}>
            {children}
        </Button>
    );
};
