import { ThemeProvider } from 'styled-components'

import { CropAvatarProvider } from './context/CropAvatar'

import Home from './pages/Home'
import theme from './styles/theme'

export default function App() {
  return (
    <CropAvatarProvider>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </CropAvatarProvider>
  )
}
