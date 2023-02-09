possibleBoxes = ['a1', 'b1', 'c1', 'a2', 'b2', 'c2', 'a3', 'b3', 'c3']
a1 = b1 = c1 = a2 = b2 = c2 = a3 = b3 = c3 = False
emptyBoxes = 9
symbols = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
isWinner = False

firstPlayer = input('Type a if you would like to be the one who starts the game, b if you would like the bot to start...\n')
while firstPlayer != 'a' and firstPlayer != 'b':
    print('WARNING: Input should be either a or b, typed in lowercase without spaces!')
    firstPlayer = input('Type a if you would like to be the one who starts the game, b if you would like the bot to start...\n')
secondPlayer = 'b' if firstPlayer == 'a' else 'a'

def makeMove(turn, player):
    isBoxEmpty = list(map(lambda box: not box, [a1, b1, c1, a2, b2, c2, a3, b3, c3]))
    emptyBoxesList = []
    for boxIndex in range(0, len(isBoxEmpty)):
        if isBoxEmpty[boxIndex]:
            emptyBoxesList.append(possibleBoxes[boxIndex])
    if player == 'a':
        availableBoxes = ', '.join(emptyBoxesList)
        chosenBox = input(f'Choose a box between {availableBoxes} for your move:\n')
        while chosenBox not in emptyBoxesList:
            print(f'WARNING: Input should be either {availableBoxes}, typed in lowercase without spaces!')
            chosenBox = input(f'Choose a box between {availableBoxes} for your move:\n')
        globals()[chosenBox] = True
        chosenBoxIndex = possibleBoxes.index(chosenBox)
        symbols[chosenBoxIndex] = 'x' if turn % 2 == 0 else 'o'


def grid():
    row1 = [a1, b1, c1]
    row2 = [a2, b2, c2]
    row3 = [a3, b3, c3]
    column1 = [a1, a2, a3]
    column2 = [b1, b2, b3]
    column3 = [c1, c2, c3]
    diagonal1 = [a1, b2, c3]
    diagonal2 = [c1, b2, a3]
    rows = [row1, row2, row3]
    columns = [column1, column2, column3]
    diagonals = [diagonal1, diagonal2]
    trisPossibilities = [rows, columns, diagonals]
    return trisPossibilities

def printGridTemplate(gridBoxes):
    columnsLetters = '        a     b     c     '
    firstRow = f'1       {gridBoxes[0]}  |  {gridBoxes[1]}  |  {gridBoxes[2]}  '
    secondRow = f'2       {gridBoxes[3]}  |  {gridBoxes[4]}  |  {gridBoxes[5]}  '
    thirdRow = f'3       {gridBoxes[6]}  |  {gridBoxes[7]}  |  {gridBoxes[8]}  '
    rowsDivider = '      —————————————————'
    gridTemplate = f'{columnsLetters}\n\n{firstRow}\n{rowsDivider}\n{secondRow}\n{rowsDivider}\n{thirdRow}\n'
    print(gridTemplate)

for x in range(0, 9):
    if not isWinner:
        printGridTemplate(symbols)
        if emptyBoxes % 2 == 0:
            makeMove(x, firstPlayer)
        else:
            makeMove(x, firstPlayer)
    else:
        break

printGridTemplate(symbols)