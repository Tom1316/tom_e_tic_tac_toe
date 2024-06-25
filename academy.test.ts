/******************************************

Exercise for the Reader :-) 

Use your TDD skills from the JS Unit Testing session and Bowling Game Kata session
to make unit tests to drive out your Noughts & Crosses implementation.

The jest verbose flag has been set for you in "jest.config.js"

*********************************************/

import { Player, Cell, getBoard, setBoard } from './board'
import { checkWinner, crossText, getCurrentPlayer, getGameOver, noughtText, resetGame, setCurrentPlayer, switchPlayer, takeTurn } from './academy'

// Test: setBoard
describe ('This test ensures setBoard function works by establishing the contents of a 3x3 board', () => {
    beforeEach(() => {
        setBoard([[null, null, null], [null, null, null], [null, null, null]])
        }
    )
    test ('it should set the board to an array of nulls', () => {
        const result = getBoard()
        expect (result).toEqual([[null, null, null], [null, null, null], [null, null, null]])    
    }) 

})

// Test: getBoard
describe ('This test ensures getBoard function works by returning the contents of a 3x3 board', () => {
    beforeEach(() => {
        setBoard([["cross", "cross", "cross"], [null, null, null], [null, null, null]])
        }
    )
    test ('it should return the above array', () => {
        const result = getBoard()
        expect (result).toEqual([["cross", "cross", "cross"], [null, null, null], [null, null, null]])    
    }) 

})

// Test: reset game
describe ('This tests the functionality of the reset button', () => {
    beforeEach(() => {
        setBoard([["cross", "cross", "cross"], [null, null, null], [null, null, null]])
        }
    )
    test ('reset should return a 3x3 array of nulls which is the original game state and board dimensions', () => {
        //Arrange
        const expectedResult = [[null, null, null], [null, null, null], [null, null, null]]

        //Act
        resetGame()
        const result = getBoard()

        //Assert
        expect(result).toEqual(expectedResult)    
    }) 
})

// Test: take turn
describe ('This tests the takeTurn function', () => {
    beforeEach(() => {
        setBoard([[null, null, null], [null, null, null], [null, null, null]])
        }
    )

    test ('if the game has finished: nothing happens and the board is retunred unchanged', () => {
        //Arrange
        setBoard ([["cross", "cross", "cross"], ["cross", "cross", "cross"], ["cross", "cross", "cross"]])
        const expectedResult = getBoard()

        //Act
        const result = takeTurn(1,1,true,expectedResult,'nought')
        console.log(result)

        //Assert
        expect(result).toEqual(expectedResult)    
    }) 

    test ('if the game has not completed: if the cell is not empty, nothing happens and the board is not changed', () => {
        //Arrange
        setBoard ([[null, "cross", "cross"], ["cross", "cross", "cross"], ["cross", "cross", "cross"]])
        const expectedResult = getBoard()

        //Act
        const result = takeTurn(0, 1, false, expectedResult, 'nought')

        //Asset
        expect(result).toEqual(expectedResult)
        
    })

    test ('if the game has not completed: if the cell is empty then the counter should be placed in that cell', () => {
        //Arrange
        setBoard ([[null, "cross", "cross"], ["cross", "cross", "cross"], ["cross", "cross", "cross"]])
        const currentBoard = getBoard()

        //Act
        const result = takeTurn(0, 0, false, currentBoard, 'nought')
        const expectedResult = getBoard()

        //Asset
        expect(result).toEqual(expectedResult)
        
    })
})

// Test: switch player 
describe ('This tests the functionality of switchPlayer', () => {
    beforeEach(() => {
        setBoard([[null, null, null], [null, null, null], [null, null, null]])
        }
    )
    test ('it should switch the players only if the turn was completed', () => {
        //Arrange
        setCurrentPlayer ("cross")
        const currentPlayer = getCurrentPlayer()
        const expectedResult = "nought"

        //Act
        const result = switchPlayer(currentPlayer)

        //Assert
        expect(result).toEqual(expectedResult)    
    }) 
})

// Test: Check winner
describe ('This tests the functionality of checkWinner', () => {
    beforeEach(() => {
        setBoard([[null, null, null], [null, null, null], [null, null, null]])
        }
    )
    test ('if there is a winner, return the name of the winner', () => {

        //Arrange
        setBoard ([["cross", "cross", "cross"], [null, null, null], [null, null, null]])
        const currentBoard = getBoard() 
        const expectedResult = "cross" 

        //Act
        const result = checkWinner(currentBoard)

        //Assert
        expect(result).toEqual(expectedResult)    
    }) 

    test ('find if there is a winner in horizontal, row 1 or 2 or 3', () => {

        //Arrange
        setBoard ([["cross", null, null], ["cross", null, null], ["cross", null, null]])
        const currentBoard = getBoard() 
        const expectedResult = "cross" 

        //Act
        const result = checkWinner(currentBoard)

        //Assert
        expect(result).toEqual(expectedResult)    
    }) 

    test ('find if there is a winner in verticle, row 1 or 2 or 3', () => {

        //Arrange
        setBoard ([["cross", null, null], ["cross", null, null], ["cross", null, null]])
        const currentBoard = getBoard() 
        const expectedResult = "cross" 

        //Act
        const result = checkWinner(currentBoard)

        //Assert
        expect(result).toEqual(expectedResult)    
    }) 

    test ('find if there is a winner in diag, top left to bottom right', () => {

        //Arrange
        setBoard ([["cross", null, null], [null, "cross", null], [null, null, "cross"]])
        const currentBoard = getBoard() 
        const expectedResult = "cross" 

        //Act
        const result = checkWinner(currentBoard)

        //Assert
        expect(result).toEqual(expectedResult)    
    }) 

    test ('find if there is a winner in anti-diag, top right to bottom left', () => {

        //Arrange
        setBoard ([[null, null, "cross"], [null, "cross", null], ["cross", null, null]])
        const currentBoard = getBoard() 
        const expectedResult = "cross" 

        //Act
        const result = checkWinner(currentBoard)

        //Assert
        expect(result).toEqual(expectedResult)    
    })

    test ("return 'nobody' if the game is completed and there is no winner", () => {

        //Arrange
        setBoard ([["nought", "cross", "nought"], ["cross", "nought", "cross"], ["cross", "nought", "cross"]])
        const currentBoard = getBoard() 
        const expectedResult = "nobody"

        //Act
        const result = checkWinner(currentBoard)

        //Assert
        expect(result).toEqual(expectedResult)    
    })

    test ("return 'nobody' if the game is completed and there is no winner", () => {

        //Arrange
        setBoard ([[null, "cross", "nought"], ["cross", "nought", "cross"], ["cross", "nought", "cross"]])
        const currentBoard = getBoard() 
        const expectedResult = undefined

        //Act
        const result = checkWinner(currentBoard)

        //Assert
        expect(result).toEqual(expectedResult)    
    })
})

//eof
