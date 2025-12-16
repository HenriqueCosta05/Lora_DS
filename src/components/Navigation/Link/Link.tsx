import { Link } from "react-aria-components";
import { BaseLinkProps } from "./Link.interface";
import styles from "./Link.module.css";

export const LinkComponent = (props: BaseLinkProps) => {
    const {
        children,
        variant = 'default',
        color = 'primary',
        underline = 'hover',
        className,
        ...restProps
    } = props;

    const linkClassNames = [
        styles.link,
        styles[variant],
        styles[`color${color.charAt(0).toUpperCase()}${color.slice(1)}`],
        styles[`underline${underline.charAt(0).toUpperCase()}${underline.slice(1)}`],
        className
    ].filter(Boolean).join(" ");

    return (
        <Link {...restProps} className={linkClassNames}>
            {children}
        </Link>
    );
};
