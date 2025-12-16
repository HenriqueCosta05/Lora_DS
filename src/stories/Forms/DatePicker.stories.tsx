import type { Meta, StoryObj } from "@storybook/nextjs";
import { DatePickerComponent } from "../../components/Forms/DatePicker/DatePicker";

const meta = {
  component: DatePickerComponent,
  title: "Forms/DatePicker",
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DatePickerComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Select date",
  },
};

export const WithHelperText: Story = {
  args: {
    label: "Appointment date",
    helperText: "Choose your preferred appointment date",
  },
};

export const WithError: Story = {
  args: {
    label: "Birth date",
    error: true,
    errorMessage: "Please select a valid date",
  },
};
