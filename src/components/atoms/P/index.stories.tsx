import type { Meta, StoryObj } from '@storybook/react';

import { P } from '.';

const meta = {
  title: 'Atoms/P',
  component: P,
  tags: ['autodocs'],
} satisfies Meta<typeof P>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children:(<div></div>)
  },
};
