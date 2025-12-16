import type { Meta, StoryObj } from "@storybook/nextjs";
import { ProgressComponent } from "../../components/Feedback/Progress/Progress";

const meta = {
  component: ProgressComponent,
  title: "Feedback/Progress",
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ProgressComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Linear: Story = {
  args: {
    label: "Loading",
    value: 60,
    showValue: true,
  },
};

export const Circular: Story = {
  args: {
    variant: "circular",
    value: 75,
    showValue: true,
  },
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <ProgressComponent label="Primary" value={60} color="primary" showValue />
      <ProgressComponent label="Secondary" value={70} color="secondary" showValue />
      <ProgressComponent label="Success" value={100} color="success" showValue />
      <ProgressComponent label="Error" value={30} color="error" showValue />
      <ProgressComponent label="Warning" value={50} color="warning" showValue />
      <ProgressComponent label="Info" value={80} color="info" showValue />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <ProgressComponent label="Small" value={60} size="small" />
      <ProgressComponent label="Medium" value={60} size="medium" />
      <ProgressComponent label="Large" value={60} size="large" />
    </div>
  ),
};

export const CircularSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
      <ProgressComponent variant="circular" value={60} size="small" showValue />
      <ProgressComponent variant="circular" value={75} size="medium" showValue />
      <ProgressComponent variant="circular" value={90} size="large" showValue />
    </div>
  ),
};

export const Indeterminate: Story = {
  args: {
    label: "Loading",
    isIndeterminate: true,
  },
};
