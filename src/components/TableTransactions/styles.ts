import styled from "styled-components"

export type PriceHighlightStyle = "INCOME" | "OUTCOME"

interface PriceHighlightProps {
  variant: PriceHighlightStyle
}

export const TableTransactionsContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 0 1.5rem;
  max-width: 1120px;
  margin: 4rem auto 0;
`

export const TransationsTable = styled.table`
  width: 100%;
  margin-top: 1.5rem;
  border-collapse: separate;
  border-spacing: 0 0.5rem;

  td {
    cursor: pointer;
    font-weight: 400;
    line-height: 160%;
    padding: 1.25rem 2rem;
    color: ${(props) => props.theme.GRAY_300};
    background-color: ${(props) => props.theme.GRAY_700};

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`

export const PriceHighlight = styled.span<PriceHighlightProps>`
  color: ${(props) =>
  props.variant === "INCOME" ? props.theme.GREEN_300 : props.theme.RED_300  
};
`