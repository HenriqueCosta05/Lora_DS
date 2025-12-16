import { ListBox, ListBoxItem, Text } from "react-aria-components";
import { BaseListBoxProps, BaseListBoxItemProps } from "./ListBox.interface";
import styles from "./ListBox.module.css";

export const ListBoxComponent = <T extends object>(props: BaseListBoxProps<T>) => {
    const { children, className, ...restProps } = props;

    const listBoxClassNames = [
        styles.listBox,
        className
    ].filter(Boolean).join(" ");

    return (
        <ListBox {...restProps} className={listBoxClassNames}>
            {children}
        </ListBox>
    );
};

export const ListBoxItemComponent = (props: BaseListBoxItemProps) => {
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

export const ListBoxTextComponent = (props: { children: React.ReactNode; slot?: string }) => {
    return <Text {...props} />;
};
