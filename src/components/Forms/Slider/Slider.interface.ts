import { SliderProps } from "react-aria-components";

export interface BaseSliderProps<T = number | number[]> extends Omit<SliderProps<T>, 'className'> {
    label?: string;
    className?: string;
}
