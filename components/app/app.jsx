import styles from './App.module.css'
import { GameInfo } from '../game-info/GameInfo';
import { GameCell } from '../gameCell/GameCell';
import { useGameState } from '../../hooks/useGameState';

export default function App() {
  const {cells, 
    currentStep, 
    winner, 
    handleClick, 
    handleReset, 
    winnerSymbol, 
    isDraw} = useGameState()

  return (
    <div className={styles.game}>
      <GameInfo 
      isDraw={isDraw} 
      winner={winner} 
      winnerSymbol={winnerSymbol} 
      currentStep={currentStep}
      />
      <div className={styles.field}>
        {cells.map((symbol, index) => {
          return(
          <GameCell 
          key={index} 
          onClick={()=>handleClick(index)} 
          isWinner={winner?.includes(index)} 
          symbol={symbol}
          />)
        })}
      </div>
      <button 
      className={styles.reset} 
      onClick={handleReset} >Начать сначала</button>
    </div>
  )
}