import { useState } from 'react'
import Cropper from 'react-easy-crop'

import { useCropAvatar } from '../../context/CropAvatar'
import { getCroppedImg } from '../../utils/image'

import { Button } from '../Button'
import { CancelButton } from '../CancelButton'
import { Slider } from '../Slider'

import * as S from './styles'

export function Progress() {
  const [croppedAreaPixels, setCroppedAreaPixels] = useState({
    width: 0,
    height: 0,
    x: 0,
    y: 0,
  })
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState<any>(1)

  const { rawImage, setDone, onImageSave } = useCropAvatar()

  const onCropComplete = (
    croppedAreaPercentage: any,
    croppedAreaPixels: any
  ) => {
    setCroppedAreaPixels({
      width: croppedAreaPixels.width,
      height: croppedAreaPixels.height,
      x: croppedAreaPercentage.x,
      y: croppedAreaPixels.y,
    })
  }

  const onSave = async () => {
    const result = await getCroppedImg(rawImage, croppedAreaPixels)

    onImageSave(result)
    setDone()
  }

  return (
    <S.Container>
      <CancelButton />
      <S.CropContainer>
        <Cropper
          image={rawImage}
          crop={crop}
          zoom={zoom}
          aspect={1}
          onCropChange={setCrop}
          onZoomChange={setZoom}
          onCropComplete={onCropComplete}
          cropShape='round'
          showGrid={false}
          style={{
            mediaStyle: {
              width: '100%',
              height: '100%',
              aspectRatio: '1 / 1',
              objectFit: 'cover',
            },
          }}
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
          <Button onClick={onSave}>Save</Button>
        </S.ButtonContainer>
      </S.Content>
    </S.Container>
  )
}
