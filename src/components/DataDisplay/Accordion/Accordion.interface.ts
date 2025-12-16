import { DisclosureProps } from "react-aria-components";

export interface BaseAccordionItemProps extends DisclosureProps {
    title: string;
    children: React.ReactNode;
    className?: string;
}

export interface BaseAccordionProps {
    children: React.ReactNode;
    className?: string;
    allowMultiple?: boolean;
}
