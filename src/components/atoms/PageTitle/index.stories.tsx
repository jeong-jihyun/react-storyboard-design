import type { Meta, StoryObj } from '@storybook/react';

import { PageTitle } from '.';

const meta = {
  title: 'Atoms/PageTitle',
  component: PageTitle,
} satisfies Meta<typeof PageTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default : Story = {
  args: {
    title:'Todo List'
  }
};
