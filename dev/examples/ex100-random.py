import random

def displayPerson():
	age = random.randrange(18,65)
	heightInCentimeters = random.randrange(150,190)
	print(f"He is {age} years old and {heightInCentimeters} cm tall.")

for i in range(3):
	displayPerson()