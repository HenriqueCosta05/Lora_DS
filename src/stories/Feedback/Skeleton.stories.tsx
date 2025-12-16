import type { Meta, StoryObj } from "@storybook/nextjs";
import { SkeletonComponent } from "../../components/Feedback/Skeleton/Skeleton";

const meta = {
  component: SkeletonComponent,
  title: "Feedback/Skeleton",
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SkeletonComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {
  render: () => (
    <div style={{ width: '300px' }}>
      <SkeletonComponent />
      <SkeletonComponent />
      <SkeletonComponent width="60%" />
    </div>
  ),
};

export const Circular: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px' }}>
      <SkeletonComponent variant="circular" width={40} height={40} />
      <SkeletonComponent variant="circular" width={56} height={56} />
      <SkeletonComponent variant="circular" width={80} height={80} />
    </div>
  ),
};

export const Rectangular: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <SkeletonComponent variant="rectangular" width="100%" height={200} />
      <SkeletonComponent variant="rectangular" width={300} height={150} />
    </div>
  ),
};

export const Rounded: Story = {
  render: () => (
    <SkeletonComponent variant="rounded" width="100%" height={200} />
  ),
};

export const Animations: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h4>Pulse</h4>
        <SkeletonComponent animation="pulse" width="100%" height={100} />
      </div>
      <div>
        <h4>Wave</h4>
        <SkeletonComponent animation="wave" width="100%" height={100} />
      </div>
      <div>
        <h4>No Animation</h4>
        <SkeletonComponent animation={false} width="100%" height={100} />
      </div>
    </div>
  ),
};

export const CardSkeleton: Story = {
  render: () => (
    <div style={{ width: '300px', padding: '16px', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)' }}>
      <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
        <SkeletonComponent variant="circular" width={40} height={40} />
        <div style={{ flex: 1 }}>
          <SkeletonComponent width="60%" />
          <SkeletonComponent width="40%" />
        </div>
      </div>
      <SkeletonComponent variant="rounded" width="100%" height={160} />
      <div style={{ marginTop: '16px' }}>
        <SkeletonComponent />
        <SkeletonComponent />
        <SkeletonComponent width="80%" />
      </div>
    </div>
  ),
};
