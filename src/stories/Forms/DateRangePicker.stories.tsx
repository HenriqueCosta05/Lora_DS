import type { Meta, StoryObj } from "@storybook/nextjs";
import { DateRangePickerComponent } from "../../components/Forms/DateRangePicker/DateRangePicker";

const meta = {
  component: DateRangePickerComponent,
  title: "Forms/DateRangePicker",
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DateRangePickerComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Select date range",
  },
};

export const WithHelperText: Story = {
  args: {
    label: "Booking dates",
    helperText: "Select your check-in and check-out dates",
  },
};

export const WithError: Story = {
  args: {
    label: "Date range",
    error: true,
    errorMessage: "Please select a valid date range",
  },
};
