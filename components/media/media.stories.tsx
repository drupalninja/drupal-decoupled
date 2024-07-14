import type { Meta, StoryObj } from '@storybook/react';
import Media from './Media';
import Image from 'next/image';

const meta: Meta<typeof Media> = {
  title: 'Editorial/Media',
  component: Media,
  argTypes: {
    media: { control: 'object' },
  },
};

export default meta;
type Story = StoryObj<typeof Media>;

export const Default: Story = {
  args: {
    media: <Image src="./images/card.webp" width={500} height={300} className="img-fluid rounded" alt="test image" />,
  }
};
