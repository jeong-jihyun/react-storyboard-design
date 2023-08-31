// import styled from '@emotion/styled';
import { ButtonHTMLAttributes, DetailedHTMLProps, FC, PropsWithChildren } from 'react';

// interface ContainerProps {
//   readonly color: string;
//   readonly height: string;
// }

// const Container = styled.div<ContainerProps>`
//   border: 0;
//   color: #ffffff;
//   background-color: ${(props) => props.color};
//   cursor: pointer;
//   padding: 8px 16px;
//   border-radius: 4px;
//   min-height: ${(props) => props.height};
//   margin-left: 7px;

//   &:hover {
//     background-color: ${(props) => props.color};
//     opacity: 0.8;
//   }

//   &:active {
//     box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.2);
//   }
// `;

export type ReactButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export type ButtonProps = ReactButtonProps & {
  readonly label: string;
  readonly className?: string;
  readonly onClick?: () => void;
};

// interface Props {
//   readonly label: string;
//   readonly color?: string;
//   readonly height?: string;
//   readonly onClick?: () => void;
// }

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  label,
  onClick,
  className : _className,
  ...buttonProps
}) => {
  const className = ['btn', _className].join(' ');
  console.log(buttonProps);
  return (
    <button {...buttonProps} className={className} onClick={onClick}>
      {label}
    </button>
  );
};
