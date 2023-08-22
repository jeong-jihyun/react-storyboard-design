import Container from './components/Container';
import { useState } from 'react';
import { DataView } from './components/DataView';
import { TextInput } from './components/TextInput';
import { Button } from './components/Button';
function App() {
  const [toDoList, setToDoList] = useState(['리엑트 공부하기', '운동하기', '책읽기']);
  const [toDo, setToDo] = useState('');

  const onDelete = (todo: string) => {
    setToDoList(toDoList.filter((item) => item !== todo));
  };
  function onAdd(): void {
    if (toDo === '') return;
    setToDoList([...toDoList, toDo]);
    setToDo('');
  }

  return (
    <Container>
      <DataView toDoList={toDoList} onDelete={onDelete} />
      <TextInput value={toDo} onChange={setToDo}/>
      <Button label="추가" color="#5a4cd6" onClick={onAdd}/>
    </Container>
  );
}

export default App;
