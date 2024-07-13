import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Checkbox } from './Checkbox';

export default {
  title: 'Data Entry/Checkbox',
  component: Checkbox,
} as Meta<typeof Checkbox>;

const Template: Story = (args: any) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {};
