import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import UtilityNav from './utility-nav';

export default {
  title: 'Navigation/Utility Nav',
  component: UtilityNav,
  argTypes: {
    links: {
      description: 'Define the Utility Nav links.',
      control: 'array'
    }
  }
} as ComponentMeta<typeof UtilityNav>;

const Template: ComponentStory<typeof UtilityNav> = (args) => <UtilityNav {...args} />;

export const Default = Template.bind({});
Default.args = {
  links: [
    {
      url: '#',
      text: 'Link 1'
    },
    {
      url: '#',
      text: 'Link 2'
    },
    {
      url: '#',
      text: 'Link 3'
    }
  ]
};