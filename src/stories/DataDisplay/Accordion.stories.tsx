import type { Meta, StoryObj } from "@storybook/nextjs";
import { AccordionComponent, AccordionItemComponent } from "../../components/DataDisplay/Accordion/Accordion";

const meta = {
  component: AccordionComponent,
  title: "DataDisplay/Accordion",
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AccordionComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <AccordionComponent>
      <AccordionItemComponent title="What is your return policy?">
        We offer a 30-day return policy for all unused items in their original packaging.
        Simply contact our customer service team to initiate a return.
      </AccordionItemComponent>
      <AccordionItemComponent title="How long does shipping take?">
        Standard shipping typically takes 5-7 business days. Express shipping options are
        available at checkout for delivery within 2-3 business days.
      </AccordionItemComponent>
      <AccordionItemComponent title="Do you ship internationally?">
        Yes, we ship to most countries worldwide. International shipping times vary by
        location but typically range from 10-20 business days.
      </AccordionItemComponent>
    </AccordionComponent>
  ),
};

export const SingleExpanded: Story = {
  render: () => (
    <AccordionComponent>
      <AccordionItemComponent title="Personal Information" defaultExpanded>
        <p style={{ margin: '0 0 12px' }}>Please provide your basic information including full name, email address, and phone number.</p>
        <p style={{ margin: 0 }}>All fields are required unless marked as optional.</p>
      </AccordionItemComponent>
      <AccordionItemComponent title="Billing Address">
        Enter your billing address details. This should match the address on your payment method.
      </AccordionItemComponent>
      <AccordionItemComponent title="Payment Method">
        Select your preferred payment method. We accept all major credit cards and PayPal.
      </AccordionItemComponent>
    </AccordionComponent>
  ),
};

export const WithRichContent: Story = {
  render: () => (
    <AccordionComponent>
      <AccordionItemComponent title="Features">
        <ul style={{ margin: '0', paddingLeft: '20px' }}>
          <li>Advanced analytics dashboard</li>
          <li>Real-time collaboration</li>
          <li>Unlimited storage space</li>
          <li>Priority customer support</li>
        </ul>
      </AccordionItemComponent>
      <AccordionItemComponent title="Pricing">
        <div>
          <p style={{ margin: '0 0 8px', fontWeight: 500 }}>Basic Plan - $9/month</p>
          <p style={{ margin: '0 0 16px', fontSize: '13px', color: 'var(--text-secondary)' }}>
            Perfect for individuals and small teams
          </p>
          <p style={{ margin: '0 0 8px', fontWeight: 500 }}>Pro Plan - $29/month</p>
          <p style={{ margin: '0', fontSize: '13px', color: 'var(--text-secondary)' }}>
            Advanced features for growing businesses
          </p>
        </div>
      </AccordionItemComponent>
      <AccordionItemComponent title="Technical Requirements">
        <p style={{ margin: '0 0 8px' }}>Minimum system requirements:</p>
        <ul style={{ margin: '0', paddingLeft: '20px' }}>
          <li>Modern web browser (Chrome, Firefox, Safari, Edge)</li>
          <li>Stable internet connection</li>
          <li>JavaScript enabled</li>
        </ul>
      </AccordionItemComponent>
    </AccordionComponent>
  ),
};

export const Disabled: Story = {
  render: () => (
    <AccordionComponent>
      <AccordionItemComponent title="Available Section">
        This section is available and can be expanded normally.
      </AccordionItemComponent>
      <AccordionItemComponent title="Disabled Section" isDisabled>
        This content cannot be accessed because the section is disabled.
      </AccordionItemComponent>
      <AccordionItemComponent title="Another Available Section">
        This section is also available for interaction.
      </AccordionItemComponent>
    </AccordionComponent>
  ),
};
