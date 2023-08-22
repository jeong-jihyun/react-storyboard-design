import styled from '@emotion/styled';

const Container = styled.div`
  /* height: 100vh; */
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  /* background-color: #eee; */
`;
const Label = styled.h1`
  margin-top: 0;
`;

interface Props {
  readonly label: string;
}
export const Title = ({ label }: Props) => {
  return (
    <Container>
      <Label>{label}</Label>
    </Container>
  );
};
