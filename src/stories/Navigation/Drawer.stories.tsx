import { Icon } from "@iconify-icon/react";
import type { Meta, StoryObj } from "@storybook/nextjs";
import { useState } from "react";
import { ButtonComponent } from "../../components/Buttons/Button/Button";
import { DividerComponent } from "../../components/DataDisplay/Divider/Divider";
import { TypographyComponent } from "../../components/DataDisplay/Typography/Typography";
import { DrawerComponent } from "../../components/Navigation/Drawer/Drawer";

const meta = {
  component: DrawerComponent,
  title: "Navigation/Drawer",
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DrawerComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

const DrawerContent = ({ onClose }: { onClose: () => void }) => (
  <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px', height: '100%' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <TypographyComponent variant="h5">Menu</TypographyComponent>
      <ButtonComponent variant="text" onPress={onClose}>
        <Icon icon="mdi:close" width="24" height="24" />
      </ButtonComponent>
    </div>
    <DividerComponent />
    <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <ButtonComponent variant="text" style={{ justifyContent: 'flex-start' }}>
        <Icon icon="mdi:home" width="20" height="20" style={{ marginRight: '12px' }} />
        Home
      </ButtonComponent>
      <ButtonComponent variant="text" style={{ justifyContent: 'flex-start' }}>
        <Icon icon="mdi:account" width="20" height="20" style={{ marginRight: '12px' }} />
        Profile
      </ButtonComponent>
      <ButtonComponent variant="text" style={{ justifyContent: 'flex-start' }}>
        <Icon icon="mdi:cog" width="20" height="20" style={{ marginRight: '12px' }} />
        Settings
      </ButtonComponent>
      <ButtonComponent variant="text" style={{ justifyContent: 'flex-start' }}>
        <Icon icon="mdi:logout" width="20" height="20" style={{ marginRight: '12px' }} />
        Logout
      </ButtonComponent>
    </nav>
  </div>
);

export const Left: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <div style={{ padding: '24px' }}>
        <ButtonComponent onPress={() => setOpen(true)}>Open Left Drawer</ButtonComponent>
        <DrawerComponent open={open} onClose={() => setOpen(false)} anchor="left">
          <DrawerContent onClose={() => setOpen(false)} />
        </DrawerComponent>
      </div>
    );
  },
};

export const Right: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <div style={{ padding: '24px' }}>
        <ButtonComponent onPress={() => setOpen(true)}>Open Right Drawer</ButtonComponent>
        <DrawerComponent open={open} onClose={() => setOpen(false)} anchor="right">
          <DrawerContent onClose={() => setOpen(false)} />
        </DrawerComponent>
      </div>
    );
  },
};

export const Top: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <div style={{ padding: '24px' }}>
        <ButtonComponent onPress={() => setOpen(true)}>Open Top Drawer</ButtonComponent>
        <DrawerComponent open={open} onClose={() => setOpen(false)} anchor="top">
          <DrawerContent onClose={() => setOpen(false)} />
        </DrawerComponent>
      </div>
    );
  },
};

export const Bottom: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <div style={{ padding: '24px' }}>
        <ButtonComponent onPress={() => setOpen(true)}>Open Bottom Drawer</ButtonComponent>
        <DrawerComponent open={open} onClose={() => setOpen(false)} anchor="bottom">
          <DrawerContent onClose={() => setOpen(false)} />
        </DrawerComponent>
      </div>
    );
  },
};
