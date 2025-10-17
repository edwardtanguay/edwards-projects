from tools import separator, section

countries = [
"Nigeria", 
"Ethiopia", 
"Egypt", 
"South Africa", 
"Kenya", 
"Uganda", 
"Algeria", 
"Sudan", 
"Togo",
"Morocco", 
"Ghana"
]

section('sort')
print(countries)
countries.sort()
print(countries)

section('reverse sort')
print(countries)
countries.sort(reverse = True)
print(countries)

section('sort by length')
print(countries)
countries.sort(key=len)
print(countries)
