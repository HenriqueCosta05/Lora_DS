import type { Meta, StoryObj } from "@storybook/nextjs";
import { BreadcrumbComponent, BreadcrumbLinkComponent, BreadcrumbsComponent } from "../../components/Navigation/Breadcrumbs/Breadcrumbs";

const meta = {
  component: BreadcrumbsComponent,
  title: "Navigation/Breadcrumbs",
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BreadcrumbsComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: null },
  render: () => (
    <BreadcrumbsComponent>
      <BreadcrumbComponent>
        <BreadcrumbLinkComponent href="/">Home</BreadcrumbLinkComponent>
      </BreadcrumbComponent>
      <BreadcrumbComponent>
        <BreadcrumbLinkComponent href="/products">Products</BreadcrumbLinkComponent>
      </BreadcrumbComponent>
      <BreadcrumbComponent>
        <BreadcrumbLinkComponent>Electronics</BreadcrumbLinkComponent>
      </BreadcrumbComponent>
    </BreadcrumbsComponent>
  ),
};

export const LongPath: Story = {
  args: { children: null },
  render: () => (
    <BreadcrumbsComponent>
      <BreadcrumbComponent>
        <BreadcrumbLinkComponent href="/">Home</BreadcrumbLinkComponent>
      </BreadcrumbComponent>
      <BreadcrumbComponent>
        <BreadcrumbLinkComponent href="/category">Category</BreadcrumbLinkComponent>
      </BreadcrumbComponent>
      <BreadcrumbComponent>
        <BreadcrumbLinkComponent href="/category/subcategory">Subcategory</BreadcrumbLinkComponent>
      </BreadcrumbComponent>
      <BreadcrumbComponent>
        <BreadcrumbLinkComponent href="/category/subcategory/item">Item</BreadcrumbLinkComponent>
      </BreadcrumbComponent>
      <BreadcrumbComponent>
        <BreadcrumbLinkComponent>Details</BreadcrumbLinkComponent>
      </BreadcrumbComponent>
    </BreadcrumbsComponent>
  ),
};

export const WithIcons: Story = {
  args: { children: null },
  render: () => (
    <BreadcrumbsComponent>
      <BreadcrumbComponent>
        <BreadcrumbLinkComponent href="/">
          <span style={{ marginRight: '4px' }}>🏠</span>
          Home
        </BreadcrumbLinkComponent>
      </BreadcrumbComponent>
      <BreadcrumbComponent>
        <BreadcrumbLinkComponent href="/documents">
          <span style={{ marginRight: '4px' }}>📁</span>
          Documents
        </BreadcrumbLinkComponent>
      </BreadcrumbComponent>
      <BreadcrumbComponent>
        <BreadcrumbLinkComponent>
          <span style={{ marginRight: '4px' }}>📄</span>
          File
        </BreadcrumbLinkComponent>
      </BreadcrumbComponent>
    </BreadcrumbsComponent>
  ),
};
