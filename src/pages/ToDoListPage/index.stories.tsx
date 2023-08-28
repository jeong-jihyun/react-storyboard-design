import type { Meta, StoryObj } from '@storybook/react';

import { ToDoListPage } from '.';
import { BrowserRouter } from 'react-router-dom';

const meta = {
  title: 'Pages/ToDoListPage',
  component: ToDoListPage,
  decorators: [
    (ToDoListPage) => (
      <BrowserRouter>
        <ToDoListPage />
      </BrowserRouter>
    ),
  ],
} satisfies Meta<typeof ToDoListPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { toDoList: ['리엑트 공부하기', 'CDD공부하기', '할일목록 앱 개발하기'] },
};
