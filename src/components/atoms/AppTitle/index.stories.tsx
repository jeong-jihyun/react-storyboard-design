import type { Meta, StoryObj } from '@storybook/react';

import { AppTitle } from '.';
import { BrowserRouter } from 'react-router-dom';

const meta = {
  title: 'Atoms/AppTitle',
  component: AppTitle,
  decorators:[
    (AppTitle)=>(
      <BrowserRouter>
        <AppTitle/>
      </BrowserRouter>
    )
  ],
  parameters:{
    backgrounds:{
      default:'Header background color',
      value:[{name:'Header background color', value:'#304ffe'}]
    }
  }
} satisfies Meta<typeof AppTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default : Story = {
  args: {
    
  }
};
