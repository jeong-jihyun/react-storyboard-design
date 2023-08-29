import styled from '@emotion/styled';
import { ChangeEvent } from 'react';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const FileInput = () => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files: FileList | null = e.target.files;
    if (files) {
      for (let i = 0; i < files.length; i++) {
        const file: File | null = files.item(i);
        console.log(`file[${i}]`, file);
      }
    }
  };
  return (
    <Container>
      {
        //<
      }
      <input type="file" onChange={onChange} multiple accept="image/*" />
    </Container>
  );
};
