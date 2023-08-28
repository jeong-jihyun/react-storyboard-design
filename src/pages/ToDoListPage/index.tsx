import { useContext } from 'react';
import { ToDoListContext } from '../../contexts/ToDoList';
import { ToDoList } from '../../components/templates/ToDoList';
import styled from '@emotion/styled';
import { PageTitle } from '../../components/atoms/PageTitle';
import { ShowInputButton } from '../../components/atoms/ShowInputButton';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #eee;
`;
const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  padding: 32px;
  border-radius: 8px;
`;

const ToDoListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ToDoListPage = () => {
  const { toDoList, onDelete } = useContext(ToDoListContext);
  const navigate = useNavigate();

  return (
    <Container>
      <Contents>
        <ToDoListContainer>
          <PageTitle title="할일목록" />
          <ToDoList toDoList={toDoList} onDelete={onDelete} />
        </ToDoListContainer>
      </Contents>
      <ShowInputButton show={false} onClick={() => navigate('/add')} />
    </Container>
  );
};
