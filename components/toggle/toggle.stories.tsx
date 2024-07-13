import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Toggle from './Toggle';

export default {
  title: 'Data Entry/Toggle',
  component: Toggle,
} as ComponentMeta<typeof Toggle>;

const Template: ComponentStory<typeof Toggle> = (args) => <Toggle {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Default switch checkbox input',
};

export const Checked = Template.bind({});
Checked.args = {
  defaultChecked: true,
  label: 'Checked switch checkbox input',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  label: 'Disabled switch checkbox input',
};

export const DisabledChecked = Template.bind({});
DisabledChecked.args = {
  defaultChecked: true,
  disabled: true,
  label: 'Disabled checked switch checkbox input',
};
