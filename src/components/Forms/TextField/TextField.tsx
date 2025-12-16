import { TextField, Label, Input, Text, FieldError } from "react-aria-components";
import { BaseTextFieldProps } from "./TextField.interface";
import styles from "./TextField.module.css";

export const TextFieldComponent = (props: BaseTextFieldProps) => {
    const {
        label,
        description,
        errorMessage,
        placeholder,
        isRequired,
        isDisabled,
        isReadOnly,
        type = 'text',
        fullWidth,
        className,
        ...restProps
    } = props;

    const fieldClassNames = [
        styles.field,
        fullWidth && styles.fullWidth,
        className
    ].filter(Boolean).join(" ");

    return (
        <TextField
            {...restProps}
            isRequired={isRequired}
            isDisabled={isDisabled}
            isReadOnly={isReadOnly}
            className={fieldClassNames}
        >
            {label && <Label className={styles.label}>{label}</Label>}
            <Input
                type={type}
                placeholder={placeholder}
                className={styles.input}
            />
            {description && <Text slot="description" className={styles.description}>{description}</Text>}
            {errorMessage && <FieldError className={styles.error}>{errorMessage}</FieldError>}
        </TextField>
    );
};
