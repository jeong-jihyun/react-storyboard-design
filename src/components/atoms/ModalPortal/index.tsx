import {useEffect, useRef, useState} from 'react'

interface IProps {
  children: React.ReactNode
}

export const ModalPotal: React.FC<IProps> = ({children}:IProps) => {
  const ref = useRef<Element | null>()
  const [mounted] = useState(false)

  useEffect(() => {
    if (document) {
      const dom = document.querySelector('#root-modal')
      ref.current = dom
    }
  }, [])

  if (ref.current && mounted)
  return (
    <>
      {children}
    </>
  )
}
