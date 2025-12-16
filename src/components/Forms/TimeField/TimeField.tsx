import { Icon } from "@iconify-icon/react";
import {
    DateInput,
    DateSegment,
    Label,
    Text,
    TimeField
} from "react-aria-components";
import { BaseTimeFieldProps } from "./TimeField.interface";
import styles from "./TimeField.module.css";

export const TimeFieldComponent = (props: BaseTimeFieldProps) => {
    const {
        label,
        helperText,
        error,
        errorMessage,
        className,
        ...restProps
    } = props;

    const timeFieldClassNames = [
        styles.timeField,
        error && styles.error,
        className
    ].filter(Boolean).join(" ");

    return (
        <TimeField {...restProps} className={timeFieldClassNames}>
            {label && <Label className={styles.label}>{label}</Label>}
            <div className={styles.group}>
                <div className={styles.inputContainer}>
                    <Icon icon="mdi:clock-outline" width="18" height="18" className={styles.inputIcon} />
                    <DateInput className={styles.dateInput}>
                        {(segment) => <DateSegment segment={segment} className={styles.segment} />}
                    </DateInput>
                </div>
            </div>
            {(helperText || (error && errorMessage)) && (
                <Text slot="description" className={styles.helperText}>
                    {error && errorMessage ? errorMessage : helperText}
                </Text>
            )}
        </TimeField>
    );
};
