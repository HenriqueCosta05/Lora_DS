import type { Meta, StoryObj } from "@storybook/nextjs";
import { SwitchComponent } from "../../components/Forms/Switch/Switch";
import { BaseSwitchProps } from "../../components/Forms/Switch/Switch.interface";

const meta = {
  component: SwitchComponent,
  title: "Forms/Switch",
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ padding: '20px', minWidth: '300px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof SwitchComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

const baseArgs: BaseSwitchProps = {
  children: "Enable notifications",
};

export const Default: Story = {
  args: {
    ...baseArgs,
  },
};

export const Selected: Story = {
  args: {
    ...baseArgs,
    defaultSelected: true,
  },
};

export const Disabled: Story = {
  args: {
    ...baseArgs,
    isDisabled: true,
  },
};

export const DisabledSelected: Story = {
  args: {
    ...baseArgs,
    children: "Auto-save enabled",
    isDisabled: true,
    defaultSelected: true,
  },
};

export const WithoutLabel: Story = {
  args: {
    "aria-label": "Toggle setting",
  },
};

export const AllStates: Story = {
  parameters: {
    layout: 'padded',
  },
  render: () => (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      padding: '20px'
    }}>
      <SwitchComponent>Default (Off)</SwitchComponent>
      <SwitchComponent defaultSelected>Selected (On)</SwitchComponent>
      <SwitchComponent isDisabled>Disabled (Off)</SwitchComponent>
      <SwitchComponent isDisabled defaultSelected>Disabled (On)</SwitchComponent>
    </div>
  ),
};
