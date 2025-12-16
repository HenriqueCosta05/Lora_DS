import type { Meta, StoryObj } from "@storybook/nextjs";
import { TabComponent, TabListComponent, TabPanelComponent, TabsComponent } from "../../components/Navigation/Tabs/Tabs";

const meta = {
  component: TabsComponent,
  title: "Navigation/Tabs",
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ padding: '20px', minWidth: '600px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof TabsComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: null },
  render: () => (
    <TabsComponent>
      <TabListComponent>
        <TabComponent id="overview">Overview</TabComponent>
        <TabComponent id="details">Details</TabComponent>
        <TabComponent id="settings">Settings</TabComponent>
      </TabListComponent>
      <TabPanelComponent id="overview">
        <h3 style={{ margin: '0 0 12px', fontSize: '18px' }}>Overview</h3>
        <p style={{ margin: 0, lineHeight: 1.6 }}>
          This is the overview panel with general information about your project.
        </p>
      </TabPanelComponent>
      <TabPanelComponent id="details">
        <h3 style={{ margin: '0 0 12px', fontSize: '18px' }}>Details</h3>
        <p style={{ margin: 0, lineHeight: 1.6 }}>
          Here you can find detailed information and specifications.
        </p>
      </TabPanelComponent>
      <TabPanelComponent id="settings">
        <h3 style={{ margin: '0 0 12px', fontSize: '18px' }}>Settings</h3>
        <p style={{ margin: 0, lineHeight: 1.6 }}>
          Configure your preferences and application settings here.
        </p>
      </TabPanelComponent>
    </TabsComponent>
  ),
};

export const WithDefaultSelected: Story = {
  args: { children: null },
  render: () => (
    <TabsComponent defaultSelectedKey="details">
      <TabListComponent>
        <TabComponent id="home">Home</TabComponent>
        <TabComponent id="details">Details</TabComponent>
        <TabComponent id="contact">Contact</TabComponent>
      </TabListComponent>
      <TabPanelComponent id="home">
        <p style={{ margin: 0 }}>Home content goes here.</p>
      </TabPanelComponent>
      <TabPanelComponent id="details">
        <p style={{ margin: 0 }}>Details content is selected by default.</p>
      </TabPanelComponent>
      <TabPanelComponent id="contact">
        <p style={{ margin: 0 }}>Contact information here.</p>
      </TabPanelComponent>
    </TabsComponent>
  ),
};

export const WithDisabledTab: Story = {
  args: { children: null },
  render: () => (
    <TabsComponent>
      <TabListComponent>
        <TabComponent id="profile">Profile</TabComponent>
        <TabComponent id="billing">Billing</TabComponent>
        <TabComponent id="team" isDisabled>Team (Premium)</TabComponent>
      </TabListComponent>
      <TabPanelComponent id="profile">
        <p style={{ margin: 0 }}>Your profile information.</p>
      </TabPanelComponent>
      <TabPanelComponent id="billing">
        <p style={{ margin: 0 }}>Billing and subscription details.</p>
      </TabPanelComponent>
      <TabPanelComponent id="team">
        <p style={{ margin: 0 }}>Team management features.</p>
      </TabPanelComponent>
    </TabsComponent>
  ),
};

export const ManyTabs: Story = {
  args: { children: null },
  render: () => (
    <TabsComponent>
      <TabListComponent>
        <TabComponent id="dashboard">Dashboard</TabComponent>
        <TabComponent id="analytics">Analytics</TabComponent>
        <TabComponent id="reports">Reports</TabComponent>
        <TabComponent id="users">Users</TabComponent>
        <TabComponent id="settings">Settings</TabComponent>
        <TabComponent id="security">Security</TabComponent>
        <TabComponent id="integrations">Integrations</TabComponent>
      </TabListComponent>
      <TabPanelComponent id="dashboard">
        <p style={{ margin: 0 }}>Dashboard overview</p>
      </TabPanelComponent>
      <TabPanelComponent id="analytics">
        <p style={{ margin: 0 }}>Analytics and metrics</p>
      </TabPanelComponent>
      <TabPanelComponent id="reports">
        <p style={{ margin: 0 }}>Generate and view reports</p>
      </TabPanelComponent>
      <TabPanelComponent id="users">
        <p style={{ margin: 0 }}>User management</p>
      </TabPanelComponent>
      <TabPanelComponent id="settings">
        <p style={{ margin: 0 }}>Application settings</p>
      </TabPanelComponent>
      <TabPanelComponent id="security">
        <p style={{ margin: 0 }}>Security configurations</p>
      </TabPanelComponent>
      <TabPanelComponent id="integrations">
        <p style={{ margin: 0 }}>Third-party integrations</p>
      </TabPanelComponent>
    </TabsComponent>
  ),
};

export const WithRichContent: Story = {
  args: { children: null },
  render: () => (
    <TabsComponent>
      <TabListComponent>
        <TabComponent id="code">Code</TabComponent>
        <TabComponent id="preview">Preview</TabComponent>
        <TabComponent id="documentation">Documentation</TabComponent>
      </TabListComponent>
      <TabPanelComponent id="code">
        <div style={{ backgroundColor: 'var(--surface)', padding: '16px', borderRadius: 'var(--radius-md)', fontFamily: 'monospace' }}>
          <code>const greeting = "Hello, World!";</code><br />
          <code>console.log(greeting);</code>
        </div>
      </TabPanelComponent>
      <TabPanelComponent id="preview">
        <div style={{ padding: '16px', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)' }}>
          <h4 style={{ margin: '0 0 8px' }}>Preview Output</h4>
          <p style={{ margin: 0 }}>Hello, World!</p>
        </div>
      </TabPanelComponent>
      <TabPanelComponent id="documentation">
        <h4 style={{ margin: '0 0 12px' }}>Usage</h4>
        <p style={{ margin: '0 0 12px', lineHeight: 1.6 }}>
          This component demonstrates a simple greeting message.
        </p>
        <ul style={{ margin: 0, paddingLeft: '20px', lineHeight: 1.8 }}>
          <li>Easy to use</li>
          <li>Customizable</li>
          <li>Well documented</li>
        </ul>
      </TabPanelComponent>
    </TabsComponent>
  ),
};
