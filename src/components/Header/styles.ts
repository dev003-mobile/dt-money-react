import styled from "styled-components"

export const HeaderContainer = styled.header`
  padding: 2.5rem 0 7.625rem;
  background-color: ${(props) => props.theme.GRAY_900};
`

export const HeaderContent = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1120px;
  padding: 0 1.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const NewTransactionButton = styled.button`
  border: 0;
  display: flex;
  cursor: pointer;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.25rem;
  background-color: ${(props) => props.theme.GREEN_500};
  transition: background-color 0.3s;

  font-weight: bold;
  line-height: 160%;

  &:hover {
    background-color: ${(props) => props.theme.GREEN_700};
  }
`