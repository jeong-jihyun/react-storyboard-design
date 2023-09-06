import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Container = styled.div`
  color: #000;
  font-size: 0.8rem;
  
  cursor: pointer;
  /* unvisited link */
  &:link {
    color: #000;
    text-decoration: none;
  }

  /* visited link */
  &:visited {
    color: #000;
    text-decoration: none;
  }

  /* mouse over link */
  &:hover {
    color: #000;
    text-decoration: none;
  }

  /* selected link */
  &:active {
    color: #000;
    text-decoration: none;
  }
`;
export const AppTitle = () => {
  return (
    <Container>
      <Link to={'/'}>할일목록앱</Link>
    </Container>
  );
};
