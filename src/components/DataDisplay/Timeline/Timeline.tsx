import { Icon } from "@iconify-icon/react";
import { BaseTimelineProps } from "./Timeline.interface";
import styles from "./Timeline.module.css";

export const TimelineComponent = (props: BaseTimelineProps) => {
    const {
        items,
        position = 'left',
        className,
        ...restProps
    } = props;

    const timelineClassNames = [
        styles.timeline,
        styles[position],
        className
    ].filter(Boolean).join(" ");

    return (
        <div {...restProps} className={timelineClassNames}>
            {items.map((item, index) => {
                const isAlternate = position === 'alternate';
                const isRight = position === 'right' || (isAlternate && index % 2 === 1);

                const itemClassNames = [
                    styles.timelineItem,
                    isRight && styles.right,
                    item.color && styles[item.color],
                ].filter(Boolean).join(" ");

                return (
                    <div key={index} className={itemClassNames}>
                        <div className={styles.timelineContent}>
                            {item.time && (
                                <span className={styles.time}>{item.time}</span>
                            )}
                            <div className={styles.title}>{item.title}</div>
                            {item.description && (
                                <div className={styles.description}>{item.description}</div>
                            )}
                        </div>
                        <div className={styles.timelineSeparator}>
                            <div className={styles.dot}>
                                {item.icon || <Icon icon="mdi:circle" width="12" height="12" />}
                            </div>
                            {index < items.length - 1 && (
                                <div className={styles.connector} />
                            )}
                        </div>
                        {isAlternate && <div className={styles.timelineOppositeContent} />}
                    </div>
                );
            })}
        </div>
    );
};
