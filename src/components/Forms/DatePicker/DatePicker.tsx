import { Icon } from "@iconify-icon/react";
import {
    Button,
    Calendar,
    CalendarCell,
    CalendarGrid,
    CalendarGridBody,
    CalendarGridHeader,
    CalendarHeaderCell,
    DateInput,
    DatePicker,
    DateSegment,
    Dialog,
    Group,
    Heading,
    Label,
    Popover,
    Text
} from "react-aria-components";
import { BaseDatePickerProps } from "./DatePicker.interface";
import styles from "./DatePicker.module.css";

export const DatePickerComponent = (props: BaseDatePickerProps) => {
    const {
        label,
        helperText,
        error,
        errorMessage,
        className,
        ...restProps
    } = props;

    const datePickerClassNames = [
        styles.datePicker,
        error && styles.error,
        className
    ].filter(Boolean).join(" ");

    return (
        <DatePicker {...restProps} className={datePickerClassNames}>
            {label && <Label className={styles.label}>{label}</Label>}
            <Group className={styles.group}>
                <div className={styles.inputContainer}>
                    <Icon icon="mdi:calendar" width="18" height="18" className={styles.inputIcon} />
                    <DateInput className={styles.dateInput}>
                        {(segment) => <DateSegment segment={segment} className={styles.segment} />}
                    </DateInput>
                </div>
                <Button className={styles.calendarButton}>
                    <Icon icon="mdi:calendar-month" width="20" height="20" />
                </Button>
            </Group>
            {(helperText || (error && errorMessage)) && (
                <Text slot="description" className={styles.helperText}>
                    {error && errorMessage ? errorMessage : helperText}
                </Text>
            )}
            <Popover className={styles.popover}>
                <Dialog className={styles.dialog}>
                    <Calendar className={styles.calendar}>
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
                    </Calendar>
                </Dialog>
            </Popover>
        </DatePicker>
    );
};
