import React from 'react';
import { composeStory } from '@storybook/react';
import Quote from './Quote';

export default {
  title: 'Editorial/Quote',
  component: Quote,
  argTypes: {
    modifierClass: { control: 'text' },
    logo: { control: 'text' },
    quote: { control: 'text' },
    image: { control: 'text' },
    name: { control: 'text' },
    job: { control: 'text' },
    layout: {
      control: { type: 'select', options: ['left', 'right'] },
    },
  },
};

const Template = composeStory(Quote, (args) => <Quote {...args} />);

export const QuoteStory = Template.bind({});
QuoteStory.args = {
  modifierClass: '',
  logo: '<img src="https://placehold.co/400x300/333333/FFF?text=Logo" className="img-fluid rounded-circle" alt="Logo" />',
  quote: 'Quisque id odio. Sed a libero. Praesent ut ligula non mi varius sagittis. Curabitur nisi.',
  image: '<img src="https://placehold.co/400x300/333333/FFF?text=Headshot" className="img-fluid rounded-circle" alt="Headshot" />',
  name: 'Jane Doe',
  job: 'Donec interdum metus et hendrerit',
  layout: 'left',
};
