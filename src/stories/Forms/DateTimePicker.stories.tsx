import type { Meta, StoryObj } from "@storybook/nextjs";
import { DateTimePickerComponent } from "../../components/Forms/DateTimePicker/DateTimePicker";

const meta = {
  component: DateTimePickerComponent,
  title: "Forms/DateTimePicker",
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DateTimePickerComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Select date and time",
  },
};

export const WithHelperText: Story = {
  args: {
    label: "Event date & time",
    helperText: "Choose when your event will take place",
  },
};

export const WithError: Story = {
  args: {
    label: "Appointment",
    error: true,
    errorMessage: "Please select a valid date and time",
  },
};
