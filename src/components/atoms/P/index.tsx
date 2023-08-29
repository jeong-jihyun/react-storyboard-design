import { ReactNode } from 'react';

export interface Props {
  children?: ReactNode;
}

export const P = ({ children }: Props) => {
  // eslint-disable-next-line react/no-children-prop
  return <p children={children} />;
};
