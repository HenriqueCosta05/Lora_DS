import type { Meta, StoryObj } from "@storybook/nextjs";
import { RadioComponent, RadioGroupComponent } from "../../components/Forms/RadioGroup/RadioGroup";

const meta = {
  component: RadioGroupComponent,
  title: "Forms/RadioGroup",
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ padding: '20px', minWidth: '320px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof RadioGroupComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: null },
  render: () => (
    <RadioGroupComponent label="Favorite color">
      <RadioComponent value="red">Red</RadioComponent>
      <RadioComponent value="blue">Blue</RadioComponent>
      <RadioComponent value="green">Green</RadioComponent>
    </RadioGroupComponent>
  ),
};

export const WithDescription: Story = {
  args: { children: null },
  render: () => (
    <RadioGroupComponent
      label="Notification preference"
      description="Choose how you want to receive notifications"
    >
      <RadioComponent value="email">Email</RadioComponent>
      <RadioComponent value="sms">SMS</RadioComponent>
      <RadioComponent value="push">Push notifications</RadioComponent>
    </RadioGroupComponent>
  ),
};

export const Required: Story = {
  args: { children: null },
  render: () => (
    <RadioGroupComponent label="Payment method" isRequired>
      <RadioComponent value="credit">Credit Card</RadioComponent>
      <RadioComponent value="debit">Debit Card</RadioComponent>
      <RadioComponent value="paypal">PayPal</RadioComponent>
    </RadioGroupComponent>
  ),
};

export const WithError: Story = {
  args: { children: null },
  render: () => (
    <RadioGroupComponent
      label="Shipping method"
      errorMessage="Please select a shipping method"
      isInvalid
    >
      <RadioComponent value="standard">Standard (5-7 days)</RadioComponent>
      <RadioComponent value="express">Express (2-3 days)</RadioComponent>
      <RadioComponent value="overnight">Overnight</RadioComponent>
    </RadioGroupComponent>
  ),
};

export const Horizontal: Story = {
  args: { children: null },
  render: () => (
    <RadioGroupComponent label="Size" orientation="horizontal">
      <RadioComponent value="xs">XS</RadioComponent>
      <RadioComponent value="s">S</RadioComponent>
      <RadioComponent value="m">M</RadioComponent>
      <RadioComponent value="l">L</RadioComponent>
      <RadioComponent value="xl">XL</RadioComponent>
    </RadioGroupComponent>
  ),
};

export const Disabled: Story = {
  args: { children: null },
  render: () => (
    <RadioGroupComponent label="Subscription plan" isDisabled>
      <RadioComponent value="free">Free</RadioComponent>
      <RadioComponent value="pro">Pro</RadioComponent>
      <RadioComponent value="enterprise">Enterprise</RadioComponent>
    </RadioGroupComponent>
  ),
};

export const DisabledOption: Story = {
  args: { children: null },
  render: () => (
    <RadioGroupComponent label="Delivery time">
      <RadioComponent value="morning">Morning (8-12)</RadioComponent>
      <RadioComponent value="afternoon">Afternoon (12-17)</RadioComponent>
      <RadioComponent value="evening" isDisabled>Evening (17-21) - Unavailable</RadioComponent>
    </RadioGroupComponent>
  ),
};

export const DefaultSelected: Story = {
  args: { children: null },
  render: () => (
    <RadioGroupComponent label="Theme" defaultValue="dark">
      <RadioComponent value="light">Light</RadioComponent>
      <RadioComponent value="dark">Dark</RadioComponent>
      <RadioComponent value="auto">Auto</RadioComponent>
    </RadioGroupComponent>
  ),
};

export const AllStates: Story = {
  args: { children: null },
  parameters: {
    layout: 'padded',
  },
  render: () => (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '32px',
      padding: '20px'
    }}>
      <RadioGroupComponent label="Default">
        <RadioComponent value="option1">Option 1</RadioComponent>
        <RadioComponent value="option2">Option 2</RadioComponent>
      </RadioGroupComponent>

      <RadioGroupComponent label="With Description" description="Select one option">
        <RadioComponent value="option1">Option 1</RadioComponent>
        <RadioComponent value="option2">Option 2</RadioComponent>
      </RadioGroupComponent>

      <RadioGroupComponent label="Required" isRequired>
        <RadioComponent value="option1">Option 1</RadioComponent>
        <RadioComponent value="option2">Option 2</RadioComponent>
      </RadioGroupComponent>

      <RadioGroupComponent label="With Error" errorMessage="Selection required" isInvalid>
        <RadioComponent value="option1">Option 1</RadioComponent>
        <RadioComponent value="option2">Option 2</RadioComponent>
      </RadioGroupComponent>

      <RadioGroupComponent label="Horizontal" orientation="horizontal">
        <RadioComponent value="option1">Option 1</RadioComponent>
        <RadioComponent value="option2">Option 2</RadioComponent>
        <RadioComponent value="option3">Option 3</RadioComponent>
      </RadioGroupComponent>
    </div>
  ),
};
