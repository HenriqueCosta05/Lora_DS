import { Icon } from "@iconify-icon/react";
import { useState } from "react";
import { Radio, RadioGroup } from "react-aria-components";
import { BaseRatingProps } from "./Rating.interface";
import styles from "./Rating.module.css";

export const RatingComponent = (props: BaseRatingProps) => {
    const {
        max = 5,
        size = 'medium',
        color = 'warning',
        readOnly = false,
        precision = 1,
        className,
        value,
        defaultValue,
        onChange,
        ...restProps
    } = props;

    const [hoverValue, setHoverValue] = useState<number | null>(null);

    const ratingClassNames = [
        styles.rating,
        styles[size],
        styles[color],
        readOnly ? styles.readOnly : '',
        className
    ].filter(Boolean).join(" ");

    const stars = [];
    for (let i = 1; i <= max; i++) {
        if (precision === 0.5) {
            stars.push(i - 0.5);
        }
        stars.push(i);
    }

    const currentValue = hoverValue || Number(value) || Number(defaultValue) || 0;

    return (
        <RadioGroup
            {...restProps}
            value={value?.toString()}
            defaultValue={defaultValue?.toString()}
            onChange={(val) => onChange?.(val)}
            className={ratingClassNames}
            isReadOnly={readOnly}
            aria-label={restProps['aria-label'] || 'Rating'}
        >
            <div className={styles.stars}>
                {stars.map((starValue) => {
                    const filled = currentValue >= starValue;
                    const halfFilled = precision === 0.5 && currentValue >= starValue && currentValue < starValue + 0.5;

                    return (
                        <Radio
                            key={starValue}
                            value={starValue.toString()}
                            className={styles.starWrapper}
                            onHoverStart={() => !readOnly && setHoverValue(starValue)}
                            onHoverEnd={() => !readOnly && setHoverValue(null)}
                        >
                            <Icon
                                icon={filled || halfFilled ? "mdi:star" : "mdi:star-outline"}
                                className={`${styles.star} ${filled ? styles.filled : ''} ${halfFilled ? styles.half : ''}`}
                                width="1em"
                                height="1em"
                            />
                        </Radio>
                    );
                })}
            </div>
        </RadioGroup>
    );
};
