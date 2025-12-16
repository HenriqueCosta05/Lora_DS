import { Icon } from "@iconify-icon/react";
import type { Meta, StoryObj } from "@storybook/nextjs";
import { InputGroupComponent, InputGroupField } from "../../components/Forms/InputGroup/InputGroup";

const meta = {
  component: InputGroupComponent,
  title: "Forms/InputGroup",
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof InputGroupComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <InputGroupComponent label="Email">
      <InputGroupField placeholder="Enter your email" />
    </InputGroupComponent>
  ),
};

export const WithStartAdornment: Story = {
  render: () => (
    <InputGroupComponent
      label="Email"
      startAdornment={<Icon icon="mdi:email" width="20" height="20" />}
    >
      <InputGroupField placeholder="Enter your email" />
    </InputGroupComponent>
  ),
};

export const WithEndAdornment: Story = {
  render: () => (
    <InputGroupComponent
      label="Password"
      endAdornment={<Icon icon="mdi:eye" width="20" height="20" />}
    >
      <InputGroupField placeholder="Enter your password" />
    </InputGroupComponent>
  ),
};

export const WithBothAdornments: Story = {
  render: () => (
    <InputGroupComponent
      label="Amount"
      startAdornment={<span>$</span>}
      endAdornment={<span>USD</span>}
    >
      <InputGroupField placeholder="0.00" />
    </InputGroupComponent>
  ),
};

export const WithHelperText: Story = {
  render: () => (
    <InputGroupComponent
      label="Username"
      helperText="Choose a unique username"
      startAdornment={<Icon icon="mdi:account" width="20" height="20" />}
    >
      <InputGroupField placeholder="Enter username" />
    </InputGroupComponent>
  ),
};

export const WithError: Story = {
  render: () => (
    <InputGroupComponent
      label="Email"
      error
      errorMessage="Please enter a valid email address"
      startAdornment={<Icon icon="mdi:email" width="20" height="20" />}
    >
      <InputGroupField placeholder="Enter your email" />
    </InputGroupComponent>
  ),
};

export const Multiple: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <InputGroupComponent
        label="Search"
        startAdornment={<Icon icon="mdi:magnify" width="20" height="20" />}
      >
        <InputGroupField placeholder="Search..." />
      </InputGroupComponent>
      <InputGroupComponent
        label="Phone"
        startAdornment={<span>+1</span>}
      >
        <InputGroupField placeholder="(555) 000-0000" />
      </InputGroupComponent>
      <InputGroupComponent
        label="Website"
        startAdornment={<span>https://</span>}
      >
        <InputGroupField placeholder="example.com" />
      </InputGroupComponent>
    </div>
  ),
};
