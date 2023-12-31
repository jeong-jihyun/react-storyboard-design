import styled from '@emotion/styled';
import { Button } from '../../atoms/Button';
import { Count } from '../../atoms/Count';
import { useState } from 'react';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <Container>
      <Button label="-" onClick={() => setCount(count - 1)} className="btn-primary"/>
      <Count value={count} />
      <Button label="+" onClick={() => setCount(count + 1)} className="btn-primary" />
    </Container>
  );
};
