import { Icon } from "@iconify-icon/react";
import { I18nProvider } from "react-aria";
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
import { BaseDateTimePickerProps } from "./DateTimePicker.interface";
import styles from "./DateTimePicker.module.css";

export const DateTimePickerComponent = (props: BaseDateTimePickerProps) => {
    const {
        label,
        helperText,
        error,
        errorMessage,
        className,
        locale,
        ...restProps
    } = props;

    const dateTimePickerClassNames = [
        styles.dateTimePicker,
        error && styles.error,
        className
    ].filter(Boolean).join(" ");

    const dateTimePickerContent = (
        <DatePicker {...restProps} className={dateTimePickerClassNames} granularity="minute">
            {label && <Label className={styles.label}>{label}</Label>}
            <Group className={styles.group}>
                <Icon icon="mdi:calendar-clock" width="18" height="18" className={styles.inputIcon} />
                <DateInput className={styles.dateInput}>
                    {(segment) => <DateSegment segment={segment} className={styles.segment} />}
                </DateInput>
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

    return locale ? (
        <I18nProvider locale={locale}>
            {dateTimePickerContent}
        </I18nProvider>
    ) : dateTimePickerContent;
};
