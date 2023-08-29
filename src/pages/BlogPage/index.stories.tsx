import type { Meta, StoryObj } from '@storybook/react';

import { BlogPage } from '.';

const meta = {
  title: 'Pages/BlogPage',
  component: BlogPage,
  tags: ['autodocs'],
} satisfies Meta<typeof BlogPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
