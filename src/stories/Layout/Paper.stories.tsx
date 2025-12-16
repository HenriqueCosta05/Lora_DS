import type { Meta, StoryObj } from "@storybook/nextjs";
import { TypographyComponent } from "../../components/DataDisplay/Typography/Typography";
import { PaperComponent } from "../../components/Layout/Paper/Paper";

const meta = {
  component: PaperComponent,
  title: "Layout/Paper",
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaperComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Elevations: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      {[0, 1, 2, 3, 4, 6, 8].map((elevation) => (
        <PaperComponent key={elevation} elevation={elevation as any}>
          <TypographyComponent variant="subtitle2">Elevation {elevation}</TypographyComponent>
          <TypographyComponent variant="body2">Paper component with shadow</TypographyComponent>
        </PaperComponent>
      ))}
    </div>
  ),
};

export const Outlined: Story = {
  render: () => (
    <PaperComponent variant="outlined">
      <TypographyComponent variant="h6" gutterBottom>Outlined Paper</TypographyComponent>
      <TypographyComponent variant="body2">This paper has a border instead of shadow</TypographyComponent>
    </PaperComponent>
  ),
};

export const Square: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px' }}>
      <PaperComponent square elevation={2}>
        <TypographyComponent variant="subtitle2">Square Paper</TypographyComponent>
        <TypographyComponent variant="body2">No border radius</TypographyComponent>
      </PaperComponent>
      <PaperComponent elevation={2}>
        <TypographyComponent variant="subtitle2">Rounded Paper</TypographyComponent>
        <TypographyComponent variant="body2">Default border radius</TypographyComponent>
      </PaperComponent>
    </div>
  ),
};

export const Card: Story = {
  render: () => (
    <PaperComponent elevation={2} style={{ maxWidth: '300px' }}>
      <TypographyComponent variant="h5" gutterBottom>Card Title</TypographyComponent>
      <TypographyComponent variant="body2" gutterBottom>
        This is a card-like component using Paper. It can contain any content and has elevation for depth.
      </TypographyComponent>
      <div style={{ marginTop: '16px', display: 'flex', gap: '8px' }}>
        <button style={{ padding: '8px 16px', background: 'var(--primary)', color: 'white', border: 'none', borderRadius: 'var(--radius-md)', cursor: 'pointer' }}>
          Action
        </button>
        <button style={{ padding: '8px 16px', background: 'transparent', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', cursor: 'pointer' }}>
          Cancel
        </button>
      </div>
    </PaperComponent>
  ),
};
