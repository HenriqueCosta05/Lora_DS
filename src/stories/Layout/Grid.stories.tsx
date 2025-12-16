import type { Meta, StoryObj } from "@storybook/nextjs";
import { GridComponent } from "../../components/Layout/Grid/Grid";
import { PaperComponent } from "../../components/Layout/Paper/Paper";
import { TypographyComponent } from "../../components/DataDisplay/Typography/Typography";

const meta = {
  component: GridComponent,
  title: "Layout/Grid",
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof GridComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => (
    <GridComponent container spacing={2} columns={12}>
      <GridComponent item style={{ gridColumn: 'span 4' }}>
        <PaperComponent elevation={2} style={{ padding: '16px', textAlign: 'center' }}>
          <TypographyComponent>Column 1</TypographyComponent>
        </PaperComponent>
      </GridComponent>
      <GridComponent item style={{ gridColumn: 'span 4' }}>
        <PaperComponent elevation={2} style={{ padding: '16px', textAlign: 'center' }}>
          <TypographyComponent>Column 2</TypographyComponent>
        </PaperComponent>
      </GridComponent>
      <GridComponent item style={{ gridColumn: 'span 4' }}>
        <PaperComponent elevation={2} style={{ padding: '16px', textAlign: 'center' }}>
          <TypographyComponent>Column 3</TypographyComponent>
        </PaperComponent>
      </GridComponent>
    </GridComponent>
  ),
};

export const Spacing: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div>
        <TypographyComponent variant="caption" gutterBottom>Spacing 1</TypographyComponent>
        <GridComponent container spacing={1} columns={3}>
          {[1, 2, 3].map(i => (
            <GridComponent key={i} item style={{ gridColumn: 'span 1' }}>
              <PaperComponent elevation={2} style={{ padding: '16px', textAlign: 'center' }}>
                <TypographyComponent>Item {i}</TypographyComponent>
              </PaperComponent>
            </GridComponent>
          ))}
        </GridComponent>
      </div>
      <div>
        <TypographyComponent variant="caption" gutterBottom>Spacing 3</TypographyComponent>
        <GridComponent container spacing={3} columns={3}>
          {[1, 2, 3].map(i => (
            <GridComponent key={i} item style={{ gridColumn: 'span 1' }}>
              <PaperComponent elevation={2} style={{ padding: '16px', textAlign: 'center' }}>
                <TypographyComponent>Item {i}</TypographyComponent>
              </PaperComponent>
            </GridComponent>
          ))}
        </GridComponent>
      </div>
    </div>
  ),
};

export const ResponsiveLayout: Story = {
  render: () => (
    <GridComponent container spacing={2} columns={12}>
      <GridComponent item style={{ gridColumn: 'span 12' }}>
        <PaperComponent elevation={2} style={{ padding: '16px' }}>
          <TypographyComponent>Full Width</TypographyComponent>
        </PaperComponent>
      </GridComponent>
      <GridComponent item style={{ gridColumn: 'span 6' }}>
        <PaperComponent elevation={2} style={{ padding: '16px' }}>
          <TypographyComponent>Half Width</TypographyComponent>
        </PaperComponent>
      </GridComponent>
      <GridComponent item style={{ gridColumn: 'span 6' }}>
        <PaperComponent elevation={2} style={{ padding: '16px' }}>
          <TypographyComponent>Half Width</TypographyComponent>
        </PaperComponent>
      </GridComponent>
      <GridComponent item style={{ gridColumn: 'span 4' }}>
        <PaperComponent elevation={2} style={{ padding: '16px' }}>
          <TypographyComponent>Third</TypographyComponent>
        </PaperComponent>
      </GridComponent>
      <GridComponent item style={{ gridColumn: 'span 4' }}>
        <PaperComponent elevation={2} style={{ padding: '16px' }}>
          <TypographyComponent>Third</TypographyComponent>
        </PaperComponent>
      </GridComponent>
      <GridComponent item style={{ gridColumn: 'span 4' }}>
        <PaperComponent elevation={2} style={{ padding: '16px' }}>
          <TypographyComponent>Third</TypographyComponent>
        </PaperComponent>
      </GridComponent>
    </GridComponent>
  ),
};

export const Alignment: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div>
        <TypographyComponent variant="caption" gutterBottom>Center Aligned</TypographyComponent>
        <GridComponent container spacing={2} columns={12} justify="center" alignItems="center" style={{ minHeight: '100px' }}>
          <GridComponent item style={{ gridColumn: 'span 4' }}>
            <PaperComponent elevation={2} style={{ padding: '16px' }}>
              <TypographyComponent>Centered</TypographyComponent>
            </PaperComponent>
          </GridComponent>
        </GridComponent>
      </div>
      <div>
        <TypographyComponent variant="caption" gutterBottom>Space Between</TypographyComponent>
        <GridComponent container spacing={2} columns={12} justify="space-between">
          <GridComponent item style={{ gridColumn: 'span 3' }}>
            <PaperComponent elevation={2} style={{ padding: '16px' }}>
              <TypographyComponent>Start</TypographyComponent>
            </PaperComponent>
          </GridComponent>
          <GridComponent item style={{ gridColumn: 'span 3' }}>
            <PaperComponent elevation={2} style={{ padding: '16px' }}>
              <TypographyComponent>End</TypographyComponent>
            </PaperComponent>
          </GridComponent>
        </GridComponent>
      </div>
    </div>
  ),
};
