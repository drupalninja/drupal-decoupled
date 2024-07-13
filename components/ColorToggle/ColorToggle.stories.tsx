import React from 'react';
import { Story, Meta } from '@storybook/react';

import ColorToggle from './ColorToggle';

export default {
  title: 'General/Color Mode Toggle',
  component: ColorToggle,
} as Meta;

const Template: Story<typeof ColorToggle> = (args: any) => <ColorToggle {...args} />;

export const ColorToggleComponent = Template.bind({});
ColorToggleComponent.args = {};
