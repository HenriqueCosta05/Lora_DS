import { RadioGroupProps, RadioProps } from "react-aria-components";

export interface BaseRadioGroupProps extends Omit<RadioGroupProps, 'className'> {
    label?: string;
    description?: string;
    errorMessage?: string;
    children: React.ReactNode;
    orientation?: 'horizontal' | 'vertical';
    className?: string;
}

export interface BaseRadioProps extends Omit<RadioProps, 'className'> {
    children: React.ReactNode;
    className?: string;
}
