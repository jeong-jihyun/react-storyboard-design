import styled from '@emotion/styled'
import {Link} from 'react-router-dom'
import {AppTitle} from '../../atoms/AppTitle'
import {useState} from 'react'

// const Container = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   right: 0;
//   background-color: #6c6c6c;
//   padding: 8px 0;
//   margin: 0;
//   display: flex;
//   align-items: center;
//   flex-direction: row;
//   padding-left: 10px;
//   height: 80px;
//   font-weight: bold;
//   font-family: Verdana, Geneva, Tahoma, sans-serif;
//   width: calc(100% - 40px);
// `;
const Container = styled.div`
  height: 42px;
  margin-right: 8px;
  padding: 0 16px;
  border: 0;
  border-radius: 21px;
  background-color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 100%;
  /* border-bottom: 1px solid skyblue; */
  &:hover {
    background-color: #ccc;
  }
  .header-auth-buttons {
    .header-sign-up-button {
      height: 42px;
      margin-right: 8px;
      padding: 0 16px;
      border: 0;
      border-radius: 21px;
      background-color: white;
      box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.18);
      cursor: pointer;
      outline: none;
      font-size: 0.8rem;
      &:hover {
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.12);
      }
    }
    .header-login-button {
      height: 42px;
      margin-right: 8px;
      padding: 0 16px;
      border: 0;
      box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.18);
      border-radius: 21px;
      background-color: white;
      cursor: pointer;
      outline: none;
      font-size: 0.8rem;
      &:hover {
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.12);
      }
    }
    .modal-wrapper {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      position: fixed;
      top: 0;
      left: 0;
      .modal-background {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.75);
        z-index: 10;
      }
      .modal-contents {
        width: 400px;
        height: 400px;
        background-color: white;
        z-index: 11;
      }
    }
  }
`
const StyledLink = styled(Link)`
  color: #000;
  font-size: 0.8rem;
  text-decoration: none;
  margin-left: 10px;
`

export const Header: React.FC = () => {
  // 모달 제어를 위한 값을 설정
  const [modalOpened, setModalOpened] = useState(true)

  return (
    <Container>
      <AppTitle />
      <StyledLink to="/add">할일추가</StyledLink>
      <StyledLink to="/BlogPage">블로그목록</StyledLink>
      <StyledLink to="/CounterApp">카운터앱</StyledLink>
      <StyledLink to="/test">테스트</StyledLink>

      <div className="header-auth-buttons">
        <button type="button" className="header-sign-up-button">
          회원가입
        </button>
        <button type="button" className="header-login-button">
          로그인
        </button>
      </div>
      {modalOpened && (
        <div className="modal-background" role="presentation" onClick={() => setModalOpened(false)}>
          <div className="modal-contents" />
        </div>
      )}
    </Container>
  )
}
