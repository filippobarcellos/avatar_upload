import { MdClose } from 'react-icons/md'
import theme from '../../styles/theme'
import * as S from './styles'

export function CancelButton() {
  return (
    <S.Container>
      <MdClose size={16} color={theme.colors.gray[200]} />
    </S.Container>
  )
}
