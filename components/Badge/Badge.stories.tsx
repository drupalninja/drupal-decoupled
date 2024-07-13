import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Badge from './Badge';
import './Badge.module.scss';

export default {
  title: 'General/Badge',
  component: Badge,
  argTypes: {
    tag: {
      description: 'Define the badge content',
      control: 'text',
      type: {
        required: true
      }
    },
    modifier: {
      description: 'Define the badge modifier',
      control: 'text',
      type: {
        required: false
      }
    }
  }
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args: any) => <Badge {...args} />;

export const BadgeComponent = Template.bind({});
BadgeComponent.args = {
  tag: 'New feature',
  modifier: 'text-bg-primary'
};
