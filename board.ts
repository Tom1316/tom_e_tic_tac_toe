// Make your changes to store and game state in this file

export type Player = 'nought' | 'cross' | 'nobody' | undefined
export type Cell = number | Player | null

let board:Cell[][] = [[null, null, null], [null, null, null], [null, null, null]]

// Return the current board state with either a noughtText or a crossText in
// each position. Put a null in a position that hasn't been played yet.

//retrieve the board
export function getBoard(): Cell[][] {
  console.log('getBoard was called')
return board
}

//overwrite board with new board
export function setBoard(newBoard: Cell[][]) {
  board = newBoard
  console.log('setBoard was called')
}
