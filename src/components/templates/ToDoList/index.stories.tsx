import type { Meta, StoryObj } from '@storybook/react';

import { ToDoList } from '.';

const meta = {
  title: 'Templates/ToDoList',
  component: ToDoList,
} satisfies Meta<typeof ToDoList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    toDoList:['리엑트 공부하기', 'CDD공부하기','할일목록 앱 개발하기']
  },
};
