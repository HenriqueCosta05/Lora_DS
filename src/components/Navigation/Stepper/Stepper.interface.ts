import { HTMLAttributes } from "react";

export interface BaseStepperProps extends HTMLAttributes<HTMLDivElement> {
    activeStep: number;
    steps: Array<{
        label: string;
        description?: string;
        optional?: boolean;
    }>;
    orientation?: 'horizontal' | 'vertical';
    alternativeLabel?: boolean;
    className?: string;
}
