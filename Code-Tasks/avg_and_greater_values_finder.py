## Program that finds the average and the greater values of the average in a user input numbers list
input_var = int(input('Inserire la quantità di numeri da processare:'))
while input_var == 0:
    print("L'input dev'essere un numero intero diverso da 0!")
    input_var = int(input('Inserire la quantità di numeri da processare:'))
values_array = []
for x in range(input_var):
    values_array.append(float(input('Inserire un valore:')))
total = 0
for el in values_array:
    total += el
avg = total / len(values_array)
greater_values_array = []
for el in values_array:
    if el >= avg:
        greater_values_array.append(el)
greater_values_array.sort()
if len(values_array) != 1:
    print(f'I valori iniziali sono: {values_array}')
else:
    print(f'Il valore iniziale è: {values_array}')
print(f'La media è {avg}')
if len(greater_values_array) != 1:
    print(f'I valori maggiori sono {len(greater_values_array)}: {greater_values_array}')
else:
    print(f'Il valore maggiore o uguale è {len(greater_values_array)}: {greater_values_array}')