import { Input, Label, Text, TextField } from "react-aria-components";
import { BaseInputGroupProps, InputGroupFieldProps } from "./InputGroup.interface";
import styles from "./InputGroup.module.css";

export const InputGroupComponent = (props: BaseInputGroupProps) => {
    const {
        children,
        label,
        helperText,
        error,
        errorMessage,
        startAdornment,
        endAdornment,
        className,
    } = props;

    const inputGroupClassNames = [
        styles.inputGroup,
        error && styles.error,
        className
    ].filter(Boolean).join(" ");

    return (
        <div className={inputGroupClassNames}>
            {label && <Label className={styles.label}>{label}</Label>}
            <div className={styles.inputWrapper}>
                {startAdornment && <div className={styles.adornment}>{startAdornment}</div>}
                {children}
                {endAdornment && <div className={styles.adornment}>{endAdornment}</div>}
            </div>
            {(helperText || (error && errorMessage)) && (
                <Text slot="description" className={styles.helperText}>
                    {error && errorMessage ? errorMessage : helperText}
                </Text>
            )}
        </div>
    );
};

export const InputGroupField = (props: InputGroupFieldProps) => {
    const { placeholder, className, ...restProps } = props;

    const textFieldClassName = [styles.textField, className].filter(Boolean).join(" ");

    return (
        <TextField {...restProps} className={textFieldClassName}>
            <Input placeholder={placeholder} className={styles.input} />
        </TextField>
    );
};
