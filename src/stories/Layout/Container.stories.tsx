import type { Meta, StoryObj } from "@storybook/nextjs";
import { TypographyComponent } from "../../components/DataDisplay/Typography/Typography";
import { ContainerComponent } from "../../components/Layout/Container/Container";

const meta = {
  component: ContainerComponent,
  title: "Layout/Container",
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ContainerComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

const DemoContent = () => (
  <div style={{ padding: '20px', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)' }}>
    <TypographyComponent variant="h4" gutterBottom>Container Content</TypographyComponent>
    <TypographyComponent>
      This content is centered and constrained by the container's max-width.
    </TypographyComponent>
  </div>
);

export const Default: Story = {
  render: () => (
    <ContainerComponent>
      <DemoContent />
    </ContainerComponent>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <ContainerComponent maxWidth="xs">
        <TypographyComponent variant="caption">XS Container (444px)</TypographyComponent>
        <DemoContent />
      </ContainerComponent>
      <ContainerComponent maxWidth="sm">
        <TypographyComponent variant="caption">SM Container (600px)</TypographyComponent>
        <DemoContent />
      </ContainerComponent>
      <ContainerComponent maxWidth="md">
        <TypographyComponent variant="caption">MD Container (900px)</TypographyComponent>
        <DemoContent />
      </ContainerComponent>
      <ContainerComponent maxWidth="lg">
        <TypographyComponent variant="caption">LG Container (1200px)</TypographyComponent>
        <DemoContent />
      </ContainerComponent>
    </div>
  ),
};

export const NoGutters: Story = {
  render: () => (
    <ContainerComponent disableGutters>
      <DemoContent />
    </ContainerComponent>
  ),
};
