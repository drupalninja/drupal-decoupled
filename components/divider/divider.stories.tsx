import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Divider from './Divider';

export default {
  title: 'General/Divider',
  component: Divider,
} as ComponentMeta<typeof Divider>;

const Template: ComponentStory<typeof Divider> = (args: any) => <Divider {...args} />;

export const Default = Template.bind({});
Default.args = {};
