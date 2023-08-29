import type { Meta, StoryObj } from '@storybook/react';
import { ToDoInput } from '.';
import { BrowserRouter } from 'react-router-dom';

const meta = {
  title: 'Templates/ToDoInput',
  component: ToDoInput,
  tags: ['autodocs'],
  decorators: [
    (ToDoInput) => (
      <BrowserRouter>
        <ToDoInput />
      </BrowserRouter>
    ),
  ],
} satisfies Meta<typeof ToDoInput>;

export default meta;
type Story = StoryObj<typeof meta>;

//  샘플 데이터를 생성
export const Default: Story = {
  args: {},
};
