//import { useContext } from 'react';
import styled from '@emotion/styled';
import { ToDoItem } from '../../organisms/ToDoItem';
//import { ToDoListContext } from '../../../contexts/ToDoList';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
interface Props {
  readonly toDoList: ReadonlyArray<string>;
  readonly onDelete?: (toDo: string) => void;
}
export const ToDoList = ({ toDoList, onDelete }: Props) => {
  //const { toDoList, onDelete } = useContext(ToDoListContext);

  return (
    <Container>
      {toDoList.map((todo) => (
        <ToDoItem
          key={todo}
          label={todo}
          onDelete={() => {
            if (typeof onDelete === 'function') onDelete(todo);
          }}
        />
      ))}
    </Container>
  );
};
