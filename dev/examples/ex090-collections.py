# list --> like a JavaScript array
# Devi spesso aggiungere/rimuovere/modificare elementi in posizioni specifiche
scores = [1,2,3]

# tuple --> like a JavaScript array that can't be changed
# Può essere usata come chiave di un dizionario
# sai che non cambierai i valori e vuoi un codice più sicuro
# occupano meno memoria e sono leggermente più veloci 
ages = (1,2,3)
print(f"the first value is: {ages[0]}")
# ages[0] = 23 # will raise an error

# set --> like a JavaScript Set
# ti serve una collezione senza duplicati
# Non ti interessa l’ordine degli elementi
# Vuoi sfruttare le operazioni insiemistiche veloci (unione, intersezione, differenza).
temperatures = {1,2,3}

# dictionary --> like a JavaScript object
# Ti serve una mappatura chiave → valore (ad esempio, dati nei moduli)
# Vuoi cercare un valore in base a una chiave in modo rapido
# Ogni chiave deve essere unica e immutabile, ma i valori possono essere duplicati e modificabili
person = {"name": "Hans", "age": 45}
