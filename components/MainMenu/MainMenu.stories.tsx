import React from 'react';
import MainMenu from './MainMenu';
import { MainMenuItem, MainMenuProps } from './Types';

export default {
  title: 'Navigation/Main Navigation',
  component: MainMenu,
  argTypes: {
    menuItems: {
      description: 'Define the array of main menu items',
      control: 'array',
      type: {
        required: true,
      },
    },
  },
};

const Template = (args: MainMenuProps) => <MainMenu {...args} />;

export const MainNavigation = Template.bind({});

MainNavigation.args = {
  modifier: '',
  linkModifier: 'text-dark',
  siteLogo: './images/logo.svg',
  menuItems: [
    {
      title: 'Home',
      url: '#',
      inActiveTrail: true,
    },
    {
      title: 'Menu Item 1',
      url: '#',
      isExpanded: true,
      below: [
        {
          title: 'Vestibulum ac diam',
          url: '#',
        },
        {
          title: 'Mauris blandit aliquet',
          url: '#',
        },
        {
          title: 'Pellentesque in',
          url: '#',
        },
      ],
    },
    {
      title: 'Menu Item 2',
      url: '#',
      isExpanded: true,
      below: [
        {
          title: 'Vestibulum ac diam',
          url: '#',
        },
        {
          title: 'Mauris blandit aliquet',
          url: '#',
        },
      ],
    },
    {
      title: 'Menu Item 3',
      url: '#',
    },
  ],
};
