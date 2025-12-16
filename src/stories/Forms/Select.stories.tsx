import type { Meta, StoryObj } from "@storybook/nextjs";
import { SelectComponent, SelectItemComponent } from "../../components/Forms/Select/Select";

const meta = {
  component: SelectComponent,
  title: "Forms/Select",
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ padding: '20px', minWidth: '320px', minHeight: '400px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof SelectComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: null },
  render: () => (
    <SelectComponent label="Country">
      <SelectItemComponent id="us">United States</SelectItemComponent>
      <SelectItemComponent id="ca">Canada</SelectItemComponent>
      <SelectItemComponent id="mx">Mexico</SelectItemComponent>
      <SelectItemComponent id="uk">United Kingdom</SelectItemComponent>
      <SelectItemComponent id="fr">France</SelectItemComponent>
      <SelectItemComponent id="de">Germany</SelectItemComponent>
    </SelectComponent>
  ),
};

export const WithDescription: Story = {
  args: { children: null },
  render: () => (
    <SelectComponent
      label="Theme"
      description="Choose your preferred color scheme"
    >
      <SelectItemComponent id="light">Light</SelectItemComponent>
      <SelectItemComponent id="dark">Dark</SelectItemComponent>
      <SelectItemComponent id="auto">Auto</SelectItemComponent>
    </SelectComponent>
  ),
};

export const Required: Story = {
  args: { children: null },
  render: () => (
    <SelectComponent label="Size" isRequired>
      <SelectItemComponent id="xs">Extra Small</SelectItemComponent>
      <SelectItemComponent id="s">Small</SelectItemComponent>
      <SelectItemComponent id="m">Medium</SelectItemComponent>
      <SelectItemComponent id="l">Large</SelectItemComponent>
      <SelectItemComponent id="xl">Extra Large</SelectItemComponent>
    </SelectComponent>
  ),
};

export const WithError: Story = {
  args: { children: null },
  render: () => (
    <SelectComponent
      label="Payment method"
      errorMessage="Please select a payment method"
      isInvalid
    >
      <SelectItemComponent id="credit">Credit Card</SelectItemComponent>
      <SelectItemComponent id="debit">Debit Card</SelectItemComponent>
      <SelectItemComponent id="paypal">PayPal</SelectItemComponent>
    </SelectComponent>
  ),
};

export const Disabled: Story = {
  args: { children: null },
  render: () => (
    <SelectComponent label="Plan" isDisabled>
      <SelectItemComponent id="free">Free</SelectItemComponent>
      <SelectItemComponent id="pro">Pro</SelectItemComponent>
      <SelectItemComponent id="enterprise">Enterprise</SelectItemComponent>
    </SelectComponent>
  ),
};

export const DisabledOption: Story = {
  args: { children: null },
  render: () => (
    <SelectComponent label="Delivery time">
      <SelectItemComponent id="morning">Morning (8-12)</SelectItemComponent>
      <SelectItemComponent id="afternoon">Afternoon (12-17)</SelectItemComponent>
      <SelectItemComponent id="evening" isDisabled>Evening (17-21) - Unavailable</SelectItemComponent>
    </SelectComponent>
  ),
};

export const DefaultSelected: Story = {
  args: { children: null },
  render: () => (
    <SelectComponent label="Language" defaultSelectedKey="en">
      <SelectItemComponent id="en">English</SelectItemComponent>
      <SelectItemComponent id="es">Spanish</SelectItemComponent>
      <SelectItemComponent id="fr">French</SelectItemComponent>
      <SelectItemComponent id="de">German</SelectItemComponent>
    </SelectComponent>
  ),
};

export const ManyOptions: Story = {
  args: { children: null },
  render: () => (
    <SelectComponent label="State">
      <SelectItemComponent id="al">Alabama</SelectItemComponent>
      <SelectItemComponent id="ak">Alaska</SelectItemComponent>
      <SelectItemComponent id="az">Arizona</SelectItemComponent>
      <SelectItemComponent id="ar">Arkansas</SelectItemComponent>
      <SelectItemComponent id="ca">California</SelectItemComponent>
      <SelectItemComponent id="co">Colorado</SelectItemComponent>
      <SelectItemComponent id="ct">Connecticut</SelectItemComponent>
      <SelectItemComponent id="de">Delaware</SelectItemComponent>
      <SelectItemComponent id="fl">Florida</SelectItemComponent>
      <SelectItemComponent id="ga">Georgia</SelectItemComponent>
      <SelectItemComponent id="hi">Hawaii</SelectItemComponent>
      <SelectItemComponent id="id">Idaho</SelectItemComponent>
    </SelectComponent>
  ),
};
