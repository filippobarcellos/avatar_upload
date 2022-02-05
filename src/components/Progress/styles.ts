import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 100%;
  padding: 32px;
  position: relative;
  @media only screen and (max-width: 580px) {
    flex-direction: column;
  }
`

export const Content = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 32px;
  @media only screen and (max-width: 580px) {
    margin-left: 0;
  }
`

export const CropContainer = styled.div`
  width: 114px;
  height: 114px;
  border-radius: 57px;
  overflow: hidden;
`

export const ButtonContainer = styled.div`
  max-width: 120px;
  align-self: flex-end;
  margin-top: 12px;
`

export const Label = styled.span`
  ${({ theme }) => css`
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    color: ${theme.colors.gray[300]};
    font-weight: 500;
  `}
`
