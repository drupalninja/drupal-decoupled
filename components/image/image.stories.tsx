import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Image from './image';

export default {
  title: 'General/Image',
  component: Image,
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' }
  }
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: './images/card.webp',
  alt: 'Image alt text'
};