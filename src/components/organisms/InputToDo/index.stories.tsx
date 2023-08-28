import type { Meta, StoryObj } from '@storybook/react';

import { InputToDo } from '.';
import { BrowserRouter } from 'react-router-dom';

const meta = {
  title: 'Organisms/InputToDo',
  component: InputToDo,
  decorators:[
    (InputToDo)=>(
      <BrowserRouter>
        <InputToDo/>
      </BrowserRouter>
    )
  ],
} satisfies Meta<typeof InputToDo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
