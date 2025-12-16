import { Icon } from "@iconify-icon/react";
import { BaseStepperProps } from "./Stepper.interface";
import styles from "./Stepper.module.css";

export const StepperComponent = (props: BaseStepperProps) => {
    const {
        activeStep,
        steps,
        orientation = 'horizontal',
        alternativeLabel = false,
        className,
        ...restProps
    } = props;

    const stepperClassNames = [
        styles.stepper,
        styles[orientation],
        alternativeLabel && styles.alternativeLabel,
        className
    ].filter(Boolean).join(" ");

    return (
        <div {...restProps} className={stepperClassNames}>
            {steps.map((step, index) => {
                const isActive = index === activeStep;
                const isCompleted = index < activeStep;

                const stepClassNames = [
                    styles.step,
                    isActive && styles.active,
                    isCompleted && styles.completed,
                ].filter(Boolean).join(" ");

                return (
                    <div key={index} className={stepClassNames}>
                        <div className={styles.stepButton}>
                            <div className={styles.iconContainer}>
                                {isCompleted ? (
                                    <Icon icon="mdi:check" width="20" height="20" />
                                ) : (
                                    <span className={styles.stepNumber}>{index + 1}</span>
                                )}
                            </div>
                            <div className={styles.labelContainer}>
                                <span className={styles.label}>{step.label}</span>
                                {step.optional && (
                                    <span className={styles.optional}>Optional</span>
                                )}
                                {step.description && (
                                    <span className={styles.description}>{step.description}</span>
                                )}
                            </div>
                        </div>
                        {index < steps.length - 1 && (
                            <div className={styles.connector} />
                        )}
                    </div>
                );
            })}
        </div>
    );
};
