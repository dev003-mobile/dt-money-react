import logoIgnite from "../../assets/logo-with-name.svg"
import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles"

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoIgnite}></img>
        <NewTransactionButton>
          Nova transação
        </NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  )
}