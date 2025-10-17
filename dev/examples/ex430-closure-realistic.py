def person_directory():
	persons = {}
	def add(id, name, age):
		persons[id] = {"name": name, "age": age}
		return persons
	return add

add_to_directory = person_directory()

directory = add_to_directory(34, "Hans", 44)
print(directory)
directory = add_to_directory(11, "Renée", 24)
print(directory)

