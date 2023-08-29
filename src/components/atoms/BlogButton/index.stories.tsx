import type { Meta, StoryObj } from '@storybook/react';

import { BlogButton } from '.';

const meta = {
  title: 'Atoms/BlogButton',
  component: BlogButton,
  tags: ['autodocs'],
} satisfies Meta<typeof BlogButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label:'버튼 라벨'
  },
};
