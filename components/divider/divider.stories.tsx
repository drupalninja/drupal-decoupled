import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Divider from './divider';

export default {
  title: 'General/Divider',
  component: Divider,
} as ComponentMeta<typeof Divider>;

const Template: ComponentStory<typeof Divider> = (args) => <Divider {...args} />;

export const Default = Template.bind({});
Default.args = {};