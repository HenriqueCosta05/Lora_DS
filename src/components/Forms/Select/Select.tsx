import {
    Button,
    FieldError,
    Label,
    ListBox,
    ListBoxItem,
    Popover,
    Select,
    SelectValue,
    Text
} from "react-aria-components";
import { BaseSelectItemProps, BaseSelectProps } from "./Select.interface";
import styles from "./Select.module.css";

export const SelectComponent = <T extends object>(props: BaseSelectProps<T>) => {
    const {
        label,
        description,
        errorMessage,
        placeholder = "Select an option",
        children,
        className,
        ...restProps
    } = props;

    const selectClassNames = [
        styles.select,
        className
    ].filter(Boolean).join(" ");

    return (
        <Select {...restProps} className={selectClassNames}>
            {label && <Label className={styles.label}>{label}</Label>}
            {description && <Text slot="description" className={styles.description}>{description}</Text>}
            <Button className={styles.button}>
                <SelectValue className={styles.value} />
                <span className={styles.chevron} aria-hidden="true">
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                        <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </span>
            </Button>
            {errorMessage && <FieldError className={styles.error}>{errorMessage}</FieldError>}
            <Popover className={styles.popover}>
                <ListBox className={styles.listbox}>
                    {children}
                </ListBox>
            </Popover>
        </Select>
    );
};

export const SelectItemComponent = (props: BaseSelectItemProps) => {
    const { children, className, ...restProps } = props;

    const itemClassNames = [
        styles.item,
        className
    ].filter(Boolean).join(" ");

    return (
        <ListBoxItem {...restProps} className={itemClassNames}>
            {children}
        </ListBoxItem>
    );
};
