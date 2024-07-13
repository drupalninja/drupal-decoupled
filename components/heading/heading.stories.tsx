import React from 'react';
import { Story, Meta } from '@storybook/react';
import Heading from './Heading';

export default {
  title: 'General/Heading',
  component: Heading,
} as Meta;

const Template: Story<typeof Heading> = (args: any) => <Heading {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Title Lorem Ipsum Dolor',
  level: '2',
  modifier: 'display-3'
};
