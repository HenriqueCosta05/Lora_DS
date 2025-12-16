import type { Meta, StoryObj } from "@storybook/nextjs";
import { TypographyComponent } from "../../components/DataDisplay/Typography/Typography";

const meta = {
  component: TypographyComponent,
  title: "Data Display/Typography",
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'body1', 'body2', 'subtitle1', 'subtitle2', 'caption', 'overline'],
    },
    align: {
      control: 'select',
      options: ['left', 'center', 'right', 'justify'],
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'text', 'error', 'success', 'warning', 'info'],
    },
  },
} satisfies Meta<typeof TypographyComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Headings: Story = {
  args: { children: null },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <TypographyComponent variant="h1">Heading 1</TypographyComponent>
      <TypographyComponent variant="h2">Heading 2</TypographyComponent>
      <TypographyComponent variant="h3">Heading 3</TypographyComponent>
      <TypographyComponent variant="h4">Heading 4</TypographyComponent>
      <TypographyComponent variant="h5">Heading 5</TypographyComponent>
      <TypographyComponent variant="h6">Heading 6</TypographyComponent>
    </div>
  ),
};

export const Body: Story = {
  args: { children: null },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '600px' }}>
      <TypographyComponent variant="body1">
        Body 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </TypographyComponent>
      <TypographyComponent variant="body2">
        Body 2: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </TypographyComponent>
    </div>
  ),
};

export const Subtitles: Story = {
  args: { children: null },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <TypographyComponent variant="subtitle1">Subtitle 1</TypographyComponent>
      <TypographyComponent variant="subtitle2">Subtitle 2</TypographyComponent>
    </div>
  ),
};

export const CaptionAndOverline: Story = {
  args: { children: null },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <TypographyComponent variant="overline">Overline text</TypographyComponent>
      <TypographyComponent variant="caption">Caption text with additional information</TypographyComponent>
    </div>
  ),
};

export const Colors: Story = {
  args: { children: null },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <TypographyComponent color="primary">Primary color text</TypographyComponent>
      <TypographyComponent color="secondary">Secondary color text</TypographyComponent>
      <TypographyComponent color="text">Default text color</TypographyComponent>
      <TypographyComponent color="error">Error color text</TypographyComponent>
      <TypographyComponent color="success">Success color text</TypographyComponent>
      <TypographyComponent color="warning">Warning color text</TypographyComponent>
      <TypographyComponent color="info">Info color text</TypographyComponent>
    </div>
  ),
};

export const Alignment: Story = {
  args: { children: null },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <TypographyComponent align="left">Left aligned text</TypographyComponent>
      <TypographyComponent align="center">Center aligned text</TypographyComponent>
      <TypographyComponent align="right">Right aligned text</TypographyComponent>
      <TypographyComponent align="justify">
        Justified text: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </TypographyComponent>
    </div>
  ),
};

export const NoWrap: Story = {
  args: { children: null },
  render: () => (
    <div style={{ maxWidth: '300px', border: '1px solid var(--border)', padding: '16px' }}>
      <TypographyComponent noWrap>
        This is a very long text that will be truncated with ellipsis when it exceeds the container width
      </TypographyComponent>
    </div>
  ),
};

export const GutterBottom: Story = {
  args: { children: null },
  render: () => (
    <div style={{ maxWidth: '600px' }}>
      <TypographyComponent variant="h3" gutterBottom>
        Article Title
      </TypographyComponent>
      <TypographyComponent variant="subtitle1" gutterBottom color="secondary">
        Subtitle with gutter spacing
      </TypographyComponent>
      <TypographyComponent variant="body1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </TypographyComponent>
    </div>
  ),
};

export const CustomComponent: Story = {
  args: { children: null },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <TypographyComponent variant="h4" component="div">
        H4 styling as div element
      </TypographyComponent>
      <TypographyComponent variant="body1" component="span">
        Body1 as span element
      </TypographyComponent>
    </div>
  ),
};
