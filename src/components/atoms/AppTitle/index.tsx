import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Container = styled.div`
  color: #fff;
  font-size: 20px;
  
  cursor: pointer;
  /* unvisited link */
  a:link {
    color: #fff;
    text-decoration: none;
  }

  /* visited link */
  a:visited {
    color: #fff;
    text-decoration: none;
  }

  /* mouse over link */
  a:hover {
    color: #fff;
    text-decoration: none;
  }

  /* selected link */
  a:active {
    color: #fff;
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
