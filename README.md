## Tecnologias

Foi utilizado as seguintes ferramentas nesse projeto:

- React.js
- Typescript
- styled-components
- React Testing Library
- react-Icons

## Sobre

É uma aplicação web utilizada para cortar o tamanho de imagens e fazer o download da mesma

[ver online](https://avatar-upload-ikd10qty8-filippobarcellos.vercel.app/)

## Observaçōes

Foi utilizado a context API do React para compartilhar as propriedades entre os componentes. Para o challenge em si aparenta ser um pouco over engineering porém num contexto de uma aplicação real os outputs seriam compartilhados de formas mais fáceis e estaria disponível para um componente pai utilizar. Os dados compartilhados estão descritos abaixo.

```
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
```

## Como rodar o projeto

#### Clonando o projeto

```sh
git clone https://github.com/filippobarcellos/avatar_upload
cd avatar
yarn ou npm install
yarn start ou npm run start
```
