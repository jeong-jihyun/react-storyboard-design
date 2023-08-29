import { useState, useContext } from 'react';
import styled from '@emotion/styled';
import { TextInput } from '../../atoms/TextInput';
import { Button } from '../../atoms/Button';
import { Title } from '../../atoms/Title';
import { ToDoListContext } from '../../../contexts/ToDoList';
import { useNavigate } from 'react-router-dom';
import { ShowInputButton } from '../../atoms/ShowInputButton';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Contents = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #ffffff;
  padding: 32px;
  border-radius: 8px;
  z-index: 1;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgb(0 0 0 / 75%);
`
export const ToDoInput = () => {
  const navigate = useNavigate();

  const { onAdd } = useContext(ToDoListContext);
  const [toDo, setToDo] = useState('');

  const onAddTodo = () => {
    if (toDo === '') return;

    onAdd(toDo);
    setToDo('');
    navigate('/');
  };

  return (
    <Container>
      <Background/>
      <Contents>
        <Title label="할 일 추가" />
        <InputContainer>
          <TextInput value={toDo} onChange={setToDo} />
          <Button label="추가" color="#304FFE" onClick={onAddTodo} />
        </InputContainer>
      </Contents>
      <ShowInputButton show={true} onClick={() => navigate('/')} />
    </Container>
  );
};