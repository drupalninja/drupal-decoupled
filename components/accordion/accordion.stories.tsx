import type { Meta, StoryObj } from '@storybook/react';
import Accordion from './Accordion';

const meta: Meta<typeof Accordion> = {
  title: 'Editorial/Accordion Group',
  component: Accordion,
  argTypes: {
    modifier: {
      control: 'text',
      description: 'Modifier class for the accordion group',
    },
    accordionItems: {
      description:
        'Define the list of items containing the title and content of each accordion',
      control: 'object',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  args: {
    modifier: '',
    accordionItems: [
      {
        heading: 'Curabitur aliquet quam id dui posuere blandit.',
        content: (
          <p>
            Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.
            Proin eget tortor risus. Donec rutrum congue leo eget malesuada. Donec
            sollicitudin molestie malesuada. Curabitur non nulla sit amet nisl
            tempus convallis quis ac lectus.
          </p>
        ),
        accordionInstance: '1',
      },
      {
        heading: 'Curabitur aliquet quam',
        content: (
          <p>
            Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.
            Proin eget tortor risus. Donec rutrum congue leo eget malesuada. Donec
            sollicitudin molestie malesuada. Curabitur non nulla sit amet nisl
            tempus convallis quis ac lectus.
          </p>
        ),
        accordionInstance: '2',
      },
      {
        heading:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu cursus euismod quis viverra nibh cras pulvinar?',
        content: (
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Est sit
            amet facilisis magna etiam tempor orci. Auctor eu augue ut lectus arcu
            bibendum at varius. Risus ultricies tristique nulla aliquet enim tortor
            at auctor.
          </p>
        ),
        accordionInstance: '3',
      },
    ],
  },
};
