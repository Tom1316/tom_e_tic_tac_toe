//
// Make your changes to store and update game state in this file

import { Player, Cell, getBoard, setBoard } from './board'

export const noughtText = 'nought'
export const crossText = 'cross'
export const nobodyText = 'nobody'

let currentGameOver = false
let currentPlayer:any = undefined


// Take the row and column number and update the game state.
export function takeTurn(rowIndex: number, columnIndex: number,
  currentGameOver: boolean, currentBoard: Cell[][], currentPlayer: Player): Cell[][] {

    if (currentBoard[rowIndex][columnIndex] != null){
      return currentBoard
    }
    
    else if
    (currentGameOver == false){ 
      currentBoard[rowIndex][columnIndex] = currentPlayer
    }
  
  console.log(`takeTurn was called with row: ${rowIndex}, column: ${columnIndex}`) // keep this line 
  return currentBoard
  }

// Switches and sets player to alternate between "nought" and "cross"
export function switchPlayer(currentPlayer: Player): Player {

  if (currentPlayer == 'nought' || currentPlayer == undefined) {
    currentPlayer = "cross"
  }
  else {currentPlayer = "nought"}

  console.log('Switch player called. Current player is', currentPlayer)

  return currentPlayer
}

// Return either 'nought', 'cross' or 'nobody' if the game is over.
// Otherwise return null to continue playing.
export function checkWinner(currentBoard: Cell[][]): Player {

//assumes n*n shape board
const n = currentBoard.length

//check rows and columns
for (let i = 0; i <n; i++){

  //check row 
  if(currentBoard[i].every(cell => cell === currentBoard[i][0]&& cell !== null)){
    return currentBoard[i][0] as Player
  }
   
 // check column 
  let columnWin = true;
  for (let j = 0; j < n; j++) {
      if (currentBoard[j][i] !== currentBoard[0][i] || currentBoard[j][i] === null) {
          columnWin = false;
          break;
      }
  }
  if (columnWin) {
      return currentBoard[0][i] as Player
  }
}
  
// check main diagonal win
let mainDiagonalWin = true;
  for (let i = 0; i < n; i++) {
      if (currentBoard[i][i] !== currentBoard[0][0] || currentBoard[i][i] === null) {
          mainDiagonalWin = false;
          break;
      }
    }

  if (mainDiagonalWin) {
        return currentBoard[0][0] as Player;
  }

//check anti-diag
let antiDiagonalWin = true;
  for (let i = 0; i < n; i++) {
      if (currentBoard[i][n - 1 - i] !== currentBoard[0][n - 1] || currentBoard[i][n - 1 - i] === null) {
          antiDiagonalWin = false
           break
      }
  }
  if (antiDiagonalWin) {
      return currentBoard[0][n - 1] as Player;
  }

// check for null
  let hasNullValues = (currentBoard:Cell[][]):boolean => {
    return currentBoard.some(row => row.some (cell => cell === null))
  }
  if (hasNullValues(currentBoard) == false) {
    return "nobody"
  }
  console.log("checkWinner was called")
}

// Set the game state back to its original state to play another game.
export function resetGame() {
  setBoard([[null, null, null], [null, null, null], [null, null, null]])
  currentPlayer = "cross"
  console.log('resetGame was called') // keep this line here
}

// Return the current player
export function getCurrentPlayer(): Player {
  return currentPlayer
}

// Update current player
export function setCurrentPlayer(newCurrentPlayer: Player){
  currentPlayer = newCurrentPlayer
}

// Return the current game state
export function getGameOver(): boolean { 
  return false
}

// Set the current game state
export function setGameOver(newGameOver: boolean) {}
