import { screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

import { CancelButton } from './CancelButton'
import { renderWithTheme } from '../../utils/tests'

const mockedReset = jest.fn()

jest.mock('../../context/CropAvatar', () => {
  return {
    useCropAvatar: () => ({
      setReset: mockedReset,
    }),
  }
})

describe('<CancelButton/>', () => {
  it('should render properly', () => {
    renderWithTheme(<CancelButton />)
    const button = screen.getByRole('button', { name: /close-button/i })
    expect(button).toBeInTheDocument()
  })

  it('should call onReset function when button is clicked', () => {
    renderWithTheme(<CancelButton />)
    const button = screen.getByRole('button', { name: /close-button/i })
    fireEvent.click(button)
    expect(mockedReset).toHaveBeenCalledTimes(1)
  })
})
