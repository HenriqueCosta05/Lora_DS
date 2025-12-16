import type { Meta, StoryObj } from "@storybook/nextjs";
import { ListBoxComponent, ListBoxItemComponent } from "../../components/DataDisplay/ListBox/ListBox";

const meta = {
  component: ListBoxComponent,
  title: "Data Display/ListBox",
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ListBoxComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: null },
  render: () => (
    <ListBoxComponent>
      <ListBoxItemComponent>Option 1</ListBoxItemComponent>
      <ListBoxItemComponent>Option 2</ListBoxItemComponent>
      <ListBoxItemComponent>Option 3</ListBoxItemComponent>
      <ListBoxItemComponent>Option 4</ListBoxItemComponent>
      <ListBoxItemComponent>Option 5</ListBoxItemComponent>
    </ListBoxComponent>
  ),
};

export const WithSelection: Story = {
  args: { children: null },
  render: () => (
    <ListBoxComponent selectionMode="single" defaultSelectedKeys={["2"]}>
      <ListBoxItemComponent id="1">Inbox</ListBoxItemComponent>
      <ListBoxItemComponent id="2">Sent</ListBoxItemComponent>
      <ListBoxItemComponent id="3">Drafts</ListBoxItemComponent>
      <ListBoxItemComponent id="4">Spam</ListBoxItemComponent>
      <ListBoxItemComponent id="5">Trash</ListBoxItemComponent>
    </ListBoxComponent>
  ),
};

export const MultiSelect: Story = {
  args: { children: null },
  render: () => (
    <ListBoxComponent selectionMode="multiple" defaultSelectedKeys={["react", "next"]}>
      <ListBoxItemComponent id="react">React</ListBoxItemComponent>
      <ListBoxItemComponent id="next">Next.js</ListBoxItemComponent>
      <ListBoxItemComponent id="typescript">TypeScript</ListBoxItemComponent>
      <ListBoxItemComponent id="tailwind">Tailwind CSS</ListBoxItemComponent>
      <ListBoxItemComponent id="storybook">Storybook</ListBoxItemComponent>
    </ListBoxComponent>
  ),
};

export const WithDisabledItems: Story = {
  args: { children: null },
  render: () => (
    <ListBoxComponent selectionMode="single" disabledKeys={["3", "5"]}>
      <ListBoxItemComponent id="1">Available</ListBoxItemComponent>
      <ListBoxItemComponent id="2">Available</ListBoxItemComponent>
      <ListBoxItemComponent id="3">Disabled</ListBoxItemComponent>
      <ListBoxItemComponent id="4">Available</ListBoxItemComponent>
      <ListBoxItemComponent id="5">Disabled</ListBoxItemComponent>
    </ListBoxComponent>
  ),
};

export const LongList: Story = {
  args: { children: null },
  render: () => (
    <ListBoxComponent selectionMode="single">
      {Array.from({ length: 30 }, (_, i) => (
        <ListBoxItemComponent key={i + 1} id={String(i + 1)}>
          Item {i + 1}
        </ListBoxItemComponent>
      ))}
    </ListBoxComponent>
  ),
};

export const EmptyState: Story = {
  args: { children: null },
  render: () => (
    <ListBoxComponent renderEmptyState={() => (
      <div style={{ padding: '20px', textAlign: 'center', color: 'var(--text-secondary)' }}>
        No items available
      </div>
    )}>
      {[]}
    </ListBoxComponent>
  ),
};

export const WithSections: Story = {
  args: { children: null },
  render: () => (
    <ListBoxComponent selectionMode="single">
      <ListBoxItemComponent id="inbox">Inbox</ListBoxItemComponent>
      <ListBoxItemComponent id="sent">Sent</ListBoxItemComponent>
      <ListBoxItemComponent id="drafts">Drafts</ListBoxItemComponent>
      <ListBoxItemComponent id="archive">Archive</ListBoxItemComponent>
      <ListBoxItemComponent id="trash">Trash</ListBoxItemComponent>
    </ListBoxComponent>
  ),
};
