import { FaImage } from 'react-icons/fa'
import theme from '../../styles/theme'

import * as S from './styles'

export function Done() {
  return (
    <S.Container>
      <S.Avatar />
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
