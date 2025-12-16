import { Checkbox } from "react-aria-components";
import { BaseCheckboxProps } from "./Checkbox.interface";
import styles from "./Checkbox.module.css";

export const CheckboxComponent = (props: BaseCheckboxProps) => {
    const { children, className, ...restProps } = props;

    const checkboxClassNames = [
        styles.checkbox,
        className
    ].filter(Boolean).join(" ");

    return (
        <Checkbox {...restProps} className={checkboxClassNames}>
            {({ isSelected, isIndeterminate }) => (
                <>
                    <div className={styles.box}>
                        <svg viewBox="0 0 18 18" aria-hidden="true">
                            {isIndeterminate ? (
                                <rect x={5} y={8} width={8} height={2} fill="currentColor" />
                            ) : isSelected ? (
                                <polyline
                                    points="1 9 7 14 15 4"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeDasharray={22}
                                    strokeDashoffset={isSelected ? 44 : 66}
                                />
                            ) : null}
                        </svg>
                    </div>
                    {children && <span className={styles.label}>{children}</span>}
                </>
            )}
        </Checkbox>
    );
};
