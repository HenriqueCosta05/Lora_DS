import { Tab, TabList, TabPanel, Tabs } from "react-aria-components";
import { BaseTabListProps, BaseTabPanelProps, BaseTabProps, BaseTabsProps } from "./Tabs.interface";
import styles from "./Tabs.module.css";

export const TabsComponent = (props: BaseTabsProps) => {
    const { children, className, ...restProps } = props;

    const tabsClassNames = [
        styles.tabs,
        className
    ].filter(Boolean).join(" ");

    return (
        <Tabs {...restProps} className={tabsClassNames}>
            {children}
        </Tabs>
    );
};

export const TabListComponent = <T extends object>(props: BaseTabListProps<T>) => {
    const { children, className, ...restProps } = props;

    const tabListClassNames = [
        styles.tabList,
        className
    ].filter(Boolean).join(" ");

    return (
        <TabList {...restProps} className={tabListClassNames}>
            {children}
        </TabList>
    );
};

export const TabComponent = (props: BaseTabProps) => {
    const { children, className, ...restProps } = props;

    const tabClassNames = [
        styles.tab,
        className
    ].filter(Boolean).join(" ");

    return (
        <Tab {...restProps} className={tabClassNames}>
            {children}
        </Tab>
    );
};

export const TabPanelComponent = (props: BaseTabPanelProps) => {
    const { children, className, ...restProps } = props;

    const tabPanelClassNames = [
        styles.tabPanel,
        className
    ].filter(Boolean).join(" ");

    return (
        <TabPanel {...restProps} className={tabPanelClassNames}>
            {children}
        </TabPanel>
    );
};
