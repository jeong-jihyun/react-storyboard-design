import styled from '@emotion/styled';
import { Title } from '../../components/atoms/Title';
import { ToDoList } from '../../components/ToDoList';
// ShowInputButton Add
// useNavigate Add
import { ShowInputButton } from '../../components/ShowInputButton';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  padding: 32px;
  border-radius: 8px;
`;

export const DataView = () => {
  // useNavigate Use
  const navigate = useNavigate();

  return (
    <Container>
      <Title label="할 일 목록" />
      <ToDoList />
      {
        /* ShowInputButton Add*/
      }
      <ShowInputButton show={false} onClick={()=> navigate('/add')} />
    </Container>
  );
};
