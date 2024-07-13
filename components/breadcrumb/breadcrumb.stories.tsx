import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Breadcrumb from './breadcrumb';

export default {
  title: 'Navigation/Breadcrumb',
  component: Breadcrumb,
  argTypes: {
    breadcrumb: {
      description: 'Define the breadcrumb content',
      control: 'object',
      type: {
        required: true
      }
    }
  }
} as ComponentMeta<typeof Breadcrumb>;

const Template: ComponentStory<typeof Breadcrumb> = (args) => <Breadcrumb {...args} />;

export const Default = Template.bind({});
Default.args = {
  breadcrumb: [
    {
      text: 'Home',
      url: '#'
    },
    {
      text: 'Parent Page',
      url: '#'
    },
    {
      text: 'Current Page',
      url: ''
    }
  ]
};