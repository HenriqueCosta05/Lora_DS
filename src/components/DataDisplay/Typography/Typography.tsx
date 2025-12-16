import { createElement, ElementType } from "react";
import { BaseTypographyProps } from "./Typography.interface";
import styles from "./Typography.module.css";

const variantMapping: Record<string, ElementType> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  body1: 'p',
  body2: 'p',
  subtitle1: 'h6',
  subtitle2: 'h6',
  caption: 'span',
  overline: 'span',
};

export const TypographyComponent = (props: BaseTypographyProps) => {
  const {
    variant = 'body1',
    component,
    align,
    color,
    noWrap = false,
    gutterBottom = false,
    children,
    className,
    ...restProps
  } = props;

  const Component = component || variantMapping[variant];

  const typographyClassNames = [
    styles.typography,
    styles[variant],
    align && styles[`align${align.charAt(0).toUpperCase()}${align.slice(1)}`],
    color && styles[`color${color.charAt(0).toUpperCase()}${color.slice(1)}`],
    noWrap && styles.noWrap,
    gutterBottom && styles.gutterBottom,
    className
  ].filter(Boolean).join(" ");

  return createElement(
    Component,
    {
      className: typographyClassNames,
      ...restProps
    },
    children
  );
};
