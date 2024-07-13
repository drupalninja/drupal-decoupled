import React from 'react';
import GalleryLightbox from './GalleryLightbox';
import './GalleryLightbox.module.scss';

export default {
  title: 'Editorial/Gallery',
  component: GalleryLightbox,
  argTypes: {
    sectionTitle: {
      description: 'The title of the gallery lightbox component',
      control: 'text',
    },
    introText: {
      description: 'Optional intro text for the gallery lightbox component',
      control: 'text',
    },
    galleryItems: {
      description: 'Define the array of gallery lightbox items',
      control: 'array',
      type: {
        required: true,
      },
    },
    modifier: {
      description: 'The modifier class to apply to the gallery lightbox component',
      control: 'text',
    },
  },
};

const Template = (args) => <GalleryLightbox {...args} />;

export const Gallery = Template.bind({});
Gallery.args = {
  sectionTitle: 'Optional Title',
  modifier: 'p-2',
  introText:
    '<p>Optional summary text, turpis at luctus finibus, erat lectus convallis velit, at sodales purus lacus quis magna. Curabitur imperdiet sapien libero, fringilla ullamcorper nibh ullamcorper vitae. Proin sed luctus augue.</p>',
  galleryItems: [
    {
      id: 'exampleLightbox1',
      media: <img src="./images/card.webp" width="100%" className="card-img-top" alt="Gallery 1" />,
      mediaThumb: <img src="./images/card.webp" className="img-fluid" alt="Gallery 1" />,
      mediaDescription: 'Gallery 1 here!',
    },
    {
      id: 'exampleLightbox2',
      media: <img src="./images/card.webp" width="100%" className="card-img-top" alt="Gallery 2" />,
      mediaThumb: <img src="./images/card.webp" className="img-fluid" alt="Gallery 2" />,
      mediaDescription: 'Gallery 2 here!',
    },
    // Add more gallery items as needed
  ],
};
