import { useState } from "react";
import { BaseAvatarProps } from "./Avatar.interface";
import styles from "./Avatar.module.css";

export const AvatarComponent = (props: BaseAvatarProps) => {
    const {
        src,
        alt = "",
        size = 'medium',
        variant = 'circular',
        children,
        className,
        ...restProps
    } = props;

    const [imageError, setImageError] = useState(false);

    const avatarClassNames = [
        styles.avatar,
        styles[size],
        styles[variant],
        className
    ].filter(Boolean).join(" ");

    const getInitials = (text: string) => {
        return text
            .split(' ')
            .map(word => word[0])
            .join('')
            .toUpperCase()
            .slice(0, 2);
    };

    const renderContent = () => {
        if (src && !imageError) {
            return (
                <img
                    src={src}
                    alt={alt}
                    className={styles.image}
                    onError={() => setImageError(true)}
                />
            );
        }

        if (children) {
            if (typeof children === 'string') {
                return <span className={styles.initials}>{getInitials(children)}</span>;
            }
            return children;
        }

        return <span className={styles.fallback}>?</span>;
    };

    return (
        <div {...restProps} className={avatarClassNames}>
            {renderContent()}
        </div>
    );
};
