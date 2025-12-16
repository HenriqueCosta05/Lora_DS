import { TextFieldComponent } from "../../components/Forms/TextField/TextField";
import { BaseTextFieldProps } from "../../components/Forms/TextField/TextField.interface";
import type { Meta, StoryObj } from "@storybook/nextjs";

const meta = {
  component: TextFieldComponent,
  title: "Forms/TextField",
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'tel', 'url', 'search']
    }
  }
} satisfies Meta<typeof TextFieldComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

const baseArgs: BaseTextFieldProps = {
  label: "Email",
  placeholder: "Enter your email",
};

export const Default: Story = {
  args: {
    ...baseArgs,
  },
};

export const WithDescription: Story = {
  args: {
    ...baseArgs,
    description: "We'll never share your email with anyone else.",
  },
};

export const Required: Story = {
  args: {
    ...baseArgs,
    isRequired: true,
  },
};

export const WithError: Story = {
  args: {
    ...baseArgs,
    errorMessage: "Please enter a valid email address.",
    isInvalid: true,
  },
};

export const Disabled: Story = {
  args: {
    ...baseArgs,
    isDisabled: true,
    value: "disabled@example.com",
  },
};

export const ReadOnly: Story = {
  args: {
    ...baseArgs,
    isReadOnly: true,
    value: "readonly@example.com",
  },
};

export const Password: Story = {
  args: {
    label: "Password",
    type: "password",
    placeholder: "Enter your password",
    isRequired: true,
  },
};

export const Search: Story = {
  args: {
    label: "Search",
    type: "search",
    placeholder: "Search...",
  },
};

export const FullWidth: Story = {
  args: {
    ...baseArgs,
    fullWidth: true,
  },
};

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '400px' }}>
      <TextFieldComponent label="Default" placeholder="Enter text" />
      <TextFieldComponent label="Required" placeholder="Enter text" isRequired />
      <TextFieldComponent label="With Description" placeholder="Enter text" description="Helper text goes here" />
      <TextFieldComponent label="With Error" placeholder="Enter text" errorMessage="This field is required" isInvalid />
      <TextFieldComponent label="Disabled" placeholder="Enter text" isDisabled value="Disabled value" />
      <TextFieldComponent label="Read Only" placeholder="Enter text" isReadOnly value="Read only value" />
    </div>
  ),
};
