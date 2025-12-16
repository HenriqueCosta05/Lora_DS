import type { Meta, StoryObj } from "@storybook/nextjs";
import { LinkComponent } from "../../components/Navigation/Link/Link";

const meta = {
  component: LinkComponent,
  title: "Navigation/Link",
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LinkComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Click me",
    href: "#",
  },
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <LinkComponent href="#" color="primary">Primary Link</LinkComponent>
      <LinkComponent href="#" color="secondary">Secondary Link</LinkComponent>
      <LinkComponent href="#" color="inherit">Inherit Link</LinkComponent>
    </div>
  ),
};

export const Underline: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <LinkComponent href="#" underline="none">No underline</LinkComponent>
      <LinkComponent href="#" underline="hover">Underline on hover</LinkComponent>
      <LinkComponent href="#" underline="always">Always underlined</LinkComponent>
    </div>
  ),
};

export const ButtonVariant: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <LinkComponent href="#" variant="button" color="primary">Button Link</LinkComponent>
      <LinkComponent href="#" variant="button" color="secondary">Secondary</LinkComponent>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <LinkComponent href="#">
        <span>→</span>
        Link with icon
      </LinkComponent>
      <LinkComponent href="#">
        External link
        <span>↗</span>
      </LinkComponent>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    children: "Disabled Link",
    href: "#",
    isDisabled: true,
  },
};
