import { CancelButton } from '../CancelButton'
import { useCropAvatar } from '../../context/CropAvatar'
import error from '../../assets/error.png'

import * as S from './styles'

export function Error() {
  const { setReset } = useCropAvatar()

  const onResetUpload = () => setReset()

  return (
    <S.Container>
      <CancelButton />
      <S.Avatar>
        <img src={error} />
      </S.Avatar>

      <S.Content>
        <S.Label>Sorry, the upload failed</S.Label>
        <S.LinkButton onClick={onResetUpload}>Try again</S.LinkButton>
      </S.Content>
    </S.Container>
  )
}
