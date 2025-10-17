from tools import separator, section

insects = [
    "ant",
    "bee",
    "butterfly",
    "beetle",
    "mosquito",
    "fly",
    "grasshopper",
    "dragonfly",
    "ladybug",
    "termite",
    "wasp",
    "cockroach",
    "moth",
    "cricket",
    "aphid",
    "caterpillar",
    "mantis",
    "flea",
    "weevil",
    "earwig"
]

section('skip iteration of loop')
insects.sort()
for insect in insects:
	if insect.startswith('a') or insect.startswith('b'):
		continue
	print(insect)

section('for i loop')
for i in range(3):
	print(i)

section('from a to b')
for i in range(100,105):
	print(i)

section('skip')
for num in range(0,10,2):
	print(num)

section('a kind of finally section')
for x in range(6):
  if x == 3: break # change to e.g. 13 to see that the phrase will be printed at end
  print(x)
else:
  print("all numbers counted")