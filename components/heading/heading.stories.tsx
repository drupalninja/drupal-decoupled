import React from 'react';
import { Story, Meta } from '@storybook/react';
import Heading from './heading';

export default {
  title: 'General/Heading',
  component: Heading,
} as Meta;

const Template: Story<typeof Heading> = (args) => <Heading {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Title Lorem Ipsum Dolor',
  level: 'h2',
  modifier: 'display-3'
};
