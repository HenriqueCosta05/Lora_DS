import type { Meta, StoryObj } from "@storybook/nextjs";
import { ButtonComponent } from "../../components/Buttons/Button/Button";
import { TextFieldComponent } from "../../components/Forms/TextField/TextField";
import { PopoverComponent, PopoverDialogComponent, PopoverTriggerComponent } from "../../components/Overlay/Popover/Popover";

const meta = {
  component: PopoverTriggerComponent,
  title: "Overlay/Popover",
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ padding: '150px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof PopoverTriggerComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: null },
  render: () => (
    <PopoverTriggerComponent>
      <ButtonComponent>Open Popover</ButtonComponent>
      <PopoverComponent>
        <PopoverDialogComponent>
          <h2>Popover Title</h2>
          <p>This is a popover with some content inside.</p>
        </PopoverDialogComponent>
      </PopoverComponent>
    </PopoverTriggerComponent>
  ),
};

export const TopPlacement: Story = {
  args: { children: null },
  render: () => (
    <PopoverTriggerComponent>
      <ButtonComponent>Open Above</ButtonComponent>
      <PopoverComponent placement="top">
        <PopoverDialogComponent>
          <h2>Top Popover</h2>
          <p>This popover appears above the trigger button.</p>
        </PopoverDialogComponent>
      </PopoverComponent>
    </PopoverTriggerComponent>
  ),
};

export const BottomPlacement: Story = {
  args: { children: null },
  render: () => (
    <PopoverTriggerComponent>
      <ButtonComponent>Open Below</ButtonComponent>
      <PopoverComponent placement="bottom">
        <PopoverDialogComponent>
          <h2>Bottom Popover</h2>
          <p>This popover appears below the trigger button.</p>
        </PopoverDialogComponent>
      </PopoverComponent>
    </PopoverTriggerComponent>
  ),
};

export const LeftPlacement: Story = {
  args: { children: null },
  render: () => (
    <PopoverTriggerComponent>
      <ButtonComponent>Open Left</ButtonComponent>
      <PopoverComponent placement="left">
        <PopoverDialogComponent>
          <h2>Left Popover</h2>
          <p>This popover appears to the left of the trigger button.</p>
        </PopoverDialogComponent>
      </PopoverComponent>
    </PopoverTriggerComponent>
  ),
};

export const RightPlacement: Story = {
  args: { children: null },
  render: () => (
    <PopoverTriggerComponent>
      <ButtonComponent>Open Right</ButtonComponent>
      <PopoverComponent placement="right">
        <PopoverDialogComponent>
          <h2>Right Popover</h2>
          <p>This popover appears to the right of the trigger button.</p>
        </PopoverDialogComponent>
      </PopoverComponent>
    </PopoverTriggerComponent>
  ),
};

export const WithForm: Story = {
  args: { children: null },
  render: () => (
    <PopoverTriggerComponent>
      <ButtonComponent>Edit Profile</ButtonComponent>
      <PopoverComponent>
        <PopoverDialogComponent>
          <h2>Edit Profile</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <TextFieldComponent label="Name" defaultValue="John Doe" />
            <TextFieldComponent label="Email" defaultValue="john@example.com" type="email" />
            <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end', marginTop: '8px' }}>
              <ButtonComponent variant="secondary" size="small">Cancel</ButtonComponent>
              <ButtonComponent size="small">Save</ButtonComponent>
            </div>
          </div>
        </PopoverDialogComponent>
      </PopoverComponent>
    </PopoverTriggerComponent>
  ),
};

export const LongContent: Story = {
  args: { children: null },
  render: () => (
    <PopoverTriggerComponent>
      <ButtonComponent>Show Details</ButtonComponent>
      <PopoverComponent>
        <PopoverDialogComponent>
          <h2>Long Content Example</h2>
          <p>
            This popover contains longer content to demonstrate how the component handles multiple paragraphs and scrolling if needed.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </PopoverDialogComponent>
      </PopoverComponent>
    </PopoverTriggerComponent>
  ),
};

export const WithCustomOffset: Story = {
  args: { children: null },
  render: () => (
    <PopoverTriggerComponent>
      <ButtonComponent>Open with Offset</ButtonComponent>
      <PopoverComponent offset={20}>
        <PopoverDialogComponent>
          <h2>Custom Offset</h2>
          <p>This popover has a larger offset (20px) from the trigger.</p>
        </PopoverDialogComponent>
      </PopoverComponent>
    </PopoverTriggerComponent>
  ),
};

export const NonModal: Story = {
  args: { children: null },
  render: () => (
    <div style={{ display: 'flex', gap: '16px' }}>
      <PopoverTriggerComponent>
        <ButtonComponent>First Popover</ButtonComponent>
        <PopoverComponent>
          <PopoverDialogComponent>
            <h2>Non-Modal</h2>
            <p>You can interact with other elements while this is open.</p>
          </PopoverDialogComponent>
        </PopoverComponent>
      </PopoverTriggerComponent>

      <PopoverTriggerComponent>
        <ButtonComponent variant="secondary">Second Popover</ButtonComponent>
        <PopoverComponent>
          <PopoverDialogComponent>
            <h2>Another One</h2>
            <p>Multiple popovers can be open simultaneously.</p>
          </PopoverDialogComponent>
        </PopoverComponent>
      </PopoverTriggerComponent>
    </div>
  ),
};
