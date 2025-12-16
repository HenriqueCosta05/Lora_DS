import { BaseBadgeProps } from "./Badge.interface";
import styles from "./Badge.module.css";

export const BadgeComponent = (props: BaseBadgeProps) => {
    const {
        children,
        badgeContent,
        variant = 'standard',
        color = 'primary',
        position = 'top-right',
        max = 99,
        showZero = false,
        invisible = false,
        className,
        ...restProps
    } = props;

    const getBadgeContent = () => {
        if (variant === 'dot') return null;
        
        if (typeof badgeContent === 'number') {
            if (badgeContent === 0 && !showZero) return null;
            return badgeContent > max ? `${max}+` : badgeContent;
        }
        
        return badgeContent;
    };

    const displayBadge = !invisible && (variant === 'dot' || getBadgeContent() !== null);

    const badgeClassNames = [
        styles.badge,
        styles[variant],
        styles[color],
        styles[position],
        className
    ].filter(Boolean).join(" ");

    return (
        <span className={styles.wrapper} {...restProps}>
            {children}
            {displayBadge && (
                <span className={badgeClassNames}>
                    {getBadgeContent()}
                </span>
            )}
        </span>
    );
};
