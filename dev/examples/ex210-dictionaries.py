from tools import separator, section

emp = {
    "employee_id": 1234,
    "first_name": "John",
    "last_name": "Doe",
    "age": 30,
	"departments": ['sales', 'marketing'],
    "position": "Software Engineer",
    "salary": 75000,
    "email": "john.doe@example.com",
    "phone": "+1234567890",
    "address": {
        "street": "123 Main St",
        "city": "Metropolis",
        "state": "NY",
        "zip": "10001"
    },
    "skills": ["Python", "JavaScript", "C++", "SQL"],
    "hire_date": "2022-01-15",
}

section('display information from dictionary')
print(f"{emp['first_name']} {emp['last_name']} lives in {emp['address']['city']}.")

section('how many first-level properties')
print(len(emp))

section('can have any type as property values')
print(f"{emp['first_name']} {emp['last_name']} works in {len(emp['departments'])} departments.")

section('two ways to access property values')
print(emp['age'])
print(emp.get('age'))

section('get list of keys and values')
print(emp.keys())
print(emp.values())
print(f"Employee ID is {list(emp.values())[0]}.")
infos = [1234,'John']
print(f"Employee ID is {infos[0]}.")
print(type(emp.values())) # note the type is dict_values, not list
print(type(list(emp.values())))
print(emp.items()) # a list with tuples
print(f"Employee ID is {list(emp.items())[0][1]}.")

section('check if key exists')
checkKey = 'age'
if checkKey in emp:
	print(f'we can calculate {checkKey}')
else:
	print(f'key {checkKey} does not exist')

section('change key value')
print(f"{emp['first_name']} was {emp['age']}.")
emp.update({'age': 40}) # note you send a dictionary as parameter
print(f"{emp['first_name']} is now {emp['age']}.")

section('add and remove key/value')
print(f"Employee has {len(emp)} keys.")
emp['hasBitcoinAccount'] = False
print(f"Employee has {len(emp)} keys.")
emp.popitem() # removes last added item
emp.pop('departments')
print(f"Employee has {len(emp)} keys.")
emp.clear()
print(f"Employee has {len(emp)} keys.")

