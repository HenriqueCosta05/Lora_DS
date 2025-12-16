import type { Meta, StoryObj } from "@storybook/nextjs";
import { AvatarComponent } from "../../components/DataDisplay/Avatar/Avatar";

const meta = {
  component: AvatarComponent,
  title: "Data Display/Avatar",
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AvatarComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithImage: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <AvatarComponent src="https://i.pravatar.cc/150?img=1" alt="User 1" />
      <AvatarComponent src="https://i.pravatar.cc/150?img=2" alt="User 2" />
      <AvatarComponent src="https://i.pravatar.cc/150?img=3" alt="User 3" />
    </div>
  ),
};

export const WithInitials: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <AvatarComponent>John Doe</AvatarComponent>
      <AvatarComponent>Jane Smith</AvatarComponent>
      <AvatarComponent>Alice Brown</AvatarComponent>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <AvatarComponent size="small">JD</AvatarComponent>
      <AvatarComponent size="medium">JD</AvatarComponent>
      <AvatarComponent size="large">JD</AvatarComponent>
      <AvatarComponent size="xlarge">JD</AvatarComponent>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <AvatarComponent variant="circular" src="https://i.pravatar.cc/150?img=4" />
      <AvatarComponent variant="rounded" src="https://i.pravatar.cc/150?img=5" />
      <AvatarComponent variant="square" src="https://i.pravatar.cc/150?img=6" />
    </div>
  ),
};

export const Fallback: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <AvatarComponent src="invalid-url.jpg" alt="Fallback" />
      <AvatarComponent />
    </div>
  ),
};

export const Group: Story = {
  render: () => (
    <div style={{ display: 'flex', marginLeft: '0' }}>
      <AvatarComponent src="https://i.pravatar.cc/150?img=7" style={{ marginLeft: '-8px', border: '2px solid var(--background)' }} />
      <AvatarComponent src="https://i.pravatar.cc/150?img=8" style={{ marginLeft: '-8px', border: '2px solid var(--background)' }} />
      <AvatarComponent src="https://i.pravatar.cc/150?img=9" style={{ marginLeft: '-8px', border: '2px solid var(--background)' }} />
      <AvatarComponent style={{ marginLeft: '-8px', border: '2px solid var(--background)' }}>+5</AvatarComponent>
    </div>
  ),
};
