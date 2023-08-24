import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background-color: #6c6c6c;
  padding: 8px 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 10px;
  height: 80px;
  font-weight: bold;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
`;
const StyledLink = styled(Link)`
  color: #fff;
  font-size: 20px;
  text-decoration: none;
`;
export const Header = () => {
  return (
    <Container>
      <StyledLink to="/">할일목록앱</StyledLink>
    </Container>
  );
};
