import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Video from './Video';

export default {
  title: 'General/Video',
  component: Video,
  argTypes: {
    video: {
      description: 'Define the video embed',
      control: 'text',
    },
  },
} as ComponentMeta<typeof Video>;

const Template: ComponentStory<typeof Video> = (args) => <Video {...args} />;

export const VideoComponent = Template.bind({});
VideoComponent.args = {
  video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/I95hSyocMlg?si=1n8TVSmIkVxSCHxa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
};
