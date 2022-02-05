import { useState } from 'react'

import { Done } from '../../components/Done'
import { Empty } from '../../components/Empty'
import { Progress } from '../../components/Progress'
import { UploadBox } from '../../components/UploadBox'

import * as S from './styles'

export type Event = React.ChangeEvent<HTMLInputElement>
type Status = 'lde' | 'progress' | 'error' | 'done'

export default function Home() {
  const [image, setImage] = useState('')
  const [status, setStatus] = useState<Status>('lde')

  const onSelectFile = (event: Event) => {
    if (event.target.files && event.target.files.length > 0) {
      setStatus('progress')
      const reader = new FileReader()
      reader.readAsDataURL(event.target.files[0])
      reader.addEventListener('load', () => {
        setImage(reader.result as string)
      })
    }
  }

  return (
    <S.Wrapper>
      <UploadBox>
        {status === 'lde' ? (
          <Empty onChange={onSelectFile} />
        ) : (
          <Progress image={image} />
        )}
      </UploadBox>
    </S.Wrapper>
  )
}
