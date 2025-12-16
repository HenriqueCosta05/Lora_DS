import type { Meta, StoryObj } from "@storybook/nextjs";
import { useState } from "react";
import { PaginationComponent } from "../../components/Navigation/Pagination/Pagination";

const meta = {
  component: PaginationComponent,
  title: "Navigation/Pagination",
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaginationComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [page, setPage] = useState(1);
    return (
      <div>
        <p>Current page: {page}</p>
        <PaginationComponent count={10} page={page} onChange={setPage} />
      </div>
    );
  },
};

export const WithFirstLast: Story = {
  render: () => {
    const [page, setPage] = useState(1);
    return (
      <div>
        <p>Current page: {page}</p>
        <PaginationComponent
          count={10}
          page={page}
          onChange={setPage}
          showFirstButton
          showLastButton
        />
      </div>
    );
  },
};

export const LargeCount: Story = {
  render: () => {
    const [page, setPage] = useState(1);
    return (
      <div>
        <p>Current page: {page}</p>
        <PaginationComponent
          count={100}
          page={page}
          onChange={setPage}
          showFirstButton
          showLastButton
        />
      </div>
    );
  },
};

export const CustomSiblings: Story = {
  render: () => {
    const [page, setPage] = useState(5);
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <div>
          <p>Sibling count: 0</p>
          <PaginationComponent count={10} page={page} onChange={setPage} siblingCount={0} />
        </div>
        <div>
          <p>Sibling count: 2</p>
          <PaginationComponent count={10} page={page} onChange={setPage} siblingCount={2} />
        </div>
      </div>
    );
  },
};

export const Disabled: Story = {
  render: () => {
    const [page, setPage] = useState(5);
    return (
      <PaginationComponent count={10} page={page} onChange={setPage} disabled />
    );
  },
};
