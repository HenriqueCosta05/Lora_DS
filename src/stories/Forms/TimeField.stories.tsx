import type { Meta, StoryObj } from "@storybook/nextjs";
import { TimeFieldComponent } from "../../components/Forms/TimeField/TimeField";

const meta = {
  component: TimeFieldComponent,
  title: "Forms/TimeField",
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TimeFieldComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Select time",
  },
};

export const WithHelperText: Story = {
  args: {
    label: "Meeting time",
    helperText: "Choose your preferred meeting time",
  },
};

export const WithError: Story = {
  args: {
    label: "Start time",
    error: true,
    errorMessage: "Please select a valid time",
  },
};
