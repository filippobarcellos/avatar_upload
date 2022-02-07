import { useState, useCallback, useContext, createContext } from 'react'
import { validFileExtensions } from '../utils/constants'

type Status = 'lde' | 'progress' | 'error' | 'done'
type Event = React.ChangeEvent<HTMLInputElement>

type CropAvatarContextData = {
  image: any
  rawImage: string
  status: Status
  setReset: () => void
  setProgress: () => void
  setError: () => void
  setDone: () => void
  onImageSave: (image: any) => void
  onSelectFile: (event: Event) => void
}

type CropAvatarProviderProps = {
  children: React.ReactNode
}

const CropAvatarContext = createContext({} as CropAvatarContextData)

const CropAvatarProvider = ({ children }: CropAvatarProviderProps) => {
  const [rawImage, setRawImage] = useState('')
  const [image, setImage] = useState()
  const [status, setStatus] = useState<Status>('lde')

  const setReset = useCallback(() => {
    setStatus('lde')
  }, [])

  const setProgress = useCallback(() => {
    setStatus('progress')
  }, [])

  const setDone = useCallback(() => {
    setStatus('done')
  }, [])

  const setError = useCallback(() => {
    setStatus('error')
  }, [])

  const onRawImageSave = (image: string) => {
    setRawImage(image)
  }

  const onImageSave = (image: any) => {
    setImage(image)
  }

  const onSelectFile = (event: Event) => {
    if (event.target && event.target.files && event.target.files.length > 0) {
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

  const values = {
    image,
    rawImage,
    status,
    setReset,
    setError,
    setDone,
    setProgress,
    onImageSave,
    onSelectFile,
  }

  return (
    <CropAvatarContext.Provider value={values}>
      {children}
    </CropAvatarContext.Provider>
  )
}

function useCropAvatar() {
  const context = useContext(CropAvatarContext)

  if (!context) {
    throw new Error('useCropAvatar must be used within a CropAvatarProvider')
  }

  return context
}
export { CropAvatarProvider, useCropAvatar }
