import { SwitchProps } from "react-aria-components";

export interface BaseSwitchProps extends Omit<SwitchProps, 'className'> {
    children?: React.ReactNode;
    className?: string;
}
