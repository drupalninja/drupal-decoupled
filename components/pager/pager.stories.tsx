import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Pager from './pager';

export default {
  title: 'Navigation/Pager',
  component: Pager,
  argTypes: {
    headingId: {
      description: 'Define the heading id attribute',
      control: 'text'
    },
    pagerItems: {
      description: 'Define the pager items',
      control: 'object',
      type: {
        required: true
      }
    }
  }
} as ComponentMeta<typeof Pager>;

const Template: ComponentStory<typeof Pager> = (args) => <Pager {...args} />;

export const PagerComponent = Template.bind({});
PagerComponent.args = {
  headingId: 'styleguide_instance--1',
  pagerItems: {
    previous: {
      href: '?search=&page=1',
      text: 'Previous'
    },
    pages: [
      { href: '?search=&page=0' },
      { href: '?search=&page=1' },
      { href: '?search=&page=2' },
      { href: '?search=&page=3' },
      { href: '?search=&page=4' },
      { href: '?search=&page=5' },
      { href: '?search=&page=6' },
      { href: '?search=&page=7' },
      { href: '?search=&page=8' },
      { href: '?search=&page=9' },
      { href: '?search=&page=10' },
      { href: '?search=&page=11' },
      { href: '?search=&page=12' }
    ],
    next: {
      href: '?search=&page=3',
      text: 'Next'
    }
  }
};