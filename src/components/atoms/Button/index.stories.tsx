import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '.';

const meta = {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BlueButton : Story = {
  args: {
    label: '추가',
    color: '#4d61d6',
    height: '41px'
  }
};
export const RedButton : Story = {
  args: {
    label: '삭제',
    color: '#ff0000',
    height: '41px'
  }
};
