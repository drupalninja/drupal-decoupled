import React from 'react';
import { composeStory } from '@storybook/react';
import Popover from './popover';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Messages/Popover',
  component: Popover,
  argTypes: {
    title: { control: 'text' },
    content: { control: 'text' },
    placement: {
      control: { type: 'select', options: ['top', 'bottom', 'left', 'right'] },
    },
    trigger: {
      control: { type: 'select', options: ['click', 'hover', 'focus', 'manual'] },
    },
    boundary: {
      control: { type: 'select', options: ['scrollParent', 'window', 'viewport'] },
    },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = composeStory(Popover, (args) => <Popover {...args} />);

export const Default = Template.bind({});
Default.args = {
  title: 'Popover title',
  content: 'And here\'s some amazing content. It\'s very engaging.Right? ',
};
