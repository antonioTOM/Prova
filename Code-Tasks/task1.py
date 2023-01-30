soldi = float(input('Quanti soldi ha Mario?\n'))
giorni = 0
giorni_pastina = 0
giorni_panino = 0
soddisfatto = True

while soldi >= 1 and soddisfatto:
    print('Mario vuole una pastina o un panino?')
    scelta = input('Digitare a per pastina b per panino\n')
    if scelta == 'a':
        soldi -= 1
        giorni += 1
        giorni_pastina += 1
    elif scelta == 'b':
        if soldi >= 1.5:
            soldi -= 1.5
            giorni += 1
            giorni_panino += 1
        else:
            soddisfatto = False
    else:
        print('Input deve essere a o b!!!')


print(f'Mario ha mangiato per {giorni} giorni')
print(f'Mario ha mangiato {giorni_pastina} pastine')
print(f'Mario ha mangiato {giorni_panino} panini')