import React from 'react'
import { render, RenderResult } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import theme from '../styles/theme'

const renderWithTheme = (children: React.ReactNode): RenderResult =>
  render(<ThemeProvider theme={theme}>{children}</ThemeProvider>)

const mockedReset = jest.fn()

jest.mock('../context/CropAvatar', () => {
  return {
    useCropAvatar: () => ({
      setReset: mockedReset,
    }),
  }
})

export { renderWithTheme, mockedReset }
