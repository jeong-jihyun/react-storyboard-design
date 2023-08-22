import styled from '@emotion/styled';
import React from 'react';

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const BackGround = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgb(0 0 0 /75%);
`;

const Contents = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 32px;
    border-radius: 8px;
    z-index: 1;
`
const InputContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
interface Props{
    readonly onAdd : (toDo:string) => void;
}
export const ToDoInput = ({onAdd}: Props ) => {
  return <div>ToDoInput</div>;
};

export default ToDoInput;
