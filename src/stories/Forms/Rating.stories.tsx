import type { Meta, StoryObj } from "@storybook/nextjs";
import { useState } from "react";
import { RatingComponent } from "../../components/Forms/Rating/Rating";

const meta = {
  component: RatingComponent,
  title: "Forms/Rating",
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    max: {
      control: { type: 'number', min: 1, max: 10 },
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    color: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'warning'],
    },
  },
} satisfies Meta<typeof RatingComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultValue: 3,
  },
};

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState('4');
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
        <RatingComponent value={value} onChange={setValue} />
        <p style={{ margin: 0, fontSize: '14px', color: 'var(--text-secondary)' }}>
          Current rating: {value || 0}
        </p>
      </div>
    );
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'flex-start' }}>
      <div>
        <p style={{ margin: '0 0 8px', fontSize: '14px', fontWeight: 500 }}>Small</p>
        <RatingComponent size="small" defaultValue={3} />
      </div>
      <div>
        <p style={{ margin: '0 0 8px', fontSize: '14px', fontWeight: 500 }}>Medium</p>
        <RatingComponent size="medium" defaultValue={3} />
      </div>
      <div>
        <p style={{ margin: '0 0 8px', fontSize: '14px', fontWeight: 500 }}>Large</p>
        <RatingComponent size="large" defaultValue={3} />
      </div>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
      <RatingComponent color="default" defaultValue={4} />
      <RatingComponent color="primary" defaultValue={4} />
      <RatingComponent color="secondary" defaultValue={4} />
      <RatingComponent color="warning" defaultValue={4} />
    </div>
  ),
};

export const ReadOnly: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
      <RatingComponent value="5" readOnly />
      <RatingComponent value="4.5" precision={0.5} readOnly />
      <RatingComponent value="3" readOnly />
      <RatingComponent value="2.5" precision={0.5} readOnly />
      <RatingComponent value="1" readOnly />
    </div>
  ),
};

export const HalfRating: Story = {
  render: () => {
    const [value, setValue] = useState('3.5');
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
        <RatingComponent value={value} onChange={setValue} precision={0.5} />
        <p style={{ margin: 0, fontSize: '14px', color: 'var(--text-secondary)' }}>
          Rating: {value || 0}
        </p>
      </div>
    );
  },
};

export const MaxStars: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
      <div>
        <p style={{ margin: '0 0 8px', fontSize: '14px', fontWeight: 500 }}>5 Stars (default)</p>
        <RatingComponent defaultValue={3} />
      </div>
      <div>
        <p style={{ margin: '0 0 8px', fontSize: '14px', fontWeight: 500 }}>10 Stars</p>
        <RatingComponent max={10} defaultValue={7} />
      </div>
      <div>
        <p style={{ margin: '0 0 8px', fontSize: '14px', fontWeight: 500 }}>3 Stars</p>
        <RatingComponent max={3} defaultValue={2} />
      </div>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    defaultValue: 3,
    isDisabled: true,
  },
};
