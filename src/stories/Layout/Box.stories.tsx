import type { Meta, StoryObj } from "@storybook/nextjs";
import { BoxComponent } from "../../components/Layout/Box/Box";

const meta = {
  component: BoxComponent,
  title: "Layout/Box",
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BoxComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "This is a Box component",
    style: { padding: '16px', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)' }
  },
};

export const AsSection: Story = {
  args: {
    component: "section",
    children: "Box rendered as a section element",
    style: { padding: '16px', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)' }
  },
};

export const WithFlex: Story = {
  render: () => (
    <BoxComponent style={{ display: 'flex', gap: '16px', padding: '16px', background: 'var(--surface)', borderRadius: 'var(--radius-lg)' }}>
      <BoxComponent style={{ flex: 1, padding: '16px', background: 'var(--primary)', color: 'white', borderRadius: 'var(--radius-md)' }}>
        Item 1
      </BoxComponent>
      <BoxComponent style={{ flex: 1, padding: '16px', background: 'var(--secondary)', color: 'white', borderRadius: 'var(--radius-md)' }}>
        Item 2
      </BoxComponent>
      <BoxComponent style={{ flex: 1, padding: '16px', background: 'var(--info)', color: 'white', borderRadius: 'var(--radius-md)' }}>
        Item 3
      </BoxComponent>
    </BoxComponent>
  ),
};
