import { MenuTriggerComponent, MenuButtonComponent, MenuComponent, MenuItemComponent, MenuSeparatorComponent } from "../../components/Navigation/Menu/Menu";
import type { Meta, StoryObj } from "@storybook/nextjs";

const meta = {
  component: MenuTriggerComponent,
  title: "Navigation/Menu",
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ padding: '20px', minHeight: '400px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof MenuTriggerComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: null },
  render: () => (
    <MenuTriggerComponent>
      <MenuButtonComponent>Actions</MenuButtonComponent>
      <MenuComponent>
        <MenuItemComponent id="edit">Edit</MenuItemComponent>
        <MenuItemComponent id="duplicate">Duplicate</MenuItemComponent>
        <MenuItemComponent id="delete">Delete</MenuItemComponent>
      </MenuComponent>
    </MenuTriggerComponent>
  ),
};

export const WithSeparators: Story = {
  args: { children: null },
  render: () => (
    <MenuTriggerComponent>
      <MenuButtonComponent>Options</MenuButtonComponent>
      <MenuComponent>
        <MenuItemComponent id="new">New File</MenuItemComponent>
        <MenuItemComponent id="open">Open File</MenuItemComponent>
        <MenuSeparatorComponent />
        <MenuItemComponent id="save">Save</MenuItemComponent>
        <MenuItemComponent id="saveAs">Save As...</MenuItemComponent>
        <MenuSeparatorComponent />
        <MenuItemComponent id="close">Close</MenuItemComponent>
      </MenuComponent>
    </MenuTriggerComponent>
  ),
};

export const WithDisabledItems: Story = {
  args: { children: null },
  render: () => (
    <MenuTriggerComponent>
      <MenuButtonComponent>Edit</MenuButtonComponent>
      <MenuComponent>
        <MenuItemComponent id="cut">Cut</MenuItemComponent>
        <MenuItemComponent id="copy">Copy</MenuItemComponent>
        <MenuItemComponent id="paste" isDisabled>Paste (Nothing to paste)</MenuItemComponent>
        <MenuSeparatorComponent />
        <MenuItemComponent id="undo">Undo</MenuItemComponent>
        <MenuItemComponent id="redo" isDisabled>Redo</MenuItemComponent>
      </MenuComponent>
    </MenuTriggerComponent>
  ),
};

export const WithIcons: Story = {
  args: { children: null },
  render: () => (
    <MenuTriggerComponent>
      <MenuButtonComponent>File</MenuButtonComponent>
      <MenuComponent>
        <MenuItemComponent id="new">
          <span>📄</span>
          <span>New</span>
        </MenuItemComponent>
        <MenuItemComponent id="open">
          <span>📂</span>
          <span>Open</span>
        </MenuItemComponent>
        <MenuItemComponent id="save">
          <span>💾</span>
          <span>Save</span>
        </MenuItemComponent>
        <MenuSeparatorComponent />
        <MenuItemComponent id="settings">
          <span>⚙️</span>
          <span>Settings</span>
        </MenuItemComponent>
      </MenuComponent>
    </MenuTriggerComponent>
  ),
};

export const LongList: Story = {
  args: { children: null },
  render: () => (
    <MenuTriggerComponent>
      <MenuButtonComponent>Select Country</MenuButtonComponent>
      <MenuComponent>
        <MenuItemComponent id="us">United States</MenuItemComponent>
        <MenuItemComponent id="ca">Canada</MenuItemComponent>
        <MenuItemComponent id="mx">Mexico</MenuItemComponent>
        <MenuItemComponent id="uk">United Kingdom</MenuItemComponent>
        <MenuItemComponent id="fr">France</MenuItemComponent>
        <MenuItemComponent id="de">Germany</MenuItemComponent>
        <MenuItemComponent id="it">Italy</MenuItemComponent>
        <MenuItemComponent id="es">Spain</MenuItemComponent>
        <MenuItemComponent id="br">Brazil</MenuItemComponent>
        <MenuItemComponent id="ar">Argentina</MenuItemComponent>
        <MenuItemComponent id="jp">Japan</MenuItemComponent>
        <MenuItemComponent id="cn">China</MenuItemComponent>
        <MenuItemComponent id="in">India</MenuItemComponent>
        <MenuItemComponent id="au">Australia</MenuItemComponent>
      </MenuComponent>
    </MenuTriggerComponent>
  ),
};

export const ContextMenu: Story = {
  args: { children: null },
  render: () => (
    <MenuTriggerComponent>
      <MenuButtonComponent>Right Click Menu</MenuButtonComponent>
      <MenuComponent>
        <MenuItemComponent id="view">View Details</MenuItemComponent>
        <MenuItemComponent id="share">Share</MenuItemComponent>
        <MenuItemComponent id="download">Download</MenuItemComponent>
        <MenuSeparatorComponent />
        <MenuItemComponent id="rename">Rename</MenuItemComponent>
        <MenuItemComponent id="move">Move to...</MenuItemComponent>
        <MenuSeparatorComponent />
        <MenuItemComponent id="delete">Delete</MenuItemComponent>
      </MenuComponent>
    </MenuTriggerComponent>
  ),
};
