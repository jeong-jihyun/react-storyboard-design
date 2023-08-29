import styled from '@emotion/styled';
import { FileInput } from '../../components/atoms/FileInput';
import { DragDrop } from '../../components/atoms/DragDrop';
import { FileDrop } from '../../components/atoms/FileDrop';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    border:1pt solid #000;
`;

export const TestPage = () => {
  return (
    <Container>
      <FileInput/>
      <DragDrop/>
      <FileDrop/>
    </Container>
  );
};
