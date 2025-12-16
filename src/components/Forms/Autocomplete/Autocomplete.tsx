import { Icon } from "@iconify-icon/react";
import { Button, ComboBox, FieldError, Group, Input, Label, ListBox, ListBoxItem, Popover, Text } from "react-aria-components";
import { BaseAutocompleteItemProps, BaseAutocompleteProps } from "./Autocomplete.interface";
import styles from "./Autocomplete.module.css";

export const AutocompleteComponent = <T extends object>(props: BaseAutocompleteProps<T>) => {
    const { label, description, errorMessage, placeholder, children, className, ...restProps } = props;

    const comboBoxClassNames = [
        styles.autocomplete,
        className
    ].filter(Boolean).join(" ");

    return (
        <ComboBox {...restProps} className={comboBoxClassNames}>
            {label && <Label className={styles.label}>{label}</Label>}
            {description && <Text slot="description" className={styles.description}>{description}</Text>}
            <Group className={styles.group}>
                <Input className={styles.input} placeholder={placeholder} />
                <Button className={styles.button}>
                    <Icon icon="mdi:chevron-down" width={20} height={20} />
                </Button>
            </Group>
            {errorMessage && <FieldError className={styles.error}>{errorMessage}</FieldError>}
            <Popover className={styles.popover}>
                <ListBox className={styles.listbox}>
                    {children}
                </ListBox>
            </Popover>
        </ComboBox>
    );
};

export const AutocompleteItemComponent = (props: BaseAutocompleteItemProps) => {
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
