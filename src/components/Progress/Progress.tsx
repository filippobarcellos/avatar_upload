import { Button } from '../Button'
import { CancelButton } from '../CancelButton'

import * as S from './styles'

export function Progress() {
  return (
    <S.Content>
      <CancelButton />
      <S.Avatar />
      <S.Label>Crop</S.Label>
      <Button>Save</Button>
      close
    </S.Content>
  )
}
