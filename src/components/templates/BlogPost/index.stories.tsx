import type { Meta, StoryObj } from '@storybook/react';

import { BlogPost } from '.';

const meta = {
  title: 'Templates/BlogPost',
  component: BlogPost,
  tags: ['autodocs'],
} satisfies Meta<typeof BlogPost>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default : Story = {
  args: {
    title: '타이틀',
    body: '본문 내용',
  }
};
