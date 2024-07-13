import React from 'react';
import NewsletterForm from './newsletter-form';

export default {
  title: 'Editorial/Newsletter Form',
  component: NewsletterForm,
  argTypes: {
    modifier: {
      description: 'The modifier class to apply to the newsletter form component',
      control: 'text'
    }
  }
};

const Template = (args) => <NewsletterForm {...args} />;

export const NewsletterFormStory = Template.bind({});
NewsletterFormStory.args = {
  modifier: 'border p-4 rounded'
};