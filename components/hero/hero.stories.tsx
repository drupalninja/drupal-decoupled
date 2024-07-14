import type { Meta, StoryObj } from '@storybook/react';
import Hero from './Hero';
import Image from 'next/image';

const meta: Meta<typeof Hero> = {
  title: 'Editorial/Hero',
  component: Hero,
  argTypes: {
    modifier: { control: 'text' },
    media: { control: 'object' },
    title: { control: 'text' },
    bodyText: { control: 'text' },
    layout: {
      control: { type: 'radio', options: ['image_top', 'image_bottom'] }
    },
    button: {
      control: {
        type: 'object',
        args: {
          url: { control: 'text' },
          text: { control: 'text' },
          icon: { control: 'text' }
        }
      }
    },
    button2: {
      control: {
        type: 'object',
        args: {
          url: { control: 'text' },
          text: { control: 'text' },
          icon: { control: 'text' }
        }
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof Hero>;

export const Default: Story = {
  args: {
    modifier: '',
    media: <Image src="./images/hero.png" width={1280} height={452} className="img-fluid rounded" alt="test image" />,
    title: 'Phasellus <strong>auctor</strong>, turpis',
    bodyText:
      'This copy is optional, if nothing is entered nothing will display. Facit nulla in vulputate vulputate aliquam. Commodo esse habent tation nam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed orci lacus.',
    layout: 'image_top',
    button: {
      url: '#',
      text: 'Link 1',
      icon: 'arrow_right_alt'
    },
    button2: {
      url: '#',
      text: 'Link 2',
      icon: 'arrow_right_alt'
    }
  }
};
