import { BaseAlertProps } from "./Alert.interface";
import styles from "./Alert.module.css";

const defaultIcons = {
    success: '✓',
    info: 'ℹ',
    warning: '⚠',
    error: '✕',
};

export const AlertComponent = (props: BaseAlertProps) => {
    const {
        severity = 'info',
        variant = 'standard',
        title,
        onClose,
        icon,
        children,
        className,
        ...restProps
    } = props;

    const alertClassNames = [
        styles.alert,
        styles[severity],
        styles[variant],
        className
    ].filter(Boolean).join(" ");

    return (
        <div {...restProps} className={alertClassNames} role="alert">
            <div className={styles.icon}>
                {icon !== undefined ? icon : defaultIcons[severity]}
            </div>
            <div className={styles.content}>
                {title && <div className={styles.title}>{title}</div>}
                <div className={styles.message}>{children}</div>
            </div>
            {onClose && (
                <button
                    className={styles.closeButton}
                    onClick={onClose}
                    aria-label="Close"
                >
                    ✕
                </button>
            )}
        </div>
    );
};
