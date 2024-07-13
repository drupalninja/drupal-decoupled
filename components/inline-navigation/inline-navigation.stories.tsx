import React from 'react';
import InlineNavigation from './inline-navigation';

export default {
  title: 'Navigation/Inline Navigation',
  component: InlineNavigation,
  argTypes: {
    navItems: { control: 'object' }
  }
};

const Template = (args) => <InlineNavigation {...args} />;

export const InlineNavigationStory = Template.bind({});
InlineNavigationStory.args = {
  navItems: [
    {
      text: 'Link 1',
      url: '#'
    },
    {
      text: 'Link 2',
      url: '#'
    },
    {
      text: 'Link 3',
      url: '#'
    }
  ]
};