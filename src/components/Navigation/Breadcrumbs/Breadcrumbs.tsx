import { Breadcrumbs, Breadcrumb, Link } from "react-aria-components";
import { BaseBreadcrumbsProps } from "./Breadcrumbs.interface";
import styles from "./Breadcrumbs.module.css";

export const BreadcrumbsComponent = <T extends object>(props: BaseBreadcrumbsProps<T>) => {
    const { children, className, ...restProps } = props;

    const breadcrumbsClassNames = [
        styles.breadcrumbs,
        className
    ].filter(Boolean).join(" ");

    return (
        <Breadcrumbs {...restProps} className={breadcrumbsClassNames}>
            {children}
        </Breadcrumbs>
    );
};

export const BreadcrumbComponent = Breadcrumb;
export const BreadcrumbLinkComponent = Link;
