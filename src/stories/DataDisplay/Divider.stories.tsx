import type { Meta, StoryObj } from "@storybook/nextjs";
import { DividerComponent } from "../../components/DataDisplay/Divider/Divider";
import { TypographyComponent } from "../../components/DataDisplay/Typography/Typography";

const meta = {
  component: DividerComponent,
  title: "Data Display/Divider",
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DividerComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  render: () => (
    <div>
      <TypographyComponent>Content above divider</TypographyComponent>
      <DividerComponent />
      <TypographyComponent>Content below divider</TypographyComponent>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', height: '60px' }}>
      <TypographyComponent>Left content</TypographyComponent>
      <DividerComponent orientation="vertical" />
      <TypographyComponent>Right content</TypographyComponent>
    </div>
  ),
};

export const Inset: Story = {
  render: () => (
    <div>
      <TypographyComponent>Content above</TypographyComponent>
      <DividerComponent variant="inset" />
      <TypographyComponent>Content below with inset divider</TypographyComponent>
    </div>
  ),
};

export const Middle: Story = {
  render: () => (
    <div>
      <TypographyComponent>Content above</TypographyComponent>
      <DividerComponent variant="middle" />
      <TypographyComponent>Content below with middle divider</TypographyComponent>
    </div>
  ),
};

export const InList: Story = {
  render: () => (
    <div style={{ border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
      <div style={{ padding: '12px 16px' }}>
        <TypographyComponent variant="subtitle1">Item 1</TypographyComponent>
      </div>
      <DividerComponent />
      <div style={{ padding: '12px 16px' }}>
        <TypographyComponent variant="subtitle1">Item 2</TypographyComponent>
      </div>
      <DividerComponent />
      <div style={{ padding: '12px 16px' }}>
        <TypographyComponent variant="subtitle1">Item 3</TypographyComponent>
      </div>
    </div>
  ),
};
