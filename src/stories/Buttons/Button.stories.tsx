import type { Meta, StoryObj } from "@storybook/nextjs";
import { BaseButtonProps, ButtonComponent } from "../../components";

const meta = {
  component: ButtonComponent,
  title: "Buttons/Button",
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ padding: '20px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ButtonComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

const baseArgs: BaseButtonProps = {
  children: <span>Click me</span>,
  onClick: () => alert("Button clicked!"),
  onBlur: () => console.log("Button lost focus"),
  variant: "primary",
};

export const Primary: Story = {
  args: {
    ...baseArgs,
    variant: "primary",
  },
  render: (args) => (
      <ButtonComponent {...args} />
  ),
};

export const Secondary: Story = {
  args: {
    ...baseArgs,
    variant: "secondary",
  },
  render: (args) => <ButtonComponent {...args} />,
};

export const Disabled: Story = {
  args: {
    ...baseArgs,
    disabled: true,
  },
  render: (args) => <ButtonComponent {...args} />,
};

export const WithIcon: Story = {
  args: {
    ...baseArgs,
    children: (
      <>
        <span role="img" aria-label="star" style={{ marginRight: "8px" }}>
          ⭐
        </span>
        Star Button
      </>
    ),
  },
  render: (args) => <ButtonComponent {...args} />,
};

export const LargeButton: Story = {
  args: {
    ...baseArgs,
    size: "large",
  },
  render: (args) => <ButtonComponent {...args} />,
};

export const SmallButton: Story = {
  args: {
    ...baseArgs,
    size: "small",
  },
  render: (args) => <ButtonComponent {...args} />,
};

export const FullWidthButton: Story = {
  args: {
    ...baseArgs,
    fullWidth: true,
  },
  render: (args) => <ButtonComponent {...args} />,
};

export const LoadingButton: Story = {
  args: {
    ...baseArgs,
    isLoading: true,
  },
  render: (args) => <ButtonComponent {...args} />,
};
