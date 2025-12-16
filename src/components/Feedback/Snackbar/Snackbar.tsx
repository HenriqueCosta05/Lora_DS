import { Icon } from "@iconify-icon/react";
import { useEffect } from "react";
import { BaseSnackbarProps } from "./Snackbar.interface";
import styles from "./Snackbar.module.css";

const severityIcons = {
    success: 'mdi:check-circle',
    info: 'mdi:information',
    warning: 'mdi:alert',
    error: 'mdi:close-circle',
};

export const SnackbarComponent = (props: BaseSnackbarProps) => {
    const {
        open,
        message,
        position = 'bottom-left',
        severity,
        autoHideDuration,
        onClose,
        action,
        className,
        ...restProps
    } = props;

    useEffect(() => {
        if (open && autoHideDuration && onClose) {
            const timer = setTimeout(() => {
                onClose();
            }, autoHideDuration);

            return () => clearTimeout(timer);
        }
    }, [open, autoHideDuration, onClose]);

    if (!open) return null;

    const snackbarClassNames = [
        styles.snackbar,
        styles[position],
        severity && styles[severity],
        className
    ].filter(Boolean).join(" ");

    return (
        <div {...restProps} className={snackbarClassNames} role="alert">
            {severity && (
                <Icon icon={severityIcons[severity]} width="20" height="20" className={styles.icon} />
            )}
            <span className={styles.message}>{message}</span>
            {action && <div className={styles.action}>{action}</div>}
            {onClose && (
                <button
                    className={styles.closeButton}
                    onClick={onClose}
                    aria-label="Close"
                >
                    <Icon icon="mdi:close" width="16" height="16" />
                </button>
            )}
        </div>
    );
};
