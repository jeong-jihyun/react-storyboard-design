import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '.';

const meta = {
  title: 'Atoms/Button',
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Label : Story = {
  args: {
    label: 'Button',
    color: '#4d61d6',
    height: '41px'
  }
};
