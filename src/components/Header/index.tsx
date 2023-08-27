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
  flex-direction: row;
  padding-left: 10px;
  height: 80px;
  font-weight: bold;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  width: calc(100% - 40px);
`;

const StyledLink = styled(Link)`
  color: #fff;
  font-size: 20px;
  text-decoration: none;
  margin-left: 10px;
`;

const Title = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  color: #fff;
`;

export const Header = () => {
  return (
    <Container>
      <Title>블로그</Title>
      <StyledLink to="/">할일목록앱</StyledLink>
      <StyledLink to="/add">할일추가</StyledLink>
      <StyledLink to="/BlogPage">블로그목록</StyledLink>
    </Container>
  );
};
