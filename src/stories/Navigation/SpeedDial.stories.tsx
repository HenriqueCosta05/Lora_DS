import { Icon } from "@iconify-icon/react";
import type { Meta, StoryObj } from "@storybook/nextjs";
import { SpeedDialComponent } from "../../components/Navigation/SpeedDial/SpeedDial";

const meta = {
  component: SpeedDialComponent,
  title: "Navigation/SpeedDial",
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SpeedDialComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultActions = [
  {
    id: 'copy',
    icon: <Icon icon="mdi:content-copy" width={20} height={20} />,
    label: 'Copy',
    onClick: () => alert('Copy clicked'),
  },
  {
    id: 'save',
    icon: <Icon icon="mdi:content-save" width={20} height={20} />,
    label: 'Save',
    onClick: () => alert('Save clicked'),
  },
  {
    id: 'print',
    icon: <Icon icon="mdi:printer" width={20} height={20} />,
    label: 'Print',
    onClick: () => alert('Print clicked'),
  },
  {
    id: 'share',
    icon: <Icon icon="mdi:share-variant" width={20} height={20} />,
    label: 'Share',
    onClick: () => alert('Share clicked'),
  },
];

export const Default: Story = {
  args: {
    actions: defaultActions,
  },
};

export const DirectionUp: Story = {
  args: {
    actions: defaultActions,
    direction: 'up',
  },
};

export const DirectionDown: Story = {
  args: {
    actions: defaultActions,
    direction: 'down',
  },
};

export const DirectionLeft: Story = {
  args: {
    actions: defaultActions,
    direction: 'left',
  },
};

export const DirectionRight: Story = {
  args: {
    actions: defaultActions,
    direction: 'right',
  },
};

export const CustomIcons: Story = {
  args: {
    actions: defaultActions,
    icon: <Icon icon="mdi:menu" width={24} height={24} />,
    openIcon: <Icon icon="mdi:menu-open" width={24} height={24} />,
  },
};

export const EmailActions: Story = {
  args: {
    actions: [
      {
        id: 'compose',
        icon: <Icon icon="mdi:email-edit" width={20} height={20} />,
        label: 'Compose',
        onClick: () => alert('Compose email'),
      },
      {
        id: 'inbox',
        icon: <Icon icon="mdi:email" width={20} height={20} />,
        label: 'Inbox',
        onClick: () => alert('Open inbox'),
      },
      {
        id: 'drafts',
        icon: <Icon icon="mdi:email-outline" width={20} height={20} />,
        label: 'Drafts',
        onClick: () => alert('Open drafts'),
      },
    ],
    icon: <Icon icon="mdi:email-plus" width={24} height={24} />,
  },
};

export const FileActions: Story = {
  args: {
    actions: [
      {
        id: 'upload',
        icon: <Icon icon="mdi:upload" width={20} height={20} />,
        label: 'Upload File',
        onClick: () => alert('Upload file'),
      },
      {
        id: 'folder',
        icon: <Icon icon="mdi:folder-plus" width={20} height={20} />,
        label: 'New Folder',
        onClick: () => alert('Create folder'),
      },
      {
        id: 'document',
        icon: <Icon icon="mdi:file-document-plus" width={20} height={20} />,
        label: 'New Document',
        onClick: () => alert('Create document'),
      },
    ],
    icon: <Icon icon="mdi:plus-circle" width={24} height={24} />,
  },
};

export const ManyActions: Story = {
  args: {
    actions: [
      {
        id: '1',
        icon: <Icon icon="mdi:numeric-1-circle" width={20} height={20} />,
        label: 'Action 1',
      },
      {
        id: '2',
        icon: <Icon icon="mdi:numeric-2-circle" width={20} height={20} />,
        label: 'Action 2',
      },
      {
        id: '3',
        icon: <Icon icon="mdi:numeric-3-circle" width={20} height={20} />,
        label: 'Action 3',
      },
      {
        id: '4',
        icon: <Icon icon="mdi:numeric-4-circle" width={20} height={20} />,
        label: 'Action 4',
      },
      {
        id: '5',
        icon: <Icon icon="mdi:numeric-5-circle" width={20} height={20} />,
        label: 'Action 5',
      },
      {
        id: '6',
        icon: <Icon icon="mdi:numeric-6-circle" width={20} height={20} />,
        label: 'Action 6',
      },
    ],
  },
};
