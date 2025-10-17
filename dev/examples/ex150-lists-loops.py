from tools import separator, section

planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"]

section('iterate through items like foreach')
for planet in planets:
	print(planet)

section('iterate through items using index')
for i in range(len(planets)):
	print(f"{i+1}. {planets[i]}")

section('while')
i = len(planets) - 1
while i >= 0:
	print(f"#{i+1} = {planets[i]}")
	i -= 1

section('list comprehension') #know
[print(planet) for planet in planets]

section('filter') #know
searchLetter = "a"
filteredPlanets = [planet for planet in planets if searchLetter in planet.lower()]
print(f'Planets that have "{searchLetter}" in their name: {filteredPlanets}')

section('map/filter') #know
booleanMapForFilteredPlanets = [True if searchLetter in planet.lower() else False for planet in planets]
print(booleanMapForFilteredPlanets)