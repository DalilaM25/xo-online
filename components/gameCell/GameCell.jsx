import { GameSymbol } from "../gameSymbol/GameSymbol"
import styles from "./GameCell.module.css"
export const GameCell = ({onClick, isWinner, symbol}) => {
    return (
    <button className={`${styles.cell} ${isWinner ? styles['cell--win'] : ''}`} onClick={onClick} >{symbol ? <GameSymbol symbol={symbol}/> : null}</button>)
}