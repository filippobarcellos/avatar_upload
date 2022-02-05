import * as S from './styles'

type ButtonProps = {
  children: React.ReactNode
}

export function Button({ children }: ButtonProps) {
  return <S.Container>{children}</S.Container>
}
