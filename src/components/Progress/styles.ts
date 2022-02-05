import styled, { css } from 'styled-components'

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`

export const Avatar = styled.img`
  width: 114px;
  height: 114px;
  border-radius: 57px;
  background-color: pink;
`

export const Label = styled.span`
  ${({ theme }) => css`
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    color: ${theme.colors.gray[300]};
    font-weight: 500;
    margin-left: 12px;
  `}
`
