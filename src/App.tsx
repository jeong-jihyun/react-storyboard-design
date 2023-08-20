import React from 'react';
import styled from '@emotion/styled';
/**
const Container = styled.div`
  text-align: center;
`;
 */
const Header = styled.header`
  background-color: #282c34;
  min-height: 10vh;
  display: flex;
  flex-direction: column;
  color: #fff;
  justify-centent: center;
  font-size: calc(10px + 2vmin);
`;

const AppLogo = styled.img`
  height: 40vmin;
  pointer-events: none;

  @media (prefers-reduced-motion: no-preference) {
    animation: App-logo-spin infinite 20s linear;
  }

  @keyframes App-logo-spin {
    from {
      transform: rotate(@deg);
    }
    to {
      transform: rotate(36 @deg);
    }
  }
`;

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  margin-bottom: 32px;
`;

const Label = styled.span`
  margin: 0 16px;
  font-size: 1.2rem;
`
function App() {
  return (
    <div>
      <Container>
        <Header>
          <AppLogo></AppLogo>
        </Header>
        <Container>
          <Title>테스트</Title>
          <Label></Label>
        </Container>
      </Container>
    </div>
  );
}

export default App;
