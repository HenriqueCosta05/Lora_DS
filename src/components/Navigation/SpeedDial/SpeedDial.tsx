import { Icon } from "@iconify-icon/react";
import { useState } from "react";
import { BaseSpeedDialProps } from "./SpeedDial.interface";
import styles from "./SpeedDial.module.css";

export const SpeedDialComponent = (props: BaseSpeedDialProps) => {
    const {
        actions,
        direction = 'up',
        icon,
        openIcon,
        className
    } = props;

    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleActionClick = (action: typeof actions[0]) => {
        action.onClick?.();
        setIsOpen(false);
    };

    const speedDialClassNames = [
        styles.speedDial,
        styles[direction],
        isOpen ? styles.open : '',
        className
    ].filter(Boolean).join(" ");

    const defaultIcon = <Icon icon="mdi:plus" width={24} height={24} />;
    const defaultOpenIcon = <Icon icon="mdi:close" width={24} height={24} />;

    return (
        <div className={speedDialClassNames}>
            {isOpen && (
                <>
                    <div className={styles.backdrop} onClick={handleToggle} />
                    <div className={styles.actions}>
                        {actions.map((action) => (
                            <div key={action.id} className={styles.actionWrapper}>
                                <span className={styles.actionLabel}>{action.label}</span>
                                <button
                                    className={styles.actionButton}
                                    onClick={() => handleActionClick(action)}
                                    aria-label={action.label}
                                >
                                    {action.icon}
                                </button>
                            </div>
                        ))}
                    </div>
                </>
            )}
            <button
                className={styles.fab}
                onClick={handleToggle}
                aria-label={isOpen ? 'Close' : 'Open'}
                aria-expanded={isOpen}
            >
                <span className={`${styles.fabIcon} ${isOpen ? styles.rotated : ''}`}>
                    {isOpen ? (openIcon || defaultOpenIcon) : (icon || defaultIcon)}
                </span>
            </button>
        </div>
    );
};
