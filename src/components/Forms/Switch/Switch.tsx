import { Switch } from "react-aria-components";
import { BaseSwitchProps } from "./Switch.interface";
import styles from "./Switch.module.css";

export const SwitchComponent = (props: BaseSwitchProps) => {
    const { children, className, ...restProps } = props;

    const switchClassNames = [
        styles.switch,
        className
    ].filter(Boolean).join(" ");

    return (
        <Switch {...restProps} className={switchClassNames}>
            <div className={styles.track}>
                <div className={styles.thumb} />
            </div>
            {children && <span className={styles.label}>{children}</span>}
        </Switch>
    );
};
