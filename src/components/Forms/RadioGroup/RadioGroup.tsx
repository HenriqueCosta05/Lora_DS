import { FieldError, Label, Radio, RadioGroup, Text } from "react-aria-components";
import { BaseRadioGroupProps, BaseRadioProps } from "./RadioGroup.interface";
import styles from "./RadioGroup.module.css";

export const RadioGroupComponent = (props: BaseRadioGroupProps) => {
    const {
        label,
        description,
        errorMessage,
        children,
        orientation = 'vertical',
        className,
        ...restProps
    } = props;

    const groupClassNames = [
        styles.group,
        orientation === 'horizontal' && styles.horizontal,
        className
    ].filter(Boolean).join(" ");

    return (
        <RadioGroup {...restProps} className={groupClassNames}>
            {label && <Label className={styles.groupLabel}>{label}</Label>}
            {description && <Text slot="description" className={styles.description}>{description}</Text>}
            <div className={styles.radios}>{children}</div>
            {errorMessage && <FieldError className={styles.error}>{errorMessage}</FieldError>}
        </RadioGroup>
    );
};

export const RadioComponent = (props: BaseRadioProps) => {
    const { children, className, ...restProps } = props;

    const radioClassNames = [
        styles.radio,
        className
    ].filter(Boolean).join(" ");

    return (
        <Radio {...restProps} className={radioClassNames}>
            <div className={styles.circle}>
                <div className={styles.dot} />
            </div>
            <span className={styles.label}>{children}</span>
        </Radio>
    );
};
