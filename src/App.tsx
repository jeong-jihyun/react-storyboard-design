import styled from '@emotion/styled';
import { DataView } from './pages/DataView';

//import { InputContainer } from './components/InputContainer';
import { ToDoListContextProvider } from './contexts/ToDoList';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ToDoInput } from './pages/ToDoInput';
import { BlogPage } from './pages/BlogPage';
import { Header } from './components/Header';
import { Home } from './pages/Home';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #eeeeee;
  overflow: scroll;
`;

const NotFound = styled.div`
  text-align: center;
`;
function App() {
  return (
    <Container>
      <ToDoListContextProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<DataView />} />
            <Route path="/add" element={<ToDoInput />} />
            <Route path="/BlogPage" element={<BlogPage/>} />
            <Route path="/CounterApp" element={<Home/>} />
            <Route
              path="*"
              element={
                <NotFound>
                  404
                  <br /> Page Not Found
                </NotFound>
              }
            />
          </Routes>
        </Router>
      </ToDoListContextProvider>
    </Container>
  );
}

export default App;
