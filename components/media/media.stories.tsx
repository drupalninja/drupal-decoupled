import type { Meta, StoryObj } from '@storybook/react';
import './Media.scss';
import Media from './Media';

const meta: Meta<typeof Media> = {
  title: 'Editorial/Media',
  component: Media,
  argTypes: {
    media: {
      description: 'Define the media item',
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Media>;

export const Default: Story = {
  args: {
    media: '<img src="./images/card.webp" class="img-fluid rounded" alt="test image" />',
  }
};
