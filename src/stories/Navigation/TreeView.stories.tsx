import type { Meta, StoryObj } from "@storybook/nextjs";
import { useState } from "react";
import { TreeViewComponent } from "../../components/Navigation/TreeView/TreeView";
import { TreeNode } from "../../components/Navigation/TreeView/TreeView.interface";

const meta = {
  component: TreeViewComponent,
  title: "Navigation/TreeView",
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TreeViewComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

const fileSystemData: TreeNode[] = [
  {
    id: '1',
    label: 'Documents',
    icon: '📁',
    children: [
      { id: '1-1', label: 'Resume.pdf', icon: '📄' },
      { id: '1-2', label: 'Cover Letter.docx', icon: '📄' },
      {
        id: '1-3',
        label: 'Projects',
        icon: '📁',
        children: [
          { id: '1-3-1', label: 'Project A', icon: '📄' },
          { id: '1-3-2', label: 'Project B', icon: '📄' },
        ],
      },
    ],
  },
  {
    id: '2',
    label: 'Pictures',
    icon: '📁',
    children: [
      { id: '2-1', label: 'Vacation.jpg', icon: '🖼️' },
      { id: '2-2', label: 'Family.png', icon: '🖼️' },
    ],
  },
  { id: '3', label: 'Music', icon: '📁' },
];

const organizationData: TreeNode[] = [
  {
    id: 'ceo',
    label: 'CEO',
    children: [
      {
        id: 'cto',
        label: 'CTO',
        children: [
          {
            id: 'eng',
            label: 'Engineering',
            children: [
              { id: 'frontend', label: 'Frontend Team' },
              { id: 'backend', label: 'Backend Team' },
            ],
          },
          { id: 'qa', label: 'Quality Assurance' },
        ],
      },
      {
        id: 'cfo',
        label: 'CFO',
        children: [
          { id: 'accounting', label: 'Accounting' },
          { id: 'finance', label: 'Finance' },
        ],
      },
      {
        id: 'cmo',
        label: 'CMO',
        children: [
          { id: 'marketing', label: 'Marketing' },
          { id: 'sales', label: 'Sales' },
        ],
      },
    ],
  },
];

export const Default: Story = {
  args: {
    data: fileSystemData,
  },
};

export const DefaultExpanded: Story = {
  args: {
    data: fileSystemData,
    defaultExpandedKeys: ['1', '1-3'],
  },
};

export const Controlled: Story = {
  render: () => {
    const [selectedKey, setSelectedKey] = useState<string>('1-1');
    return (
      <div style={{ width: '400px' }}>
        <TreeViewComponent
          data={fileSystemData}
          selectedKey={selectedKey}
          onSelectionChange={setSelectedKey}
          defaultExpandedKeys={['1']}
        />
        <p style={{ marginTop: '16px', fontSize: '14px', color: 'var(--text-secondary)' }}>
          Selected: {selectedKey || 'None'}
        </p>
      </div>
    );
  },
};

export const Organization: Story = {
  args: {
    data: organizationData,
    defaultExpandedKeys: ['ceo', 'cto'],
  },
};

export const DeepNesting: Story = {
  args: {
    data: [
      {
        id: '1',
        label: 'Level 1',
        children: [
          {
            id: '1-1',
            label: 'Level 2',
            children: [
              {
                id: '1-1-1',
                label: 'Level 3',
                children: [
                  {
                    id: '1-1-1-1',
                    label: 'Level 4',
                    children: [
                      { id: '1-1-1-1-1', label: 'Level 5' },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
    defaultExpandedKeys: ['1', '1-1', '1-1-1', '1-1-1-1'],
  },
};

export const ManyItems: Story = {
  args: {
    data: [
      {
        id: 'root',
        label: 'Root',
        children: Array.from({ length: 20 }, (_, i) => ({
          id: `item-${i}`,
          label: `Item ${i + 1}`,
        })),
      },
    ],
    defaultExpandedKeys: ['root'],
  },
};
