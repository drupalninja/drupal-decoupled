import React from 'react';
import { Story, Meta } from '@storybook/react';
import Card from './card';

export default {
  title: 'General/Single Card',
  component: Card,
  argTypes: {
    heading: {
      name: 'Heading',
      description: 'Heading of the card',
      control: 'object',
    },
  },
} as Meta;

const Template: Story<typeof Card> = (args) => <Card {...args} />;
Template.args = args;

export const SingleCard = Template.bind({});
SingleCard.args = {
  modifier: 'col-6',
  bodyModifier: '',
  media: (
    <img src="./images/card.webp" className="card-img-top" alt="test image" />
  ),
  mediaLink: '#',
  heading: {
    title: 'Phasellus auctor, turpis',
    headingLevel: '2',
    url: '#',
    modifier: 'card-title mb-3',
  },
  layout: '',
  tags: ['New feature', 'Announcement'],
  summaryText:
    'This copy is optional, if nothing is entered nothing will display. Facit nulla in vulputate vulputate aliquam. Commodo esse habent tation nam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed orci lacus.',
  link: {
    url: '#',
    text: 'Link 1',
  },
  link2: {
    url: '#',
    text: 'Link 2',
  },
};

export const SingleCardNoTags = Template.bind({});
SingleCardNoTags.args = {
  modifier: 'col-6',
  bodyModifier: '',
  media: (
    <img src="./images/card.webp" className="card-img-top" alt="test image" />
  ),
  mediaLink: '#',
  heading: {
    title: 'Phasellus auctor, turpis',
    headingLevel: '2',
    url: '#',
    modifier: 'card-title mb-3',
  },
  layout: '',
  summaryText:
    'This copy is optional, if nothing is entered nothing will display. Facit nulla in vulputate vulputate aliquam. Commodo esse habent tation nam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed orci lacus.',
  link: {
    url: '#',
    text: 'Link 1',
  },
  link2: {
    url: '#',
    text: 'Link 2',
  },
};
