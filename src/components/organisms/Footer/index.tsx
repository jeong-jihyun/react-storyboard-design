import styled from '@emotion/styled'
import {Router} from 'react-router-dom'

const Container = styled.footer`
  width: 100%;
  height: 53px;
  position: fixed;
  bottom: 0;
  border-top: 1pt solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;

  .footer-button {
    font-size: 32px;
    font-weight: bold;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    width: 32px;
    height: 32px;
    border-radius: 5px;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    padding: 0;
    line-height: 0;
    outline: none;
  }
`
export const Footer: React.FC = () => {
  return (
    <Container>
      <button type="button" className="footer-button" onClick={e => console.log(e)}>+</button>
    </Container>
  )
}
