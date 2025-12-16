import type { Meta, StoryObj } from "@storybook/nextjs";
import { useState } from "react";
import { ButtonComponent } from "../../components/Buttons/Button/Button";
import { SnackbarComponent } from "../../components/Feedback/Snackbar/Snackbar";

const meta = {
  component: SnackbarComponent,
  title: "Feedback/Snackbar",
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SnackbarComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <div style={{ padding: '24px' }}>
        <ButtonComponent onPress={() => setOpen(true)}>Show Snackbar</ButtonComponent>
        <SnackbarComponent
          open={open}
          message="This is a default snackbar message"
          onClose={() => setOpen(false)}
        />
      </div>
    );
  },
};

export const Positions: Story = {
  render: () => {
    const [position, setPosition] = useState<string>('');
    return (
      <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <ButtonComponent onPress={() => setPosition('top-left')}>Top Left</ButtonComponent>
        <ButtonComponent onPress={() => setPosition('top-center')}>Top Center</ButtonComponent>
        <ButtonComponent onPress={() => setPosition('top-right')}>Top Right</ButtonComponent>
        <ButtonComponent onPress={() => setPosition('bottom-left')}>Bottom Left</ButtonComponent>
        <ButtonComponent onPress={() => setPosition('bottom-center')}>Bottom Center</ButtonComponent>
        <ButtonComponent onPress={() => setPosition('bottom-right')}>Bottom Right</ButtonComponent>
        <SnackbarComponent
          open={!!position}
          message={`Snackbar at ${position}`}
          position={position as any}
          onClose={() => setPosition('')}
        />
      </div>
    );
  },
};

export const Severities: Story = {
  render: () => {
    const [severity, setSeverity] = useState<string>('');
    return (
      <div style={{ padding: '24px', display: 'flex', gap: '12px' }}>
        <ButtonComponent onPress={() => setSeverity('success')}>Success</ButtonComponent>
        <ButtonComponent onPress={() => setSeverity('info')}>Info</ButtonComponent>
        <ButtonComponent onPress={() => setSeverity('warning')}>Warning</ButtonComponent>
        <ButtonComponent onPress={() => setSeverity('error')}>Error</ButtonComponent>
        <SnackbarComponent
          open={!!severity}
          message={`This is a ${severity} message`}
          severity={severity as any}
          onClose={() => setSeverity('')}
        />
      </div>
    );
  },
};

export const AutoHide: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <div style={{ padding: '24px' }}>
        <ButtonComponent onPress={() => setOpen(true)}>Show Auto-hide Snackbar</ButtonComponent>
        <SnackbarComponent
          open={open}
          message="This will automatically close after 3 seconds"
          severity="info"
          autoHideDuration={3000}
          onClose={() => setOpen(false)}
        />
      </div>
    );
  },
};

export const WithAction: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <div style={{ padding: '24px' }}>
        <ButtonComponent onPress={() => setOpen(true)}>Show Snackbar with Action</ButtonComponent>
        <SnackbarComponent
          open={open}
          message="Email sent successfully"
          severity="success"
          action={
            <ButtonComponent variant="text" size="small" onPress={() => alert('Undo clicked')}>
              Undo
            </ButtonComponent>
          }
          onClose={() => setOpen(false)}
        />
      </div>
    );
  },
};
