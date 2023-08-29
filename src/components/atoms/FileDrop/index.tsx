import styled from '@emotion/styled';
import type { DragEvent } from 'react';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const H1 = styled.h1`
  font-weight: bold;
`;
export const FileDrop = () => {
  const onDragOver = (e: DragEvent) => e.preventDefault();
  const onDrop = (e: DragEvent) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files) {
      for (let i = 0; i < files.length; i++) {
        const file: File | null = files.item(i);
        console.log(`file[$(i)]`, file);
      }
    }
  };
  return (
    <>
      <Container onDrop={onDrop} onDragOver={onDragOver}>
        <H1>Drop image files over Me</H1>
      </Container>
    </>
  );
};
