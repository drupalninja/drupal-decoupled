import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Menu from './Menu';

export default {
  title: 'Navigation/Menu',
  component: Menu,
  argTypes: {
    menuItems: {
      description: 'Define the links',
      control: { type: 'array' },
    },
    attributes: {
      description: 'Define the attributes',
      control: { type: 'object' },
    },
    modifier: {
      description: 'Define the modifier',
      control: { type: 'text' },
    },
    itemModifier: {
      description: 'Define the list item modifier',
      control: { type: 'text' },
    },
  },
} as ComponentMeta<typeof Menu>;

const Template: ComponentStory<typeof Menu> = (args) => <Menu {...args} />;

export const Menu_ = Template.bind({});
Menu_.args = {
  menuItems: [
    {
      url: '#',
      title: 'Link 1',
    },
    {
      url: '#',
      title: 'Link 2',
    },
    {
      url: '#',
      title: 'Link 3',
    },
  ],
  modifier: '',
  itemModifier: '',
};
