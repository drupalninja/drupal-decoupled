import React from 'react';
import { Story, Meta } from '@storybook/react';
import Radio, { RadioProps } from './radio';

export default {
  title: 'Data Entry/Radio',
  component: Radio,
} as Meta;

const Template: Story<RadioProps> = (args) => <Radio {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'flexRadioDefault',
  id: 'flexRadioDefault1',
  label: 'Default radio',
};

export const Checked = Template.bind({});
Checked.args = {
  name: 'flexRadioDefault',
  id: 'flexRadioDefault2',
  label: 'Default checked radio',
  checked: true,
};