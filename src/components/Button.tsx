import styled from '@emotion/styled';

const Contaier = styled.button`
  border: 0;
  color: #fff;
  background-color: #ff5722;
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 4px;

  &:hover {
    background-color: #ff5722;
    opacity: 0.8;
  }
  &:active {
    box-shadow: inset 5px 5px 10px 10px rgba(0, 0, 0, 0.2);
  }
`;
interface Props {
  readonly label: string;
  readonly onClick?: () => void;
}
export const Button = (props: Props) => {
  return <Contaier onClick={props.onClick}>{props.label}</Contaier>;
};
