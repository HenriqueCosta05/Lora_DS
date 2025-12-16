import { createElement, ElementType } from "react";
import { BaseBoxProps } from "./Box.interface";

export const BoxComponent = (props: BaseBoxProps) => {
    const {
        children,
        component = 'div',
        className,
        ...restProps
    } = props;

    return createElement(
        component as ElementType,
        {
            className,
            ...restProps
        },
        children
    );
};
