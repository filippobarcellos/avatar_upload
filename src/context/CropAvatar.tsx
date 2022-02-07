import { useState, useCallback, useContext, createContext } from 'react'

type Status = 'lde' | 'progress' | 'error' | 'done'

type CropAvatarContextData = {
  image: any
  rawImage: string
  status: Status
  setReset: () => void
  setProgress: () => void
  setError: () => void
  setDone: () => void
  onRawImageSave: (image: string) => void
  onImageSave: (image: any) => void
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

  const values = {
    image,
    rawImage,
    status,
    setReset,
    setError,
    setDone,
    setProgress,
    onRawImageSave,
    onImageSave,
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
