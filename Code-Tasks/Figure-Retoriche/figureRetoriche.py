import random
#figure_retoriche = ['Anastrofe', 'Ipèrbato', 'Anafora', 'Epifora', 'Anadiplosi', 'Iterazione', 'Parallelismo', 'Chiasmo', 'Accumulazione', 'Climax', 'Hysteron proteron', 'Similitudine', 'Metafora']

file_testo = open('Code-Tasks/Figure-Retoriche/figureRetoriche.txt', 't')

figure_retoriche = []
continua = True
while continua:
    figura = input('Figura retorica:\n')
    if figura not in ('', ' ', '\n'):
        definizione = input('Definizione:\n')
        figure_retoriche.append((figura.lower(), definizione))
    else:
        continua = False

ripetizioni = 0
sbagliate = 0
corrette = 0
continua2 = True
while continua2:
    ripetizioni += 1
    figura_scelta = random.choice(figure_retoriche)
    nome_figura_scelta = figura_scelta[0]
    print(f'DEFINIZIONE:\n{figura_scelta[1]}')
    nome_suggerito = input('Che figura pensi che sia?\n')
    if nome_suggerito == nome_figura_scelta:
        corrette += 1
    else:
        sbagliate += 1
    while nome_suggerito != nome_figura_scelta:
        nome_suggerito = input('Sbagliato, riprova:\n')
    print('corretto')
    smettere = input('Vuoi smettere?')
    if smettere in ('si', 'yes', 'ok', 'sì'):
        continua2 = False

print(f'Il tuo punteggio è di {corrette} corrette e {sbagliate} sbagliate su {ripetizioni}.\nVoto: {corrette / ripetizioni * 10}')