import styled from '@emotion/styled';

interface ContainerProps {
  readonly color: string;
  readonly height: string;
}

const Container = styled.button<ContainerProps>`
  border: 0;
  color: #ffffff;
  background-color: ${(props) => props.color};
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 4px;
  min-height: ${(props) => props.height};
  margin-left: 7px;
  
  &:hover {
    background-color: ${(props) => props.color};
    opacity: 0.8;
  }

  &:active {
    box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.2);
  }
`;

interface Props {
  readonly label: string;
  readonly color?: string;
  readonly height?: string;
  readonly onClick?: () => void;
}

export const Button = ({ label, color = '#ff5722', height = '41px', onClick }: Props) => {
  return (
    <Container color={color} onClick={onClick} height={height}>
      {label}
    </Container>
  );
};
