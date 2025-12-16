import type { Meta, StoryObj } from "@storybook/nextjs";
import { useState } from "react";
import { ButtonComponent } from "../../components/Buttons/Button/Button";
import { BackdropComponent } from "../../components/Feedback/Backdrop/Backdrop";

const meta = {
  component: BackdropComponent,
  title: "Feedback/Backdrop",
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BackdropComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <div style={{ padding: '24px' }}>
        <ButtonComponent onPress={() => setOpen(true)}>Show Backdrop</ButtonComponent>
        <BackdropComponent open={open} onClose={() => setOpen(false)} />
        {open && (
          <div style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'white',
            padding: '32px',
            borderRadius: 'var(--radius-lg)',
            zIndex: 1400
          }}>
            <h3>Content with Backdrop</h3>
            <p>Click outside to close</p>
          </div>
        )}
      </div>
    );
  },
};

export const Invisible: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <div style={{ padding: '24px' }}>
        <ButtonComponent onPress={() => setOpen(true)}>Show Invisible Backdrop</ButtonComponent>
        <BackdropComponent open={open} invisible onClose={() => setOpen(false)} />
        {open && (
          <div style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'white',
            padding: '32px',
            borderRadius: 'var(--radius-lg)',
            boxShadow: 'var(--shadow-xl)',
            zIndex: 1400
          }}>
            <h3>Content with Invisible Backdrop</h3>
            <p>Click outside to close (backdrop is invisible)</p>
          </div>
        )}
      </div>
    );
  },
};
