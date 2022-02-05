import styled from 'styled-components'
import { Slider as MUISlider } from '@mui/material'

export const Slider = styled(MUISlider)`
  width: 100%;
  max-width: 480px;
  color: ${({ theme }) => theme.colors.blue[100]};
  margin-top: 8px;
`
