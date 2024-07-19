import type { Meta, StoryObj } from '@storybook/react';
import ParagraphMedia from './ParagraphMedia';
import { FragmentOf } from 'gql.tada';
import { ParagraphMediaFragment } from '@/graphql/fragments/paragraph';

const meta: Meta<typeof ParagraphMedia> = {
  title: 'Editorial/Paragraph Media',
  component: ParagraphMedia,
  argTypes: {
    paragraph: { control: 'object' },
  },
};

export default meta;
type Story = StoryObj<typeof ParagraphMedia>;

export const Default: Story = {
  args: {
    paragraph: {
      media: {
        image: {
          url: './images/card.webp',
        },
      },
    } as FragmentOf<typeof ParagraphMediaFragment>,
  }
};
