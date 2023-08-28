import styled from '@emotion/styled';

const Container = styled.h1`
  margin-top: 0;
`;
interface Porps {
  readonly title: string;
}
export const PageTitle = ({title}:Porps) => {
  return <Container>{title}</Container>;
};
