import * as S from './styles'

type ButtonProps = {
  children: React.ReactNode
  onClick: () => void
}

export function Button({ children, onClick }: ButtonProps) {
  return <S.Container onClick={onClick}>{children}</S.Container>
}
