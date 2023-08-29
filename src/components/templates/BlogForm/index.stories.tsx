import type { Meta, StoryObj } from '@storybook/react';

import { BlogForm } from '.';

const meta = {
  title: 'Templates/BlogForm',
  component: BlogForm,
  tags: ['autodocs'],
} satisfies Meta<typeof BlogForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
