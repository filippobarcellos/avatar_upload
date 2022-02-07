import { screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Error } from './Error'
import { renderWithTheme } from '../../utils/tests'

const mockedReset = jest.fn()

jest.mock('../../context/CropAvatar', () => {
  return {
    useCropAvatar: () => ({
      setReset: mockedReset,
    }),
  }
})

describe('<Error/>', () => {
  it('should render properly and display the information needded', () => {
    renderWithTheme(<Error />)
    const text = screen.getByText(/Sorry, the upload failed/i)
    const link = screen.getByText(/try again/i)
    expect(text).toBeInTheDocument()
    expect(link).toBeInTheDocument()
  })

  it('should call onReset function when link button is clicked', () => {
    renderWithTheme(<Error />)
    const link = screen.getByText(/try again/i)
    fireEvent.click(link)
    expect(mockedReset).toHaveBeenCalledTimes(1)
  })
})
