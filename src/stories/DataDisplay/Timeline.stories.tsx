import { Icon } from "@iconify-icon/react";
import type { Meta, StoryObj } from "@storybook/nextjs";
import { TimelineComponent } from "../../components/DataDisplay/Timeline/Timeline";

const meta = {
  component: TimelineComponent,
  title: "DataDisplay/Timeline",
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TimelineComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

const basicItems = [
  {
    title: 'Project started',
    description: 'Initial setup and planning phase',
    time: '9:00 AM',
  },
  {
    title: 'Design review',
    description: 'Team reviewed the design mockups',
    time: '10:30 AM',
  },
  {
    title: 'Development begins',
    description: 'Started implementing core features',
    time: '2:00 PM',
  },
  {
    title: 'Testing phase',
    description: 'QA testing and bug fixes',
    time: '4:30 PM',
  },
];

const coloredItems = [
  {
    title: 'Account created',
    time: 'Jan 1, 2024',
    color: 'success' as const,
  },
  {
    title: 'Profile updated',
    time: 'Jan 5, 2024',
    color: 'info' as const,
  },
  {
    title: 'Warning issued',
    time: 'Jan 10, 2024',
    color: 'warning' as const,
  },
  {
    title: 'Account suspended',
    time: 'Jan 15, 2024',
    color: 'error' as const,
  },
];

const itemsWithIcons = [
  {
    title: 'Order placed',
    description: 'Your order has been placed successfully',
    time: '2 hours ago',
    icon: <Icon icon="mdi:cart" width="16" height="16" />,
    color: 'success' as const,
  },
  {
    title: 'Processing',
    description: 'Your order is being processed',
    time: '1 hour ago',
    icon: <Icon icon="mdi:cog" width="16" height="16" />,
    color: 'info' as const,
  },
  {
    title: 'Shipped',
    description: 'Your order has been shipped',
    time: '30 minutes ago',
    icon: <Icon icon="mdi:truck" width="16" height="16" />,
    color: 'primary' as const,
  },
];

export const Left: Story = {
  args: {
    items: basicItems,
    position: 'left',
  },
};

export const Right: Story = {
  args: {
    items: basicItems,
    position: 'right',
  },
};

export const Alternate: Story = {
  args: {
    items: basicItems,
    position: 'alternate',
  },
};

export const WithColors: Story = {
  args: {
    items: coloredItems,
    position: 'left',
  },
};

export const WithIcons: Story = {
  args: {
    items: itemsWithIcons,
    position: 'left',
  },
};
