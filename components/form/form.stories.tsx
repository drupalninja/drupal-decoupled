import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import FormComponent from './Form';
import './Form.module.scss';

export default {
  title: 'Editorial/Form',
  component: FormComponent,
} as ComponentMeta<typeof FormComponent>;

const Template: ComponentStory<typeof FormComponent> = (args: any) => <FormComponent {...args} />;

export const Form = Template.bind({});
Form.args = {};
