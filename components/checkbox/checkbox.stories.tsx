import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Checkbox } from './checkbox';

export default {
  title: 'Data Entry/Checkbox',
  component: Checkbox,
} as Meta;

const Template: Story = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {};
