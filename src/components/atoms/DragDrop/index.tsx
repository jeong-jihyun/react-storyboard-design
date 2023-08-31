import type { DragEvent } from 'react';
import styled from '@emotion/styled';
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Containers = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1pt solid #000;
`;
export const DragDrop = () => {
  const onDragStart = (e: DragEvent<HTMLElement>) => {
    console.log('onDragStat', e.dataTransfer);
  };
  const onDragEnd = (e: DragEvent<HTMLElement>) => {
    console.log('onDragEnd', e.dataTransfer);
  };
  const onDrag = (e: DragEvent) => {
    e.preventDefault();
  };
  const onDragOver = (e: DragEvent) => {
    e.preventDefault();
    console.log('onDragOver', e.dataTransfer);
  };
  return (
    <Container>
      <Containers draggable onDragStart={onDragStart} onDragEnter={onDragEnd}>
        Drag Me
      </Containers>
      <Containers onDrag={onDrag} onDragOver={onDragOver}>
        Drag Over Me
      </Containers>
    </Container>
  );
};
