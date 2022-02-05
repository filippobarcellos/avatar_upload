import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 32px 16px;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  flex: 1;
`
export const Avatar = styled.img`
  width: 114px;
  height: 114px;
  border-radius: 57px;
  background-color: pink;
`

export const Row = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-bottom: 8px;
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

export const Info = styled.span`
  ${({ theme }) => css`
    font-family: 'Inter', sans-serif;
    font-size: 1.4rem;
    color: ${theme.colors.gray[200]};
  `}
`
