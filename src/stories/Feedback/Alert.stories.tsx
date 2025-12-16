import type { Meta, StoryObj } from "@storybook/nextjs";
import { AlertComponent } from "../../components/Feedback/Alert/Alert";

const meta = {
  component: AlertComponent,
  title: "Feedback/Alert",
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AlertComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <AlertComponent severity="success">This is a success alert</AlertComponent>
      <AlertComponent severity="info">This is an info alert</AlertComponent>
      <AlertComponent severity="warning">This is a warning alert</AlertComponent>
      <AlertComponent severity="error">This is an error alert</AlertComponent>
    </div>
  ),
};

export const Filled: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <AlertComponent variant="filled" severity="success">This is a success alert</AlertComponent>
      <AlertComponent variant="filled" severity="info">This is an info alert</AlertComponent>
      <AlertComponent variant="filled" severity="warning">This is a warning alert</AlertComponent>
      <AlertComponent variant="filled" severity="error">This is an error alert</AlertComponent>
    </div>
  ),
};

export const Outlined: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <AlertComponent variant="outlined" severity="success">This is a success alert</AlertComponent>
      <AlertComponent variant="outlined" severity="info">This is an info alert</AlertComponent>
      <AlertComponent variant="outlined" severity="warning">This is a warning alert</AlertComponent>
      <AlertComponent variant="outlined" severity="error">This is an error alert</AlertComponent>
    </div>
  ),
};

export const WithTitle: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <AlertComponent severity="success" title="Success">
        Your changes have been saved successfully
      </AlertComponent>
      <AlertComponent severity="error" title="Error">
        Something went wrong. Please try again
      </AlertComponent>
    </div>
  ),
};

export const WithClose: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <AlertComponent severity="info" onClose={() => alert('Closed')}>
        This alert can be closed
      </AlertComponent>
      <AlertComponent severity="warning" title="Warning" onClose={() => alert('Closed')}>
        Please review your information before continuing
      </AlertComponent>
    </div>
  ),
};

export const LongContent: Story = {
  render: () => (
    <AlertComponent severity="info" title="Information">
      This is a longer alert message that contains multiple lines of text to demonstrate how the alert component handles longer content. The alert should grow to accommodate the content while maintaining proper spacing and alignment of all elements including the icon and close button.
    </AlertComponent>
  ),
};
