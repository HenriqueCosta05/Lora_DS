import { ModalComponent, DialogComponent } from "../../components/Overlay/Modal/Modal";
import { ButtonComponent } from "../../components/Buttons/Button/Button";
import type { Meta, StoryObj } from "@storybook/nextjs";
import { useState } from "react";

const meta = {
  component: ModalComponent,
  title: "Overlay/Modal",
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ModalComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: null },
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
      <>
        <ButtonComponent onPress={() => setIsOpen(true)}>
          Open Modal
        </ButtonComponent>
        <ModalComponent isOpen={isOpen} onOpenChange={setIsOpen}>
          <DialogComponent title="Welcome">
            <p>This is a modal dialog. You can put any content here.</p>
          </DialogComponent>
        </ModalComponent>
      </>
    );
  },
};

export const WithLongContent: Story = {
  args: { children: null },
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
      <>
        <ButtonComponent onPress={() => setIsOpen(true)}>
          Open Modal
        </ButtonComponent>
        <ModalComponent isOpen={isOpen} onOpenChange={setIsOpen}>
          <DialogComponent title="Terms and Conditions">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
            <p>Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
          </DialogComponent>
        </ModalComponent>
      </>
    );
  },
};

export const WithActions: Story = {
  args: { children: null },
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
      <>
        <ButtonComponent onPress={() => setIsOpen(true)}>
          Delete Item
        </ButtonComponent>
        <ModalComponent isOpen={isOpen} onOpenChange={setIsOpen}>
          <DialogComponent title="Confirm Deletion">
            <p>Are you sure you want to delete this item? This action cannot be undone.</p>
            <div style={{ display: 'flex', gap: '12px', marginTop: '24px', justifyContent: 'flex-end' }}>
              <ButtonComponent variant="secondary" onPress={() => setIsOpen(false)}>
                Cancel
              </ButtonComponent>
              <ButtonComponent onPress={() => setIsOpen(false)}>
                Delete
              </ButtonComponent>
            </div>
          </DialogComponent>
        </ModalComponent>
      </>
    );
  },
};

export const WithoutTitle: Story = {
  args: { children: null },
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
      <>
        <ButtonComponent onPress={() => setIsOpen(true)}>
          Open Modal
        </ButtonComponent>
        <ModalComponent isOpen={isOpen} onOpenChange={setIsOpen}>
          <DialogComponent>
            <h2 style={{ margin: '0 0 16px', fontSize: '20px', fontWeight: 600 }}>Custom Content</h2>
            <p>This modal doesn't use the default title prop, allowing for custom content structure.</p>
          </DialogComponent>
        </ModalComponent>
      </>
    );
  },
};

export const NonDismissible: Story = {
  args: { children: null },
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
      <>
        <ButtonComponent onPress={() => setIsOpen(true)}>
          Open Modal
        </ButtonComponent>
        <ModalComponent isOpen={isOpen} onOpenChange={setIsOpen} isDismissable={false}>
          <DialogComponent title="Important">
            <p>This modal cannot be dismissed by clicking outside or pressing Escape.</p>
            <p>You must use the close button or the button below.</p>
            <div style={{ marginTop: '24px' }}>
              <ButtonComponent onPress={() => setIsOpen(false)}>
                Close
              </ButtonComponent>
            </div>
          </DialogComponent>
        </ModalComponent>
      </>
    );
  },
};
