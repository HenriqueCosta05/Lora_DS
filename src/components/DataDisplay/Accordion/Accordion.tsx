import { Icon } from "@iconify-icon/react";
import { Button, Disclosure, DisclosurePanel } from "react-aria-components";
import { BaseAccordionItemProps, BaseAccordionProps } from "./Accordion.interface";
import styles from "./Accordion.module.css";

export const AccordionComponent = (props: BaseAccordionProps) => {
    const { children, className } = props;

    const accordionClassNames = [
        styles.accordion,
        className
    ].filter(Boolean).join(" ");

    return (
        <div className={accordionClassNames}>
            {children}
        </div>
    );
};

export const AccordionItemComponent = (props: BaseAccordionItemProps) => {
    const { title, children, className, ...restProps } = props;

    const itemClassNames = [
        styles.item,
        className
    ].filter(Boolean).join(" ");

    return (
        <Disclosure {...restProps} className={itemClassNames}>
            {({ isExpanded }) => (
                <>
                    <h3 className={styles.header}>
                        <Button slot="trigger" className={styles.trigger}>
                            <span className={styles.title}>{title}</span>
                            <Icon
                                icon="mdi:chevron-down"
                                className={`${styles.icon} ${isExpanded ? styles.expanded : ''}`}
                                width={24}
                                height={24}
                            />
                        </Button>
                    </h3>
                    <DisclosurePanel className={styles.panel}>
                        <div className={styles.content}>
                            {children}
                        </div>
                    </DisclosurePanel>
                </>
            )}
        </Disclosure>
    );
};
