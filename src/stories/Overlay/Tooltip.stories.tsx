import { TooltipTriggerComponent, TooltipComponent, TooltipButtonComponent } from "../../components/Overlay/Tooltip/Tooltip";
import { ButtonComponent } from "../../components/Buttons/Button/Button";
import type { Meta, StoryObj } from "@storybook/nextjs";

const meta = {
  component: TooltipTriggerComponent,
  title: "Overlay/Tooltip",
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ padding: '100px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof TooltipTriggerComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: null },
  render: () => (
    <TooltipTriggerComponent>
      <ButtonComponent>Hover me</ButtonComponent>
      <TooltipComponent>This is a helpful tooltip</TooltipComponent>
    </TooltipTriggerComponent>
  ),
};

export const TopPlacement: Story = {
  args: { children: null },
  render: () => (
    <TooltipTriggerComponent>
      <ButtonComponent>Hover me</ButtonComponent>
      <TooltipComponent placement="top">Tooltip appears on top</TooltipComponent>
    </TooltipTriggerComponent>
  ),
};

export const BottomPlacement: Story = {
  args: { children: null },
  render: () => (
    <TooltipTriggerComponent>
      <ButtonComponent>Hover me</ButtonComponent>
      <TooltipComponent placement="bottom">Tooltip appears on bottom</TooltipComponent>
    </TooltipTriggerComponent>
  ),
};

export const LeftPlacement: Story = {
  args: { children: null },
  render: () => (
    <TooltipTriggerComponent>
      <ButtonComponent>Hover me</ButtonComponent>
      <TooltipComponent placement="left">Tooltip appears on left</TooltipComponent>
    </TooltipTriggerComponent>
  ),
};

export const RightPlacement: Story = {
  args: { children: null },
  render: () => (
    <TooltipTriggerComponent>
      <ButtonComponent>Hover me</ButtonComponent>
      <TooltipComponent placement="right">Tooltip appears on right</TooltipComponent>
    </TooltipTriggerComponent>
  ),
};

export const LongText: Story = {
  args: { children: null },
  render: () => (
    <TooltipTriggerComponent>
      <ButtonComponent>Hover me</ButtonComponent>
      <TooltipComponent>
        This is a longer tooltip with more information that might span multiple lines to provide detailed context to the user.
      </TooltipComponent>
    </TooltipTriggerComponent>
  ),
};

export const WithDelay: Story = {
  args: { children: null },
  render: () => (
    <TooltipTriggerComponent delay={500}>
      <ButtonComponent>Hover me</ButtonComponent>
      <TooltipComponent>This tooltip appears after 500ms delay</TooltipComponent>
    </TooltipTriggerComponent>
  ),
};

export const MultipleTooltips: Story = {
  args: { children: null },
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <TooltipTriggerComponent>
        <ButtonComponent>Save</ButtonComponent>
        <TooltipComponent>Save your changes</TooltipComponent>
      </TooltipTriggerComponent>
      
      <TooltipTriggerComponent>
        <ButtonComponent variant="secondary">Cancel</ButtonComponent>
        <TooltipComponent>Discard changes</TooltipComponent>
      </TooltipTriggerComponent>
      
      <TooltipTriggerComponent>
        <ButtonComponent>Delete</ButtonComponent>
        <TooltipComponent>Remove this item permanently</TooltipComponent>
      </TooltipTriggerComponent>
    </div>
  ),
};

export const OnIcon: Story = {
  args: { children: null },
  render: () => (
    <TooltipTriggerComponent>
      <button style={{
        width: '40px',
        height: '40px',
        borderRadius: 'var(--radius-full)',
        border: '2px solid var(--border)',
        background: 'var(--surface)',
        color: 'var(--text)',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '20px'
      }}>
        ℹ️
      </button>
      <TooltipComponent>Click for more information</TooltipComponent>
    </TooltipTriggerComponent>
  ),
};
