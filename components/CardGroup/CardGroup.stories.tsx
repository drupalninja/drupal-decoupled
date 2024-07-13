import React from 'react';
import CardGroup from './CardGroup';
import './CardGroup.scss';

export default {
  title: 'Editorial/Card Group',
  component: CardGroup,
  argTypes: {
    sectionTitle: {
      description: 'The title of the card list component',
      control: 'text'
    },
    cardItems: {
      description: 'Array of the card list item content',
      control: 'object',
      type: {
        required: true
      }
    }
  }
};

const Template = (args: any) => <CardGroup {...args} />;

export const CardGroupStory = Template.bind({});
CardGroupStory.args = {
  sectionTitle: 'Latest Articles',
  cardItems: [
    {
      modifier: '',
      media: '<img src="./images/card.webp" class="card-img-top" alt="test image" />',
      heading: {
        title: 'Phasellus auctor, turpis',
        headingLevel: 2,
        url: '#',
        modifier: 'card-title mb-4'
      },
      tags: ['New feature', 'Announcement'],
      summaryText:
        'This copy is optional, if nothing is entered nothing will display. Facit nulla in vulputate vulputate aliquam. Commodo esse habent tation nam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed orci lacus.',
      link: {
        url: '#',
        text: 'Link 1'
      },
      link2: {
        url: '#',
        text: 'Link 2'
      }
    },
    // Add more card items as needed
  ]
};
