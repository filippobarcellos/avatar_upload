import { useCropAvatar } from '../../context/CropAvatar'
import * as S from './styles'

type UploadBoxProps = {
  children: React.ReactNode
}

export function UploadBox({ children }: UploadBoxProps) {
  const { status } = useCropAvatar()

  const hideBorder = status === 'progress' || status === 'error'

  return <S.Container hideBorder={hideBorder}>{children}</S.Container>
}
