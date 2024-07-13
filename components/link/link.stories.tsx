import React from 'react';
import { Story, Meta } from '@storybook/react';
import Link, { LinkProps } from './link';

export default {
  title: 'General/Link',
  component: Link,
} as Meta;

const Template: Story<LinkProps> = (args) => <Link {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  href: '#',
  className: 'link-primary',
  children: 'Primary link',
};

export const Secondary = Template.bind({});
Secondary.args = {
  href: '#',
  className: 'link-secondary',
  children: 'Secondary link',
};

export const Success = Template.bind({});
Success.args = {
  href: '#',
  className: 'link-success',
  children: 'Success link',
};

export const Danger = Template.bind({});
Danger.args = {
  href: '#',
  className: 'link-danger',
  children: 'Danger link',
};

export const Warning = Template.bind({});
Warning.args = {
  href: '#',
  className: 'link-warning',
  children: 'Warning link',
};

export const Info = Template.bind({});
Info.args = {
  href: '#',
  className: 'link-info',
  children: 'Info link',
};

export const Light = Template.bind({});
Light.args = {
  href: '#',
  className: 'link-light',
  children: 'Light link',
};

export const Dark = Template.bind({});
Dark.args = {
  href: '#',
  className: 'link-dark',
  children: 'Dark link',
};