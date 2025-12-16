import { Icon } from "@iconify-icon/react";
import {
    Button,
    CalendarCell,
    CalendarGrid,
    CalendarGridBody,
    CalendarGridHeader,
    CalendarHeaderCell,
    DateInput,
    DateRangePicker,
    DateSegment,
    Dialog,
    Group,
    Heading,
    Label,
    Popover,
    RangeCalendar,
    Text
} from "react-aria-components";
import { BaseDateRangePickerProps } from "./DateRangePicker.interface";
import styles from "./DateRangePicker.module.css";

export const DateRangePickerComponent = (props: BaseDateRangePickerProps) => {
    const {
        label,
        helperText,
        error,
        errorMessage,
        className,
        ...restProps
    } = props;

    const dateRangePickerClassNames = [
        styles.dateRangePicker,
        error && styles.error,
        className
    ].filter(Boolean).join(" ");

    return (
        <DateRangePicker {...restProps} className={dateRangePickerClassNames}>
            {label && <Label className={styles.label}>{label}</Label>}
            <Group className={styles.group}>
                <div className={styles.inputContainer}>
                    <Icon icon="mdi:calendar-start" width="18" height="18" className={styles.inputIcon} />
                    <DateInput slot="start" className={styles.dateInput}>
                        {(segment) => <DateSegment segment={segment} className={styles.segment} />}
                    </DateInput>
                </div>
                <div className={styles.divider}>
                    <Icon icon="mdi:arrow-right" width="20" height="20" />
                </div>
                <div className={styles.inputContainer}>
                    <Icon icon="mdi:calendar-end" width="18" height="18" className={styles.inputIcon} />
                    <DateInput slot="end" className={styles.dateInput}>
                        {(segment) => <DateSegment segment={segment} className={styles.segment} />}
                    </DateInput>
                </div>
                <Button className={styles.calendarButton}>
                    <Icon icon="mdi:calendar" width="20" height="20" />
                </Button>
            </Group>
            {(helperText || (error && errorMessage)) && (
                <Text slot="description" className={styles.helperText}>
                    {error && errorMessage ? errorMessage : helperText}
                </Text>
            )}
            <Popover className={styles.popover}>
                <Dialog className={styles.dialog}>
                    <div className={styles.calendarsContainer}>
                        <RangeCalendar className={styles.calendar} visibleDuration={{ months: 2 }}>
                            <header className={styles.header}>
                                <Button slot="previous" className={styles.navButton}>
                                    <Icon icon="mdi:chevron-left" width="20" height="20" />
                                </Button>
                                <Heading className={styles.heading} />
                                <Button slot="next" className={styles.navButton}>
                                    <Icon icon="mdi:chevron-right" width="20" height="20" />
                                </Button>
                            </header>
                            <div className={styles.calendarGrids}>
                                <CalendarGrid className={styles.calendarGrid} offset={{ months: 0 }}>
                                    <CalendarGridHeader>
                                        {(day) => (
                                            <CalendarHeaderCell className={styles.calendarHeaderCell}>
                                                {day}
                                            </CalendarHeaderCell>
                                        )}
                                    </CalendarGridHeader>
                                    <CalendarGridBody>
                                        {(date) => (
                                            <CalendarCell date={date} className={styles.calendarCell} />
                                        )}
                                    </CalendarGridBody>
                                </CalendarGrid>
                                <CalendarGrid className={styles.calendarGrid} offset={{ months: 1 }}>
                                    <CalendarGridHeader>
                                        {(day) => (
                                            <CalendarHeaderCell className={styles.calendarHeaderCell}>
                                                {day}
                                            </CalendarHeaderCell>
                                        )}
                                    </CalendarGridHeader>
                                    <CalendarGridBody>
                                        {(date) => (
                                            <CalendarCell date={date} className={styles.calendarCell} />
                                        )}
                                    </CalendarGridBody>
                                </CalendarGrid>
                            </div>
                        </RangeCalendar>
                    </div>
                </Dialog>
            </Popover>
        </DateRangePicker>
    );
};
