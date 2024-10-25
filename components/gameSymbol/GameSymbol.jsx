import { SYMBOL_O, SYMBOL_X} from '../../utils/utils'
import styles from "./GameSymbol.module.css"

const getSymbolClassName = (symbol) => {
  if (symbol === SYMBOL_O) return `${styles['symbol--o']}`;
  if (symbol === SYMBOL_X) return `${styles['symbol--x']}`;
  return "";
};
export const GameSymbol = ({symbol}) => {
    return (
<span className={`${styles.symbol} ${getSymbolClassName(symbol)}`}>{symbol}</span>
    )
}