import { CheckboxComponent } from "../../components/Forms/Checkbox/Checkbox";
import { BaseCheckboxProps } from "../../components/Forms/Checkbox/Checkbox.interface";
import type { Meta, StoryObj } from "@storybook/nextjs";

const meta = {
  component: CheckboxComponent,
  title: "Forms/Checkbox",
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
} satisfies Meta<typeof CheckboxComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

const baseArgs: BaseCheckboxProps = {
  children: "Accept terms and conditions",
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

export const Indeterminate: Story = {
  args: {
    ...baseArgs,
    children: "Select all items",
    isIndeterminate: true,
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
    isDisabled: true,
    defaultSelected: true,
  },
};

export const WithoutLabel: Story = {
  args: {
    "aria-label": "Select item",
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
      <CheckboxComponent>Default</CheckboxComponent>
      <CheckboxComponent defaultSelected>Selected</CheckboxComponent>
      <CheckboxComponent isIndeterminate>Indeterminate</CheckboxComponent>
      <CheckboxComponent isDisabled>Disabled</CheckboxComponent>
      <CheckboxComponent isDisabled defaultSelected>Disabled Selected</CheckboxComponent>
    </div>
  ),
};
