import time
import random

possibleBoxes = ['a1', 'b1', 'c1', 'a2', 'b2', 'c2', 'a3', 'b3', 'c3']
a1 = b1 = c1 = a2 = b2 = c2 = a3 = b3 = c3 = False
symbols = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
isWinner = False
winner = None

gameMode = input('Type c if you would like to play against the computer, m if you would like to start a multiplayer game...\n')
while gameMode not in ('c', 'm'):
    print('WARNING: Input should be either c or m, typed in lowercase without spaces!')
    gameMode = input('Type c if you would like to play against the computer, m if you would like to start a multiplayer game...\n')

firstPlayer = input('Type a if you would like to be the one who starts the game, b if you would like the bot to start...\n') if gameMode == 'c' else 'a'
while firstPlayer not in ('a', 'b'):
    print('WARNING: Input should be either a or b, typed in lowercase without spaces!')
    firstPlayer = input('Type a if you would like to be the one who starts the game, b if you would like the bot to start...\n')

secondPlayer = 'b' if firstPlayer == 'a' else 'a'

def makeMove(turn, player, mode):
    isBoxEmpty = list(map(lambda box: not box, [a1, b1, c1, a2, b2, c2, a3, b3, c3]))
    emptyBoxesList = []
    chosenBox = None
    for boxIndex in range(0, len(isBoxEmpty)):
        if isBoxEmpty[boxIndex]:
            emptyBoxesList.append(possibleBoxes[boxIndex])
    if mode == 'm' or player == 'a':
        availableBoxes = ', '.join(emptyBoxesList)
        chosenBox = input(f'Choose a box between {availableBoxes} for your move:\n')
        while chosenBox not in emptyBoxesList:
            print(f'WARNING: Input should be either {availableBoxes}, typed in lowercase without spaces!')
            chosenBox = input(f'Choose a box between {availableBoxes} for your move:\n')
    else:
        time.sleep(0.7)
        chosenBox = random.choice(emptyBoxesList)
    globals()[chosenBox] = True
    chosenBoxIndex = possibleBoxes.index(chosenBox)
    symbols[chosenBoxIndex] = 'x' if turn % 2 == 0 else 'o'


def grid():
    global isWinner
    global winner
    row1 = ['a1', 'b1', 'c1']
    row2 = ['a2', 'b2', 'c2']
    row3 = ['a3', 'b3', 'c3']
    column1 = ['a1', 'a2', 'a3']
    column2 = ['b1', 'b2', 'b3']
    column3 = ['c1', 'c2', 'c3']
    diagonal1 = ['a1', 'b2', 'c3']
    diagonal2 = ['c1', 'b2', 'a3']
    rows = [row1, row2, row3]
    columns = [column1, column2, column3]
    diagonals = [diagonal1, diagonal2]
    trisPossibilities = [rows, columns, diagonals]
    for possibilities in trisPossibilities:
        for possibility in possibilities:
            areBoxesSame = symbols[possibleBoxes.index(possibility[0])]
            for box in possibility:
                areBoxesSame = areBoxesSame if symbols[possibleBoxes.index(box)] == areBoxesSame and areBoxesSame != ' ' else False
                if not areBoxesSame:
                    break
            isWinner = areBoxesSame
            if isWinner is not False:
                break
        if isWinner is not False:
            break
    if isWinner is not False:
        if gameMode == 'm':
            if isWinner == 'x':
                winner = 'first player'
            else:
                winner = 'second player'
        else:
            if firstPlayer == 'a':
                winner = 'first player' if isWinner == 'x' else 'bot'
            else:
                winner = 'bot' if isWinner == 'x' else 'first player'



def printGridTemplate(gridBoxes):
    columnsLetters = '        a     b     c     '
    firstRow = f'1       {gridBoxes[0]}  |  {gridBoxes[1]}  |  {gridBoxes[2]}  '
    secondRow = f'2       {gridBoxes[3]}  |  {gridBoxes[4]}  |  {gridBoxes[5]}  '
    thirdRow = f'3       {gridBoxes[6]}  |  {gridBoxes[7]}  |  {gridBoxes[8]}  '
    rowsDivider = '      —————————————————'
    gridTemplate = f'{columnsLetters}\n\n{firstRow}\n{rowsDivider}\n{secondRow}\n{rowsDivider}\n{thirdRow}\n'
    print(gridTemplate)

for y in range(0, 9):
    botStarts = y == 0 and gameMode == 'c' and firstPlayer == 'b'
    if not isWinner:
        if not botStarts:
            printGridTemplate(symbols) 
        if y % 2 == 0:
            makeMove(y, firstPlayer, gameMode)
        else:
            makeMove(y, secondPlayer, gameMode)
        grid()
    else:
        break

printGridTemplate(symbols)
if winner is None:
    print("\nWell it's a tie this time!")
else:
    print(f'\nCongratulations {winner}! You won!')