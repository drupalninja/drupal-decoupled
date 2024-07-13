import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import FieldLabel, { FieldLabelProps } from './FieldLabel';

export default {
  title: 'Data Entry/Field Label',
  component: FieldLabel,
} as ComponentMeta<typeof FieldLabel>;

const Template: ComponentStory<typeof FieldLabel> = (args: any) => <FieldLabel {...args} />;

export const FieldLabelValid = Template.bind({});
FieldLabelValid.args = {
  label: 'Valid input',
  value: 'test@example.com',
};

export const FieldLabelInvalid = Template.bind({});
FieldLabelInvalid.args = {
  label: 'Invalid input',
  isInvalid: true,
  value: 'invalid@example',
};
