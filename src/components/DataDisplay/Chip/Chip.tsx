import { TagGroup, Tag, TagList, Label, Button } from "react-aria-components";
import { BaseChipGroupProps, BaseChipProps } from "./Chip.interface";
import styles from "./Chip.module.css";

export const ChipGroupComponent = <T extends object>(props: BaseChipGroupProps<T>) => {
    const { children, label, className, ...restProps } = props;

    const groupClassNames = [
        styles.chipGroup,
        className
    ].filter(Boolean).join(" ");

    return (
        <TagGroup {...restProps} className={groupClassNames}>
            {label && <Label className={styles.label}>{label}</Label>}
            <TagList className={styles.chipList}>{children}</TagList>
        </TagGroup>
    );
};

export const ChipComponent = (props: BaseChipProps) => {
    const { 
        children, 
        variant = 'filled', 
        color = 'default', 
        size = 'medium',
        onDelete,
        className, 
        ...restProps 
    } = props;

    const chipClassNames = [
        styles.chip,
        styles[variant],
        styles[`color${color.charAt(0).toUpperCase()}${color.slice(1)}`],
        styles[size],
        className
    ].filter(Boolean).join(" ");

    return (
        <Tag {...restProps} className={chipClassNames}>
            {({ allowsRemoving }) => (
                <>
                    <span className={styles.label}>{children}</span>
                    {allowsRemoving && (
                        <Button slot="remove" className={styles.removeButton}>
                            ✕
                        </Button>
                    )}
                </>
            )}
        </Tag>
    );
};
