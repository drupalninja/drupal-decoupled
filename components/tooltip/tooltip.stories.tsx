import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Tooltip from './tooltip';

export default {
  title: 'Messages/Tooltip',
  component: Tooltip,
  argTypes: {
    title: {
      control: 'text',
    },
  },
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => <Tooltip {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Default tooltip',
  children: 'inline links',
};