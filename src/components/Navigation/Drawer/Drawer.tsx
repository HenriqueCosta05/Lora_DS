import { useEffect } from "react";
import { BaseDrawerProps } from "./Drawer.interface";
import styles from "./Drawer.module.css";

export const DrawerComponent = (props: BaseDrawerProps) => {
    const {
        open,
        onClose,
        anchor = 'left',
        children,
        className,
        ...restProps
    } = props;

    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [open]);

    if (!open) return null;

    const drawerClassNames = [
        styles.drawer,
        styles[anchor],
        className
    ].filter(Boolean).join(" ");

    return (
        <>
            <div className={styles.backdrop} onClick={onClose} />
            <div {...restProps} className={drawerClassNames}>
                {children}
            </div>
        </>
    );
};
