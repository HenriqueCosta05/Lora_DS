import type { Meta, StoryObj } from "@storybook/nextjs";
import { SliderComponent } from "../../components/Forms/Slider/Slider";

const meta = {
  component: SliderComponent,
  title: "Forms/Slider",
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SliderComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Volume",
    defaultValue: 50,
  },
};

export const WithMinMax: Story = {
  args: {
    label: "Temperature",
    defaultValue: 20,
    minValue: 0,
    maxValue: 100,
  },
};

export const WithStep: Story = {
  args: {
    label: "Rating",
    defaultValue: 3,
    minValue: 0,
    maxValue: 5,
    step: 0.5,
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Slider",
    defaultValue: 50,
    isDisabled: true,
  },
};

export const CustomRange: Story = {
  args: {
    label: "Price Range",
    defaultValue: 500,
    minValue: 100,
    maxValue: 1000,
    step: 50,
    formatOptions: {
      style: 'currency',
      currency: 'USD',
    },
  },
};
