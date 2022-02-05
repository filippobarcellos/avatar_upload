import { useState } from 'react'
import Cropper from 'react-easy-crop'

import { Button } from '../Button'
import { CancelButton } from '../CancelButton'
import { Slider } from '../Slider'

import * as S from './styles'

type ProgressProps = {
  image: string
}

export function Progress({ image }: ProgressProps) {
  const [croppedArea, setCroppedArea] = useState(null)
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState<any>(1)

  const onCropComplete = (
    croppedAreaPercentage: any,
    croppedAreaPixels: any
  ) => {
    setCroppedArea(croppedAreaPixels)
  }
  return (
    <S.Container>
      <CancelButton />
      <S.CropContainer>
        <Cropper
          image={image}
          crop={crop}
          zoom={zoom}
          aspect={1}
          onCropChange={setCrop}
          onZoomChange={setZoom}
          onCropComplete={onCropComplete}
          cropShape='round'
          showGrid={false}
          disableAutomaticStylesInjection
        />
      </S.CropContainer>
      <S.Content>
        <S.Label>Crop</S.Label>
        <Slider
          min={1}
          max={3}
          step={0.1}
          value={zoom}
          onChange={(e, zoom) => setZoom(zoom)}
        />
        <S.ButtonContainer>
          <Button>Save</Button>
        </S.ButtonContainer>
      </S.Content>
    </S.Container>
  )
}
