import { Done } from '../../components/Done'
import { Empty } from '../../components/Empty'
import { UploadBox } from '../../components/UploadBox'

import * as S from './styles'

export default function Home() {
  return (
    <S.Wrapper>
      <UploadBox>
        <Empty />
      </UploadBox>
    </S.Wrapper>
  )
}
