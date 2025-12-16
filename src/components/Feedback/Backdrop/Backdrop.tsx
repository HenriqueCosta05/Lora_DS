import { BaseBackdropProps } from "./Backdrop.interface";
import styles from "./Backdrop.module.css";

export const BackdropComponent = (props: BaseBackdropProps) => {
    const {
        open,
        invisible = false,
        onClose,
        className,
        ...restProps
    } = props;

    if (!open) return null;

    const backdropClassNames = [
        styles.backdrop,
        invisible && styles.invisible,
        className
    ].filter(Boolean).join(" ");

    return (
        <div
            {...restProps}
            className={backdropClassNames}
            onClick={onClose}
        />
    );
};
