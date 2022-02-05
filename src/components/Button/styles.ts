import styled, { css } from 'styled-components'

export const Container = styled.button`
  ${({ theme }) => css`
    height: 32px;
    padding: 0 36px;
    text-align: center;
    border: none;
    background-color: ${theme.colors.gray[400]};
    border-radius: 16px;
    font-size: 14px;
    color: ${theme.colors.white[100]};
    font-weight: bold;
    cursor: pointer;
  `}
`
