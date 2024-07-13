import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Alert from './alerts';
import AlertProps from './alerts';

export default {
  title: 'Messages/Alerts',
  component: Alert,
} as Meta;

const Template: StoryFn<typeof AlertProps> = (args) => <Alert {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
  children: 'A simple primary alert—check it out!',
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: 'secondary',
  children: 'A simple secondary alert—check it out!',
};

export const Success = Template.bind({});
Success.args = {
  type: 'success',
  children: 'A simple success alert—check it out!',
};

export const Danger = Template.bind({});
Danger.args = {
  type: 'danger',
  children: 'A simple danger alert—check it out!',
};

export const Warning = Template.bind({});
Warning.args = {
  type: 'warning',
  children: 'A simple warning alert—check it out!',
};

export const Info = Template.bind({});
Info.args = {
  type: 'info',
  children: 'A simple info alert—check it out!',
};

export const Light = Template.bind({});
Light.args = {
  type: 'light',
  children: 'A simple light alert—check it out!',
};

export const Dark = Template.bind({});
Dark.args = {
  type: 'dark',
  children: 'A simple dark alert—check it out!',
};
