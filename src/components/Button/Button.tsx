import * as S from './styles'

type ButtonProps = {
  children: React.ReactNode
  onClick: () => void
}

export function Button({ children, onClick, ...props }: ButtonProps) {
  return (
    <S.Container onClick={onClick} {...props}>
      {children}
    </S.Container>
  )
}
