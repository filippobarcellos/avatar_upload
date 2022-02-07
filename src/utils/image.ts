function createImage(rawImage: string) {
  return new Promise((resolve, reject) => {
    const image = new Image()
    image.addEventListener('load', () => resolve(image))
    image.addEventListener('error', (error) => reject(error))
    image.src = rawImage
  })
}

function resizeCroopedArea(width: number) {
  if (width >= 300) {
    return 0.5
  }
  if (width >= 250 && width < 300) {
    return 0.6
  }
  if (width >= 200 && width < 250) {
    return 0.7
  }
  return 0.8
}

async function getCroppedImg(imageSrc: string, pixelCrop: any) {
  const image: any = await createImage(imageSrc)
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')

  if (!ctx) return

  const maxSize = Math.max(image.width, image.height)
  const safeArea = 2 * (maxSize / 2)

  canvas.width = safeArea
  canvas.height = safeArea

  ctx.translate(safeArea / 2, safeArea / 2)
  ctx.translate(-safeArea / 2, -safeArea / 2)

  ctx.drawImage(
    image,
    safeArea / 2 - image.width * resizeCroopedArea(pixelCrop.width),
    safeArea / 2 - image.height * 0.5
  )

  const data = ctx.getImageData(0, 0, safeArea, safeArea)

  canvas.width = pixelCrop.width
  canvas.height = pixelCrop.height

  ctx.putImageData(
    data,
    Math.round(0 - safeArea / 2 + image.width * 0.5 - pixelCrop.x),
    Math.round(0 - safeArea / 2 + image.height * 0.5 - pixelCrop.y)
  )

  return canvas.toDataURL('image/jpeg')
}

export { getCroppedImg }
