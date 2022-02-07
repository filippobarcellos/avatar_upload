import { screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Empty } from './Empty'
import { renderWithTheme } from '../../utils/tests'

describe('<Empty/>', () => {
  it('should render properly and display the information needded', () => {
    renderWithTheme(<Empty />)
    const text = screen.getByText(/Organization Logo/i)
    const infoText = screen.getByText(
      /Drop the image here or click to browse./i
    )
    expect(text).toBeInTheDocument()
    expect(infoText).toBeInTheDocument()
  })
})
