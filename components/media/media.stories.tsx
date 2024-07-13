import React from 'react';
import { composeStory } from '@storybook/react';

import Media from './Media';

export default {
  title: 'Editorial/Media',
  component: Media,
  argTypes: {
    media: {
      description: 'Define the media item',
      control: 'text',
      type: {
        required: true,
      },
    },
  },
};

const Template = composeStory(Media, (args) => <Media {...args} />);

export const MediaComponent = Template.bind({});
MediaComponent.args = {
  media: '<img src="./images/card.webp" class="img-fluid rounded" alt="test image" />',
};
