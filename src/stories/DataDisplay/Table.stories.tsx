import type { Meta, StoryObj } from "@storybook/nextjs";
import { CellComponent, ColumnComponent, RowComponent, TableBodyComponent, TableComponent, TableHeaderComponent } from "../../components/DataDisplay/Table/Table";

const meta = {
  component: TableComponent,
  title: "Data Display/Table",
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TableComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
}

const users: User[] = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Active' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User', status: 'Inactive' },
  { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'Editor', status: 'Active' },
  { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', role: 'User', status: 'Active' },
];

export const Default: Story = {
  args: { children: null },
  render: () => (
    <TableComponent aria-label="Users table">
      <TableHeaderComponent>
        <ColumnComponent>Name</ColumnComponent>
        <ColumnComponent>Email</ColumnComponent>
        <ColumnComponent>Role</ColumnComponent>
        <ColumnComponent>Status</ColumnComponent>
      </TableHeaderComponent>
      <TableBodyComponent>
        {users.map(user => (
          <RowComponent key={user.id}>
            <CellComponent>{user.name}</CellComponent>
            <CellComponent>{user.email}</CellComponent>
            <CellComponent>{user.role}</CellComponent>
            <CellComponent>{user.status}</CellComponent>
          </RowComponent>
        ))}
      </TableBodyComponent>
    </TableComponent>
  ),
};

export const WithSorting: Story = {
  args: { children: null },
  render: () => (
    <TableComponent aria-label="Sortable users table">
      <TableHeaderComponent>
        <ColumnComponent isRowHeader allowsSorting>Name</ColumnComponent>
        <ColumnComponent allowsSorting>Email</ColumnComponent>
        <ColumnComponent allowsSorting>Role</ColumnComponent>
        <ColumnComponent allowsSorting>Status</ColumnComponent>
      </TableHeaderComponent>
      <TableBodyComponent>
        {users.map(user => (
          <RowComponent key={user.id}>
            <CellComponent>{user.name}</CellComponent>
            <CellComponent>{user.email}</CellComponent>
            <CellComponent>{user.role}</CellComponent>
            <CellComponent>{user.status}</CellComponent>
          </RowComponent>
        ))}
      </TableBodyComponent>
    </TableComponent>
  ),
};

export const WithSelection: Story = {
  args: { children: null },
  render: () => (
    <TableComponent aria-label="Selectable users table" selectionMode="multiple">
      <TableHeaderComponent>
        <ColumnComponent isRowHeader>Name</ColumnComponent>
        <ColumnComponent>Email</ColumnComponent>
        <ColumnComponent>Role</ColumnComponent>
        <ColumnComponent>Status</ColumnComponent>
      </TableHeaderComponent>
      <TableBodyComponent>
        {users.map(user => (
          <RowComponent key={user.id} id={String(user.id)}>
            <CellComponent>{user.name}</CellComponent>
            <CellComponent>{user.email}</CellComponent>
            <CellComponent>{user.role}</CellComponent>
            <CellComponent>{user.status}</CellComponent>
          </RowComponent>
        ))}
      </TableBodyComponent>
    </TableComponent>
  ),
};

export const WithDisabledRows: Story = {
  args: { children: null },
  render: () => (
    <TableComponent aria-label="Users table with disabled rows" selectionMode="multiple" disabledKeys={["3", "5"]}>
      <TableHeaderComponent>
        <ColumnComponent isRowHeader>Name</ColumnComponent>
        <ColumnComponent>Email</ColumnComponent>
        <ColumnComponent>Role</ColumnComponent>
        <ColumnComponent>Status</ColumnComponent>
      </TableHeaderComponent>
      <TableBodyComponent>
        {users.map(user => (
          <RowComponent key={user.id} id={String(user.id)}>
            <CellComponent>{user.name}</CellComponent>
            <CellComponent>{user.email}</CellComponent>
            <CellComponent>{user.role}</CellComponent>
            <CellComponent>{user.status}</CellComponent>
          </RowComponent>
        ))}
      </TableBodyComponent>
    </TableComponent>
  ),
};

export const Compact: Story = {
  args: { children: null },
  render: () => (
    <div style={{ fontSize: '13px' }}>
      <TableComponent aria-label="Compact users table">
        <TableHeaderComponent>
          <ColumnComponent>Name</ColumnComponent>
          <ColumnComponent>Email</ColumnComponent>
          <ColumnComponent>Role</ColumnComponent>
        </TableHeaderComponent>
        <TableBodyComponent>
          {users.map(user => (
            <RowComponent key={user.id}>
              <CellComponent>{user.name}</CellComponent>
              <CellComponent>{user.email}</CellComponent>
              <CellComponent>{user.role}</CellComponent>
            </RowComponent>
          ))}
        </TableBodyComponent>
      </TableComponent>
    </div>
  ),
};

export const EmptyState: Story = {
  args: { children: null },
  render: () => (
    <TableComponent aria-label="Empty table">
      <TableHeaderComponent>
        <ColumnComponent>Name</ColumnComponent>
        <ColumnComponent>Email</ColumnComponent>
        <ColumnComponent>Role</ColumnComponent>
      </TableHeaderComponent>
      <TableBodyComponent renderEmptyState={() => (
        <div style={{ padding: '40px', textAlign: 'center', color: 'var(--text-secondary)' }}>
          No users found
        </div>
      )}>
        {[]}
      </TableBodyComponent>
    </TableComponent>
  ),
};
