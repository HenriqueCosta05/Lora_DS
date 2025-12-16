import { CheckboxProps } from "react-aria-components";

export interface BaseCheckboxProps extends Omit<CheckboxProps, 'className'> {
    children?: React.ReactNode;
    isIndeterminate?: boolean;
    className?: string;
}
