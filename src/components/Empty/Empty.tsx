import { FaImage } from 'react-icons/fa'
import { useCropAvatar } from '../../context/CropAvatar'
import theme from '../../styles/theme'
import { validFileExtensions } from '../../utils/constants'

import * as S from './styles'

export type Event = React.ChangeEvent<HTMLInputElement>

export function Empty() {
  const { setError, setProgress, onRawImageSave } = useCropAvatar()

  const onSelectFile = (event: Event) => {
    if (event.target.files && event.target.files.length > 0) {
      const invalidFile = !validFileExtensions.includes(
        event.target.files[0].type
      )

      if (invalidFile) {
        setError()
        return
      }

      setProgress()
      const reader = new FileReader()
      reader.readAsDataURL(event.target.files[0])
      reader.addEventListener('load', () => {
        onRawImageSave(reader.result as string)
      })
    }
  }
  return (
    <S.Content>
      <S.Input type='file' onChange={onSelectFile} />
      <S.Row>
        <FaImage size={16} color={theme.colors.gray[300]} />
        <S.Label>Organization Logo</S.Label>
      </S.Row>
      <S.Info>Drop the image here or click to browse.</S.Info>
    </S.Content>
  )
}
