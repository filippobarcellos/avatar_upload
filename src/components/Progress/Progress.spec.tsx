import { screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Progress } from './Progress'
import { renderWithTheme } from '../../utils/tests'

describe('<Progress/>', () => {
  it('should render properly with all information', () => {
    renderWithTheme(<Progress />)
    const cropText = screen.getByText('Crop')
    const saveBtn = screen.getByRole('button', { name: /save button/i })
    const slider = screen.getByLabelText('slider')
    const cropper = screen.getByTestId('container')

    expect(cropText).toBeInTheDocument()
    expect(saveBtn).toBeInTheDocument()
    expect(slider).toBeInTheDocument()
    expect(cropper).toBeInTheDocument()
  })
})
