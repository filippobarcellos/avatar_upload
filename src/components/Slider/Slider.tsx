import { SliderProps } from '@mui/material/Slider'
import * as S from './styles'

export function Slider({ ...props }: SliderProps) {
  return <S.Slider {...props} size='small' />
}
