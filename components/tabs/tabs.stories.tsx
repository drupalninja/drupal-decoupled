import React from 'react';
import Tabs from './tabs';

export default {
  title: 'Navigation/Tabs',
  component: Tabs,
  argTypes: {
    tabItems: { control: 'object' }
  }
};

const Template = (args) => <Tabs {...args} />;

export const Default = Template.bind({});
Default.args = {
  tabItems: [
    {
      title: 'Active',
      url: '#',
      active: true
    },
    {
      title: 'Link',
      url: '#'
    },
    {
      title: 'Link',
      url: '#'
    },
    {
      title: 'Disabled',
      disabled: true
    }
  ]
};