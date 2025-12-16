import type { Meta, StoryObj } from "@storybook/nextjs";
import { ButtonGroupComponent, ButtonGroupItem } from "../../components/Buttons/ButtonGroup/ButtonGroup";

const meta = {
  component: ButtonGroupComponent,
  title: "Buttons/ButtonGroup",
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ButtonGroupComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <ButtonGroupComponent>
      <ButtonGroupItem>One</ButtonGroupItem>
      <ButtonGroupItem>Two</ButtonGroupItem>
      <ButtonGroupItem>Three</ButtonGroupItem>
    </ButtonGroupComponent>
  ),
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <p>Contained</p>
        <ButtonGroupComponent variant="contained">
          <ButtonGroupItem>One</ButtonGroupItem>
          <ButtonGroupItem>Two</ButtonGroupItem>
          <ButtonGroupItem>Three</ButtonGroupItem>
        </ButtonGroupComponent>
      </div>
      <div>
        <p>Outlined</p>
        <ButtonGroupComponent variant="outlined">
          <ButtonGroupItem>One</ButtonGroupItem>
          <ButtonGroupItem>Two</ButtonGroupItem>
          <ButtonGroupItem>Three</ButtonGroupItem>
        </ButtonGroupComponent>
      </div>
      <div>
        <p>Text</p>
        <ButtonGroupComponent variant="text">
          <ButtonGroupItem>One</ButtonGroupItem>
          <ButtonGroupItem>Two</ButtonGroupItem>
          <ButtonGroupItem>Three</ButtonGroupItem>
        </ButtonGroupComponent>
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'flex-start' }}>
      <ButtonGroupComponent size="small">
        <ButtonGroupItem>Small</ButtonGroupItem>
        <ButtonGroupItem>Small</ButtonGroupItem>
        <ButtonGroupItem>Small</ButtonGroupItem>
      </ButtonGroupComponent>
      <ButtonGroupComponent size="medium">
        <ButtonGroupItem>Medium</ButtonGroupItem>
        <ButtonGroupItem>Medium</ButtonGroupItem>
        <ButtonGroupItem>Medium</ButtonGroupItem>
      </ButtonGroupComponent>
      <ButtonGroupComponent size="large">
        <ButtonGroupItem>Large</ButtonGroupItem>
        <ButtonGroupItem>Large</ButtonGroupItem>
        <ButtonGroupItem>Large</ButtonGroupItem>
      </ButtonGroupComponent>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <ButtonGroupComponent orientation="vertical">
      <ButtonGroupItem>One</ButtonGroupItem>
      <ButtonGroupItem>Two</ButtonGroupItem>
      <ButtonGroupItem>Three</ButtonGroupItem>
    </ButtonGroupComponent>
  ),
};

export const FullWidth: Story = {
  render: () => (
    <ButtonGroupComponent fullWidth>
      <ButtonGroupItem>One</ButtonGroupItem>
      <ButtonGroupItem>Two</ButtonGroupItem>
      <ButtonGroupItem>Three</ButtonGroupItem>
    </ButtonGroupComponent>
  ),
};

export const Disabled: Story = {
  render: () => (
    <ButtonGroupComponent disabled>
      <ButtonGroupItem>One</ButtonGroupItem>
      <ButtonGroupItem>Two</ButtonGroupItem>
      <ButtonGroupItem>Three</ButtonGroupItem>
    </ButtonGroupComponent>
  ),
};
