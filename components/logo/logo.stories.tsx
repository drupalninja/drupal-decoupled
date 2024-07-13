import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Logo from './logo';

export default {
  title: 'General/Logo',
  component: Logo,
  argTypes: {
    modifier: {
      description: 'Define the modifier',
      control: 'text',
    },
    siteLogo: {
      description: 'Define the site logo',
      control: 'text',
    },
  },
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const LogoStory = Template.bind({});
LogoStory.args = {
  modifier: 'col-3',
  siteLogo: './images/logo.svg',
};