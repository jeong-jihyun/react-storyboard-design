import styled from '@emotion/styled';
import React from 'react';
import { Button } from './Button';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
`;

const Label = styled.div`
  flex: 1;
  font-size: 1.2rem;
  margin-right: 16px;
`;

interface Props {
  readonly label: string;
  readonly onDelete?: () => void;
}
const ToDoItem = ({ label, onDelete }: Props) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Button label="삭제" onClick={onDelete}></Button>
    </Container>
  );
};

export default ToDoItem;
