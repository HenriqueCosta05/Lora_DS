import type { Meta, StoryObj } from "@storybook/nextjs";
import { AvatarComponent } from "../../components/DataDisplay/Avatar/Avatar";
import { BadgeComponent } from "../../components/DataDisplay/Badge/Badge";

const meta = {
  component: BadgeComponent,
  title: "Data Display/Badge",
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BadgeComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

const MailIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

export const WithNumbers: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
      <BadgeComponent badgeContent={4}>
        <MailIcon />
      </BadgeComponent>
      <BadgeComponent badgeContent={99}>
        <MailIcon />
      </BadgeComponent>
      <BadgeComponent badgeContent={150} max={99}>
        <MailIcon />
      </BadgeComponent>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '32px', alignItems: 'center', flexWrap: 'wrap' }}>
      <BadgeComponent badgeContent={5} color="default"><MailIcon /></BadgeComponent>
      <BadgeComponent badgeContent={5} color="primary"><MailIcon /></BadgeComponent>
      <BadgeComponent badgeContent={5} color="secondary"><MailIcon /></BadgeComponent>
      <BadgeComponent badgeContent={5} color="success"><MailIcon /></BadgeComponent>
      <BadgeComponent badgeContent={5} color="error"><MailIcon /></BadgeComponent>
      <BadgeComponent badgeContent={5} color="warning"><MailIcon /></BadgeComponent>
      <BadgeComponent badgeContent={5} color="info"><MailIcon /></BadgeComponent>
    </div>
  ),
};

export const DotVariant: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
      <BadgeComponent variant="dot" color="primary">
        <MailIcon />
      </BadgeComponent>
      <BadgeComponent variant="dot" color="success">
        <AvatarComponent src="https://i.pravatar.cc/150?img=10" />
      </BadgeComponent>
      <BadgeComponent variant="dot" color="error">
        <MailIcon />
      </BadgeComponent>
    </div>
  ),
};

export const Positions: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '32px', alignItems: 'center', flexWrap: 'wrap' }}>
      <BadgeComponent badgeContent={3} position="top-right">
        <MailIcon />
      </BadgeComponent>
      <BadgeComponent badgeContent={3} position="top-left">
        <MailIcon />
      </BadgeComponent>
      <BadgeComponent badgeContent={3} position="bottom-right">
        <MailIcon />
      </BadgeComponent>
      <BadgeComponent badgeContent={3} position="bottom-left">
        <MailIcon />
      </BadgeComponent>
    </div>
  ),
};

export const WithAvatar: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
      <BadgeComponent badgeContent={5} color="error">
        <AvatarComponent src="https://i.pravatar.cc/150?img=11" />
      </BadgeComponent>
      <BadgeComponent variant="dot" color="success">
        <AvatarComponent>JD</AvatarComponent>
      </BadgeComponent>
    </div>
  ),
};

export const ShowZero: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
      <BadgeComponent badgeContent={0}>
        <MailIcon />
      </BadgeComponent>
      <BadgeComponent badgeContent={0} showZero>
        <MailIcon />
      </BadgeComponent>
    </div>
  ),
};
