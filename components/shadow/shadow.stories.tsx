import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Shadow from './Shadow';

export default {
  title: 'General/Shadow',
  component: Shadow,
} as ComponentMeta<typeof Shadow>;

const Template: ComponentStory<typeof Shadow> = (args: any) => <Shadow {...args} />;

export const NoShadow = Template.bind({});
NoShadow.args = { variant: 'none' };

export const SmallShadow = Template.bind({});
SmallShadow.args = { variant: 'sm' };

export const RegularShadow = Template.bind({});
RegularShadow.args = { variant: 'regular' };

export const LargeShadow = Template.bind({});
LargeShadow.args = { variant: 'lg' };
