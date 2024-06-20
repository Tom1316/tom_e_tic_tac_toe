/******************************************

Exercise for the Reader :-) 

Use your TDD skills from the JS Unit Testing session and Bowling Game Kata session
to make unit tests to drive out your Noughts & Crosses implementation.

The jest verbose flag has been set for you in "jest.config.js"

*********************************************/

import { Player, Cell, getBoard, setBoard } from './board'
import { checkWinner, crossText, getCurrentPlayer, getGameOver, noughtText, resetGame, setCurrentPlayer, switchPlayer, takeTurn } from './academy'

setBoard
describe ('when using setBoard', () => {
    beforeEach(() => {
        setBoard([[null, null, null], [null, null, null], [null, null, null]])
        }
    )
    test ('it should set the board to an array of nulls', () => {
        const result = getBoard()
        expect (result).toEqual([[null, null, null], [null, null, null], [null, null, null]])    
    }) 

})

// hint: You will need to also use getBoard to test this - so we have done this one for you:

//describe: getBoard
// hint: You will need to also use setBoard to test this in your Arrange step(s)
// test: it should return the board
// test: it should return the board whatever state it is in
// test: it should always be a 3 by 3 grid

//jest.mock(board, connectors)
// describe: reset game
// test: if the board has been updated, it should set the board to original state and dimensions
// test: if the board has not been updated, it should still set the board to original state and dimensions 

// describe: take turn
// test: if the game is completed, nothing happens and the board is not changed
// test: if the game is not completed, if the cell is not empty, nothing happens and the board is not changed
// test: if the game is not completed, if the cell is empty then the counter should be placed in that cell
// test: it should switch the players only if the turn was completed

// describe: check winner
// test: if there is a winner, return the name of the winner
// test: ...horizontal, row 1 or 2 or 3
// test: ...vertical, column 1 or 2 or 3
// test: ...diagonal Top Left - Bottom Right
// test: ...diagonal Top Right - Bottom Left
// test: return 'nobody' if the game is completed and there is no winner
// test: return 'null' if the game is not over and nobody has won

//eof
