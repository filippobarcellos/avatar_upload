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

export const Avatar = styled.div`
  width: 114px;
  height: 114px;
  border-radius: 57px;
  background-color: ${({ theme }) => theme.colors.gray[500]};

  display: flex;
  align-items: center;
  justify-content: center;
`

export const LinkButton = styled.a`
  ${({ theme }) => css`
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    color: ${theme.colors.gray[400]};
    font-weight: 500;
    margin-top: 4px;
    text-decoration: underline;
    cursor: pointer;
  `}
`

export const CropContainer = styled.div`
  width: 114px;
  height: 114px;
  border-radius: 57px;
  overflow: hidden;
`

export const Label = styled.span`
  ${({ theme }) => css`
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    color: ${theme.colors.red[100]};
    font-weight: 500;
  `}
`
