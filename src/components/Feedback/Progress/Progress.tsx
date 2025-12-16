import { ProgressBar, Label } from "react-aria-components";
import { BaseProgressProps } from "./Progress.interface";
import styles from "./Progress.module.css";

export const ProgressComponent = (props: BaseProgressProps) => {
    const {
        variant = 'linear',
        color = 'primary',
        size = 'medium',
        showValue = false,
        label,
        className,
        ...restProps
    } = props;

    const progressClassNames = [
        styles.progress,
        styles[variant],
        styles[color],
        styles[size],
        className
    ].filter(Boolean).join(" ");

    if (variant === 'circular') {
        const percentage = restProps.value || 0;
        const radius = size === 'small' ? 18 : size === 'large' ? 28 : 22;
        const circumference = 2 * Math.PI * radius;
        const strokeDashoffset = circumference - (percentage / 100) * circumference;

        return (
            <div className={progressClassNames}>
                <svg viewBox="0 0 50 50" className={styles.circularSvg}>
                    <circle
                        className={styles.circularTrack}
                        cx="25"
                        cy="25"
                        r={radius}
                    />
                    <circle
                        className={styles.circularProgress}
                        cx="25"
                        cy="25"
                        r={radius}
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                    />
                </svg>
                {showValue && <span className={styles.circularValue}>{percentage}%</span>}
            </div>
        );
    }

    return (
        <ProgressBar {...restProps} className={progressClassNames}>
            {({ percentage, valueText }) => (
                <>
                    {label && (
                        <div className={styles.labelContainer}>
                            <Label>{label}</Label>
                            {showValue && <span className={styles.value}>{valueText}</span>}
                        </div>
                    )}
                    <div className={styles.track}>
                        <div className={styles.fill} style={{ width: `${percentage}%` }} />
                    </div>
                </>
            )}
        </ProgressBar>
    );
};
