import { TransactionContainer } from "./styles"
import { Header } from "../../components/Header"
import { Summary } from "../../components/Summary"
import { TableTransactions } from "../../components/TableTransactions"

export function Transactions() {
  return (
    <TransactionContainer>
      <Header />
      <Summary />
      <TableTransactions />
    </TransactionContainer>
  )
}