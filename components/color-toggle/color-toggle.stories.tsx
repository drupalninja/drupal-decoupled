import React from 'react';
import { Story, Meta } from '@storybook/react';

import ColorToggle from './color-toggle';

export default {
  title: 'General/Color Mode Toggle',
  component: ColorToggle,
} as Meta;

const Template: Story<typeof ColorToggle> = (args) => <ColorToggle {...args} />;

export const ColorToggleComponent = Template.bind({});
ColorToggleComponent.args = {};
