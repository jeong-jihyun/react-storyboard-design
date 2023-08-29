import type { Meta, StoryObj } from '@storybook/react';

import { ShowInputButton } from '.';

const meta = {
  title: 'Atoms/ShowInputButton',
  component: ShowInputButton,
  tags: ['autodocs'],
} satisfies Meta<typeof ShowInputButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    show: true,
  },
};
