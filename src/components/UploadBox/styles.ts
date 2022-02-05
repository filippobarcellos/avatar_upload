import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.gray[50]};
    border: 2px dashed ${theme.colors.gray[100]};
    border-radius: 8px;
    max-width: 560px;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
  `}
`
