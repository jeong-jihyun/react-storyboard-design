import Container from './components/Container';
import { Title } from './components/Title';
import Contents from './components/Contents';
import { ToDoList } from './components/ToDoList';
import { useState } from 'react';
import { DataView } from './components/DataView';
function App() {
  const [toDoList, setToDoList] = useState(['리엑트 공부하기', '운동하기', '책읽기']);

  const onDelete = (todo: string) => {
    setToDoList(toDoList.filter((item) => item !== todo));
  };
  return (
    <Container>
      <DataView toDoList={toDoList} onDelete={onDelete} />
    </Container>
  );
}

export default App;
