import styled from '@emotion/styled'
import {FileInput} from '../../components/atoms/FileInput'
import {DragDrop} from '../../components/atoms/DragDrop'
import {FileDrop} from '../../components/atoms/FileDrop'
import {Div} from '../../components/atoms/Div'
import {Icon} from '../../components/organisms/Icon'
import {Icon as Icon2} from '../../components/atoms/Icon'
import * as D from '../../data'
import {Avatar} from '../../components/atoms/Avatar'
const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1pt solid #000;
`

export const TestPage = () => {
  const avatar = D.range(0, 10).map(index => (
    <Avatar
      className="inline-block -ml-6 border-4 border-white"
      key={index}
      src={D.randomAvatar()}
    />
  ))

  const icons = ['home', 'search', 'settings', 'favorite'].map(name => (
    <Icon2 key={name} name={name} className="mr-2" />
  ))

  return (
    <Container>
      <FileInput />
      <DragDrop />
      <FileDrop />
      <Div>테스트</Div>
      <Icon name="home" className="btn-primary" />
      <Icon2 name="face" className="md-18" />
      <Div className="px-12 py-4 m-8 bg-blue-300">{avatar}</Div>
      <Div className="absolute p-3 text-white bg-blue-500">{icons}</Div>
    </Container>
  )
}
