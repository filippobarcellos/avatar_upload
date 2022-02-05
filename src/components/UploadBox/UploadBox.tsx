import * as S from './styles'

type UploadBoxProps = {
  children: React.ReactNode
}

export function UploadBox({ children }: UploadBoxProps) {
  return <S.Container>{children}</S.Container>
}
