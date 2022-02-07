import { Done } from '../../components/Done'
import { Empty } from '../../components/Empty'
import { Progress } from '../../components/Progress'
import { UploadBox } from '../../components/UploadBox'
import { Error } from '../../components/Error'
import { useCropAvatar } from '../../context/CropAvatar'

import * as S from './styles'

export default function Home() {
  const { status } = useCropAvatar()

  return (
    <S.Wrapper>
      <UploadBox>
        {status === 'done' && <Done />}
        {status === 'lde' && <Empty />}
        {status === 'error' && <Error />}
        {status === 'progress' && <Progress />}
      </UploadBox>
    </S.Wrapper>
  )
}
