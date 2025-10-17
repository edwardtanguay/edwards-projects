from tools import separator, section

# set items are unchangable
# but you can remove and add items
# sets are unordered, you can't be guaranteed in which order they will appear

plants = {
    "Rose",
    "Lily",
    "Fern",
    "Sunflower",
    "Cactus",
	"Rose"
}

section('notice no duplicates')
print(plants) # second "Rose" not added
plants.add("Tulip") # will add
plants.add("Fern") # will not add
print(plants)

section('add another set')
newPlants = {"Peony", "Daisy"}
print(plants)
plants.update(newPlants)
print(plants)

section('remove random item')
print(plants)
removed = plants.pop()
print(f'removed "{removed}"')
print(plants)

# for is same

section('all items from both')
plants2 = {"Lily", "Fern", "Snap Dragons"}
matches = plants.union(plants2)
print(plants)
print(plants2)
separator()
print(matches)

section('only the duplicates')
plants2 = {"Lily", "Fern", "Snap Dragons"}
print(plants)
print(plants2)
matches = plants.intersection(plants2)
separator()
print(matches)

section('only items that were in first set, but not in second')
plants2 = {"Lily", "Fern", "Snap Dragons"}
print(plants)
print(plants2)
matches = plants.difference(plants2)
separator()
print(matches)

section('all differences')
plants2 = {"Lily", "Fern", "Snap Dragons"}
print(plants)
print(plants2)
matches = plants.symmetric_difference(plants2)
separator()
print(matches)