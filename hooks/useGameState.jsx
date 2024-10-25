import { useState } from 'react';
import { checkWinner, startCells, SYMBOL_O, SYMBOL_X } from '../utils/utils';

export const useGameState = () => {
  const [cells, setСells] = useState(startCells);
  const [currentStep, setcurrentStep] = useState(SYMBOL_O);
  const [winner, setWinner] = useState(); 

  const handleClick = (index) => {
    if (cells[index] || winner) {return}
    const cellsCopy = cells.slice();
    cellsCopy[index]=currentStep;
    const win = checkWinner(cellsCopy);
    
    setСells(cellsCopy);
    setcurrentStep( currentStep === SYMBOL_O ? SYMBOL_X : SYMBOL_O);
    setWinner(win);
  }
  const handleReset = () => {
    setСells(startCells);
    setWinner(undefined);
  }
  
const winnerSymbol = winner ? cells[winner[0]] : undefined;
const isDraw = !winner && !cells.includes(null);

return {cells, currentStep, winner, handleClick, handleReset, winnerSymbol, isDraw}

}