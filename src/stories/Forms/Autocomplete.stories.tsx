import type { Meta, StoryObj } from "@storybook/nextjs";
import { AutocompleteComponent, AutocompleteItemComponent } from "../../components/Forms/Autocomplete/Autocomplete";

const meta = {
  component: AutocompleteComponent,
  title: "Forms/Autocomplete",
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AutocompleteComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

const countries = [
  { id: 1, name: 'United States' },
  { id: 2, name: 'Canada' },
  { id: 3, name: 'Mexico' },
  { id: 4, name: 'United Kingdom' },
  { id: 5, name: 'France' },
  { id: 6, name: 'Germany' },
  { id: 7, name: 'Italy' },
  { id: 8, name: 'Spain' },
  { id: 9, name: 'Japan' },
  { id: 10, name: 'China' },
  { id: 11, name: 'Brazil' },
  { id: 12, name: 'Australia' },
];

export const Default: Story = {
  args: { children: null },
  render: () => (
    <AutocompleteComponent label="Country" placeholder="Select a country">
      {countries.map((country) => (
        <AutocompleteItemComponent key={country.id} id={country.id}>
          {country.name}
        </AutocompleteItemComponent>
      ))}
    </AutocompleteComponent>
  ),
};

export const WithDescription: Story = {
  args: { children: null },
  render: () => (
    <AutocompleteComponent
      label="Programming Language"
      description="Choose your preferred programming language"
      placeholder="Type to search..."
    >
      <AutocompleteItemComponent id="javascript">JavaScript</AutocompleteItemComponent>
      <AutocompleteItemComponent id="typescript">TypeScript</AutocompleteItemComponent>
      <AutocompleteItemComponent id="python">Python</AutocompleteItemComponent>
      <AutocompleteItemComponent id="java">Java</AutocompleteItemComponent>
      <AutocompleteItemComponent id="csharp">C#</AutocompleteItemComponent>
      <AutocompleteItemComponent id="rust">Rust</AutocompleteItemComponent>
      <AutocompleteItemComponent id="go">Go</AutocompleteItemComponent>
    </AutocompleteComponent>
  ),
};

export const Required: Story = {
  args: { children: null },
  render: () => (
    <AutocompleteComponent label="City" placeholder="Select your city" isRequired>
      <AutocompleteItemComponent id="nyc">New York</AutocompleteItemComponent>
      <AutocompleteItemComponent id="la">Los Angeles</AutocompleteItemComponent>
      <AutocompleteItemComponent id="chicago">Chicago</AutocompleteItemComponent>
      <AutocompleteItemComponent id="houston">Houston</AutocompleteItemComponent>
      <AutocompleteItemComponent id="phoenix">Phoenix</AutocompleteItemComponent>
    </AutocompleteComponent>
  ),
};

export const WithError: Story = {
  args: { children: null },
  render: () => (
    <AutocompleteComponent
      label="Email Domain"
      placeholder="Select a domain"
      isInvalid
      errorMessage="Please select a valid email domain"
    >
      <AutocompleteItemComponent id="gmail">gmail.com</AutocompleteItemComponent>
      <AutocompleteItemComponent id="outlook">outlook.com</AutocompleteItemComponent>
      <AutocompleteItemComponent id="yahoo">yahoo.com</AutocompleteItemComponent>
      <AutocompleteItemComponent id="icloud">icloud.com</AutocompleteItemComponent>
    </AutocompleteComponent>
  ),
};

export const Disabled: Story = {
  args: { children: null },
  render: () => (
    <AutocompleteComponent label="Region" placeholder="Select a region" isDisabled>
      <AutocompleteItemComponent id="north">North America</AutocompleteItemComponent>
      <AutocompleteItemComponent id="south">South America</AutocompleteItemComponent>
      <AutocompleteItemComponent id="europe">Europe</AutocompleteItemComponent>
      <AutocompleteItemComponent id="asia">Asia</AutocompleteItemComponent>
    </AutocompleteComponent>
  ),
};

export const DisabledOptions: Story = {
  args: { children: null },
  render: () => (
    <AutocompleteComponent label="Subscription Plan" placeholder="Select a plan">
      <AutocompleteItemComponent id="free">Free</AutocompleteItemComponent>
      <AutocompleteItemComponent id="basic">Basic - $9/month</AutocompleteItemComponent>
      <AutocompleteItemComponent id="pro">Pro - $29/month</AutocompleteItemComponent>
      <AutocompleteItemComponent id="enterprise" isDisabled>Enterprise - Contact sales</AutocompleteItemComponent>
    </AutocompleteComponent>
  ),
};

export const DefaultSelected: Story = {
  args: { children: null },
  render: () => (
    <AutocompleteComponent label="Theme" placeholder="Select theme" defaultSelectedKey="dark">
      <AutocompleteItemComponent id="light">Light</AutocompleteItemComponent>
      <AutocompleteItemComponent id="dark">Dark</AutocompleteItemComponent>
      <AutocompleteItemComponent id="auto">Auto</AutocompleteItemComponent>
    </AutocompleteComponent>
  ),
};

export const ManyOptions: Story = {
  args: { children: null },
  render: () => (
    <AutocompleteComponent label="State" placeholder="Select a state">
      <AutocompleteItemComponent id="al">Alabama</AutocompleteItemComponent>
      <AutocompleteItemComponent id="ak">Alaska</AutocompleteItemComponent>
      <AutocompleteItemComponent id="az">Arizona</AutocompleteItemComponent>
      <AutocompleteItemComponent id="ar">Arkansas</AutocompleteItemComponent>
      <AutocompleteItemComponent id="ca">California</AutocompleteItemComponent>
      <AutocompleteItemComponent id="co">Colorado</AutocompleteItemComponent>
      <AutocompleteItemComponent id="ct">Connecticut</AutocompleteItemComponent>
      <AutocompleteItemComponent id="de">Delaware</AutocompleteItemComponent>
      <AutocompleteItemComponent id="fl">Florida</AutocompleteItemComponent>
      <AutocompleteItemComponent id="ga">Georgia</AutocompleteItemComponent>
      <AutocompleteItemComponent id="hi">Hawaii</AutocompleteItemComponent>
      <AutocompleteItemComponent id="id">Idaho</AutocompleteItemComponent>
    </AutocompleteComponent>
  ),
};
