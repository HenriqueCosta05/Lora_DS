import { Button, Menu, MenuItem, MenuTrigger, Popover, Separator } from "react-aria-components";
import { BaseMenuItemProps, BaseMenuProps, BaseMenuTriggerProps } from "./Menu.interface";
import styles from "./Menu.module.css";

export const MenuTriggerComponent = (props: BaseMenuTriggerProps) => {
    const { children, ...restProps } = props;

    return (
        <MenuTrigger {...restProps}>
            {children}
        </MenuTrigger>
    );
};

export const MenuButtonComponent = (props: { children: React.ReactNode; className?: string }) => {
    const { children, className } = props;

    const buttonClassNames = [
        styles.menuButton,
        className
    ].filter(Boolean).join(" ");

    return (
        <Button className={buttonClassNames}>
            {children}
        </Button>
    );
};

export const MenuComponent = <T extends object>(props: BaseMenuProps<T>) => {
    const { children, className, ...restProps } = props;

    const menuClassNames = [
        styles.menu,
        className
    ].filter(Boolean).join(" ");

    return (
        <Popover className={styles.popover}>
            <Menu {...restProps} className={menuClassNames}>
                {children}
            </Menu>
        </Popover>
    );
};

export const MenuItemComponent = (props: BaseMenuItemProps) => {
    const { children, className, ...restProps } = props;

    const itemClassNames = [
        styles.menuItem,
        className
    ].filter(Boolean).join(" ");

    return (
        <MenuItem {...restProps} className={itemClassNames}>
            {children}
        </MenuItem>
    );
};

export const MenuSeparatorComponent = () => {
    return <Separator className={styles.separator} />;
};
