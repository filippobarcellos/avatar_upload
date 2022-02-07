import { FaImage } from 'react-icons/fa'
import { useCropAvatar } from '../../context/CropAvatar'
import theme from '../../styles/theme'

import * as S from './styles'

export function Done() {
  const { image } = useCropAvatar()

  return (
    <S.Container>
      <S.Avatar src={image} alt='avatar' />
      <S.Content>
        <S.Row>
          <FaImage size={16} color={theme.colors.gray[300]} />
          <S.Label>Organization Logo</S.Label>
        </S.Row>
        <S.Info>Drop the image here or click to browse.</S.Info>
      </S.Content>
    </S.Container>
  )
}
