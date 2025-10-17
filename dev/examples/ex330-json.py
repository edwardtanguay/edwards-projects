import tools as t
import json

jsonPersons = '''[
    {
        "id": 1,
        "firstName": "John",
        "lastName": "Doe"
    },
    {
        "id": 2,
        "firstName": "Jane",
        "lastName": "Smith"
    },
    {
        "id": 3,
        "firstName": "Emily",
        "lastName": "Jones"
    }
]'''
persons = json.loads(jsonPersons) # same as: JSON.parse(jsonPersons)

print(f"Type is {type(persons)} and there are {len(persons)} items.")
for person in persons:
	print(f"{person['firstName']} {person['lastName']} ({person['id']})")

jsonText = json.dumps(persons, indent=4) # same as: JSON.stringify(persons)
pathAndFileName = 'output/persons.json'
with open(pathAndFileName, 'w') as file:
	file.write(jsonText)
print(f"The following JSON was written to {pathAndFileName}: {jsonText}")