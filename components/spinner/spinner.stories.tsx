import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Spinner } from './Spinner';

export default {
  title: 'General/Spinner',
  component: Spinner,
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = (args: any) => <Spinner {...args} />;

export const Default = Template.bind({});
Default.args = {};
