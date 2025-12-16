import type { Meta, StoryObj } from "@storybook/nextjs";
import { ImageListComponent, ImageListItem } from "../../components/DataDisplay/ImageList/ImageList";

const meta = {
  component: ImageListComponent,
  title: "DataDisplay/ImageList",
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ImageListComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

const images = [
  'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=300',
  'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=300',
  'https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=300',
  'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?w=300',
  'https://images.unsplash.com/photo-1533827432537-70133748f5c8?w=300',
  'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=300',
];

export const Standard: Story = {
  render: () => (
    <ImageListComponent cols={3} gap={8}>
      {images.map((img, index) => (
        <ImageListItem key={index}>
          <img src={img} alt={`Image ${index + 1}`} />
        </ImageListItem>
      ))}
    </ImageListComponent>
  ),
};

export const Quilted: Story = {
  render: () => (
    <ImageListComponent variant="quilted" cols={4} gap={8} rowHeight={150}>
      <ImageListItem cols={2} rows={2}>
        <img src={images[0]} alt="Image 1" />
      </ImageListItem>
      <ImageListItem>
        <img src={images[1]} alt="Image 2" />
      </ImageListItem>
      <ImageListItem>
        <img src={images[2]} alt="Image 3" />
      </ImageListItem>
      <ImageListItem>
        <img src={images[3]} alt="Image 4" />
      </ImageListItem>
      <ImageListItem cols={2}>
        <img src={images[4]} alt="Image 5" />
      </ImageListItem>
      <ImageListItem>
        <img src={images[5]} alt="Image 6" />
      </ImageListItem>
    </ImageListComponent>
  ),
};

export const DifferentCols: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div>
        <h4>2 Columns</h4>
        <ImageListComponent cols={2} gap={8}>
          {images.slice(0, 4).map((img, index) => (
            <ImageListItem key={index}>
              <img src={img} alt={`Image ${index + 1}`} />
            </ImageListItem>
          ))}
        </ImageListComponent>
      </div>
      <div>
        <h4>4 Columns</h4>
        <ImageListComponent cols={4} gap={8}>
          {images.map((img, index) => (
            <ImageListItem key={index}>
              <img src={img} alt={`Image ${index + 1}`} />
            </ImageListItem>
          ))}
        </ImageListComponent>
      </div>
    </div>
  ),
};
