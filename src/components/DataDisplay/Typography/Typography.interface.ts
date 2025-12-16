import { HTMLAttributes } from "react";

export type TypographyVariant = 
  | 'h1' 
  | 'h2' 
  | 'h3' 
  | 'h4' 
  | 'h5' 
  | 'h6' 
  | 'body1' 
  | 'body2' 
  | 'subtitle1' 
  | 'subtitle2' 
  | 'caption' 
  | 'overline';

export type TypographyAlign = 'left' | 'center' | 'right' | 'justify';

export type TypographyColor = 'primary' | 'secondary' | 'text' | 'error' | 'success' | 'warning' | 'info';

export interface BaseTypographyProps extends Omit<HTMLAttributes<HTMLElement>, 'color'> {
  variant?: TypographyVariant;
  component?: keyof JSX.IntrinsicElements;
  align?: TypographyAlign;
  color?: TypographyColor;
  noWrap?: boolean;
  gutterBottom?: boolean;
  children: React.ReactNode;
  className?: string;
}
