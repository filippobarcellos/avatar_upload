import { screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Done } from './Done'
import { renderWithTheme } from '../../utils/tests'

describe('<Done/>', () => {
  it('should render properly and display the information needded', () => {
    renderWithTheme(<Done />)
    const text = screen.getByText(/Organization Logo/i)
    const infoText = screen.getByText(
      /Drop the image here or click to browse./i
    )
    expect(text).toBeInTheDocument()
    expect(infoText).toBeInTheDocument()
  })
})
