import { 
  CardContainer, 
  CardStyleProps,
  ArrowCircleUpIcon, 
  CurrencyDollarIcon,
  ArrowCircleDownIcon,
} from "./styles"

type Props = {
  title: string
  amount: string
  isCircleUpIcon?: boolean
  isCurrencyIcon?: boolean
  type?: CardStyleProps
}

export function Card({ title, amount, type = "PRIMARY", isCircleUpIcon = false, isCurrencyIcon = false} : Props) {
  return (
    <CardContainer type={type}>
      <header>
        <span> { title } </span>
        { isCircleUpIcon ? 
          <ArrowCircleUpIcon size={27}/> : isCircleUpIcon === false && isCurrencyIcon === false ?
          <ArrowCircleDownIcon size={27}/> : <CurrencyDollarIcon size={27}/>
        }
      </header>
      <strong>R$ { amount }</strong>
    </CardContainer>
  )
}