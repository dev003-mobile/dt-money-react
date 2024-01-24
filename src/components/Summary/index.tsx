import { Card } from "../Card"
import { SummaryContainer } from "./styles"

export function Summary() {
  return (
    <SummaryContainer>
      <Card title="Entradas" amount="17.400,00" isCircleUpIcon/>
      <Card title="Saídas" amount="1.259,00" />
      <Card title="Total" amount="16.141,00" isCurrencyIcon type="SECONDARY"/>
    </SummaryContainer>
  )
}