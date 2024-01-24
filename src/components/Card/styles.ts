import styled from "styled-components"
import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from "@phosphor-icons/react"

export type CardStyleProps = "PRIMARY" | "SECONDARY"

interface CardStyle {
  type?: CardStyleProps
}

export const CardContainer = styled.div<CardStyle>`
  gap: 0.75rem;
  display: flex;
  border-radius: 6px;
  flex-direction: column;
  padding: 1.5rem 1rem 1.5rem 1.5rem;
  background-color: ${(props) => 
    props.type === "PRIMARY" ? props.theme.GRAY_600: props.theme.GREEN_700
  };

  header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    span {
      font-size: 0.8rem;
      line-height: 160%;
      color: ${(props) => props.theme.GRAY_300};
    }
  }

  strong {
    font-size: 2rem;
    font-weight: bold;
    line-height: 140%;
    color: ${(props) => props.theme.GRAY_100};
  }
`

export const ArrowCircleUpIcon = styled(ArrowCircleUp)`
  color: ${(props) => props.theme.GREEN_500};
`

export const ArrowCircleDownIcon = styled(ArrowCircleDown)`
  color: ${(props) => props.theme.RED_300};
`

export const CurrencyDollarIcon = styled(CurrencyDollar)`
  color: ${(props) => props.theme.WHITE};
`
