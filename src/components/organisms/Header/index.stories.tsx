import type { Meta, StoryObj } from '@storybook/react';

import { Header } from '.';
import { BrowserRouter } from 'react-router-dom';

const meta = {
  title: 'Organisms/Header',
  component: Header,
  decorators:[
    (Header)=>(
      <BrowserRouter>
        <Header/>
      </BrowserRouter>
    )
  ],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
