import { BaseAlertProps } from "./Alert.interface";
import styles from "./Alert.module.css";

const defaultIcons = {
    info: (
        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="#1976D2" strokeWidth="2" />
            <line x1="12" y1="8" x2="12" y2="12" stroke="#1976D2" strokeWidth="2" />
            <circle cx="12" cy="16" r="1" fill="#1976D2" />
        </svg>
    ),
    warning: (
        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="#FFA000" strokeWidth="2" />
            <line x1="12" y1="7" x2="12" y2="13" stroke="#FFA000" strokeWidth="2" />
            <circle cx="12" cy="16" r="1" fill="#FFA000" />
        </svg>
    ),
    error: (
        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="#D32F2F" strokeWidth="2" />
            <line x1="15" y1="9" x2="9" y2="15" stroke="#D32F2F" strokeWidth="2" />
            <line x1="9" y1="9" x2="15" y2="15" stroke="#D32F2F" strokeWidth="2" />
        </svg>
    ),
    success: (
        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="#388E3C" strokeWidth="2" />
            <polyline points="7 13 10 16 17 9" stroke="#388E3C" strokeWidth="2" fill="none" />
        </svg>
    ),
}

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
