import React from 'react';
import Breadcrumb from './Breadcrumb';

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
};

const BreadcrumbTemplate = (args: any) => <Breadcrumb {...args} />;

export const Default = BreadcrumbTemplate.bind({});
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
