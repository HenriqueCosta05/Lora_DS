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
                <DateInput slot="start" className={styles.dateInput}>
                    {(segment) => <DateSegment segment={segment} className={styles.segment} />}
                </DateInput>
                <span aria-hidden="true" className={styles.separator}>–</span>
                <DateInput slot="end" className={styles.dateInput}>
                    {(segment) => <DateSegment segment={segment} className={styles.segment} />}
                </DateInput>
                <Button className={styles.button}>
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
                    <RangeCalendar className={styles.calendar}>
                        <header className={styles.header}>
                            <Button slot="previous" className={styles.navButton}>
                                <Icon icon="mdi:chevron-left" width="20" height="20" />
                            </Button>
                            <Heading className={styles.heading} />
                            <Button slot="next" className={styles.navButton}>
                                <Icon icon="mdi:chevron-right" width="20" height="20" />
                            </Button>
                        </header>
                        <CalendarGrid className={styles.calendarGrid}>
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
                    </RangeCalendar>
                </Dialog>
            </Popover>
        </DateRangePicker>
    );
};
