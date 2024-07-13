import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button, { ButtonProps } from './button';

export default {
  title: 'General/Button',
  component: Button,
  argTypes: {
    url: {
      description: 'The URL the button links to',
      control: 'text',
    },
    text: {
      description: 'The text inside the button',
      control: 'text',
    },
    icon: {
      description: 'The icon name to be displayed inside the button',
      control: 'text',
    },
    modifier: {
      description: 'The modifier classes for the button',
      control: 'text',
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  url: '#',
  text: 'Primary Button',
  icon: 'arrow_right_alt',
  modifier: 'btn-primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  url: '#',
  text: 'Secondary Button',
  icon: 'arrow_right_alt',
  modifier: 'btn-secondary',
};

export const PrimaryOutlined = Template.bind({});
PrimaryOutlined.args = {
  url: '#',
  text: 'Primary Button',
  icon: '',
  modifier: 'btn-outline-primary',
};

export const SecondaryOutlined = Template.bind({});
SecondaryOutlined.args = {
  url: '#',
  text: 'Secondary Button',
  icon: '',
  modifier: 'btn-outline-secondary',
};

export const PrimarySmall = Template.bind({});
PrimarySmall.args = {
  url: '#',
  text: 'Primary Button Small',
  icon: '',
  modifier: 'btn-primary btn-sm',
};

export const SecondarySmall = Template.bind({});
SecondarySmall.args = {
  url: '#',
  text: 'Secondary Button Small',
  icon: '',
  modifier: 'btn-secondary btn-sm',
};