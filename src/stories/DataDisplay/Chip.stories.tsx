import type { Meta, StoryObj } from "@storybook/nextjs";
import { ChipComponent, ChipGroupComponent } from "../../components/DataDisplay/Chip/Chip";

const meta = {
  component: ChipComponent,
  title: "Data Display/Chip",
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ChipComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: null },
  render: () => (
    <ChipGroupComponent>
      <ChipComponent id="1">Default</ChipComponent>
      <ChipComponent id="2">Chip 2</ChipComponent>
      <ChipComponent id="3">Chip 3</ChipComponent>
    </ChipGroupComponent>
  ),
};

export const Colors: Story = {
  args: { children: null },
  render: () => (
    <ChipGroupComponent>
      <ChipComponent id="default" color="default">Default</ChipComponent>
      <ChipComponent id="primary" color="primary">Primary</ChipComponent>
      <ChipComponent id="secondary" color="secondary">Secondary</ChipComponent>
      <ChipComponent id="success" color="success">Success</ChipComponent>
      <ChipComponent id="error" color="error">Error</ChipComponent>
      <ChipComponent id="warning" color="warning">Warning</ChipComponent>
      <ChipComponent id="info" color="info">Info</ChipComponent>
    </ChipGroupComponent>
  ),
};

export const Outlined: Story = {
  args: { children: null },
  render: () => (
    <ChipGroupComponent>
      <ChipComponent id="default" variant="outlined">Default</ChipComponent>
      <ChipComponent id="primary" variant="outlined" color="primary">Primary</ChipComponent>
      <ChipComponent id="secondary" variant="outlined" color="secondary">Secondary</ChipComponent>
      <ChipComponent id="success" variant="outlined" color="success">Success</ChipComponent>
      <ChipComponent id="error" variant="outlined" color="error">Error</ChipComponent>
    </ChipGroupComponent>
  ),
};

export const Sizes: Story = {
  args: { children: null },
  render: () => (
    <ChipGroupComponent>
      <ChipComponent id="small" size="small" color="primary">Small</ChipComponent>
      <ChipComponent id="medium" size="medium" color="primary">Medium</ChipComponent>
    </ChipGroupComponent>
  ),
};

export const WithGroup: Story = {
  args: { children: null },
  render: () => (
    <ChipGroupComponent label="Categories" selectionMode="multiple">
      <ChipComponent id="tech">Technology</ChipComponent>
      <ChipComponent id="design">Design</ChipComponent>
      <ChipComponent id="business">Business</ChipComponent>
      <ChipComponent id="marketing">Marketing</ChipComponent>
    </ChipGroupComponent>
  ),
};

export const Removable: Story = {
  args: { children: null },
  render: () => (
    <ChipGroupComponent label="Tags">
      <ChipComponent id="react" color="primary">React</ChipComponent>
      <ChipComponent id="typescript" color="secondary">TypeScript</ChipComponent>
      <ChipComponent id="nextjs" color="success">Next.js</ChipComponent>
    </ChipGroupComponent>
  ),
};
