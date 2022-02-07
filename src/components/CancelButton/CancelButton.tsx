import { MdClose } from 'react-icons/md'
import { useCropAvatar } from '../../context/CropAvatar'
import theme from '../../styles/theme'
import * as S from './styles'

export function CancelButton() {
  const { setReset } = useCropAvatar()

  const onResetUpload = () => setReset()

  return (
    <S.Container onClick={onResetUpload} aria-label='close-button'>
      <MdClose size={16} color={theme.colors.gray[200]} />
    </S.Container>
  )
}
