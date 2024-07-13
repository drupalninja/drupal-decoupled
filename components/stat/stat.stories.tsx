import React from 'react';
import { composeStory } from '@storybook/react';
import Stat from './Stat';
import './Stat.module.scss';

export default {
  title: 'General/Stat',
  component: Stat,
  argTypes: {
    media: { control: 'text' },
    heading: { control: 'text' },
    body: { control: 'text' },
    modifier: { control: 'text' }
  }
};

const Template = composeStory(Stat, (args: StatProps) => <Stat {...args} />);

export const StatStory = Template.bind({});
StatStory.args = {
  media: <span className="material-symbols-outlined display-1">monitoring</span>,
  heading: 'This is small headling',
  body: 'Vestibulum fringilla pede sit amet augue. Nullam nulla eros, ultricies sit amet, nonummy id, imperdiet feugiat, pede.',
  modifier: 'col-4'
};
