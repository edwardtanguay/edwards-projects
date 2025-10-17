from tools import separator, section

birds = [
    "Sparrow",
    "Eagle",
    "Parrot",
    "Penguin",
    "Owl"
]

moreBirds = [
    "Flamingo",
    "Peacock",
    "Hummingbird",
    "Woodpecker",
    "Seagull"
]

section('join')
print(birds)
allBirds = birds + moreBirds
print(allBirds)

section('extend')
print(allBirds)
allBirds.extend(["Canary", "Kingfisher"])
print(allBirds)

section('len/count')
print(len(allBirds))
print(allBirds.count("Peacock"))
allBirds.extend(["Peacock"]) # note that allBirds.extend("Peacock") adds the individual letters
print(allBirds.count("Peacock"))