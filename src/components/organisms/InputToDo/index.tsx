import styled from '@emotion/styled';
import { Button } from '../../atoms/Button';
import { Input } from '../../atoms/Input';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const InputToDo = () => {
  const [toDo, setToDo] = useState('');
  const navigate = useNavigate();

  const onAdd = () => {
    setToDo('');
    navigate('/');
  };
  return (
    <Container>
      <Input value={toDo} onChange={setToDo} />
      <Button label="추가" color="#304FFE" onClick={onAdd} />
    </Container>
  );
};
