from tools import separator, section

section('inheritance')
class Person:
	def __init__(self, firstName, lastName, age) -> None:
		self.firstName = firstName
		self.lastName = lastName
		self.age = age
	def display(self) -> str:
		return f"{self.firstName} {self.lastName} is {self.age} years old."

class Employee(Person):
	def __init__(self, firstName, lastName, age, department) -> None:
		super().__init__(firstName, lastName, age)
		self.department = department
	def display(self) -> str:
		return f"{super().display()} and works in the {self.department} department." 

class Student(Person):
	def __init__(self, firstName, lastName, age, semester) -> None:
		super().__init__(firstName, lastName, age)
		self.semester = semester
	def display(self) -> str:
		return f"{super().display()} and is in semester {self.semester}."

e = Employee("Jim", "Ashlash", 33, "Sales")
s = Student("April", "Wayland", 21, 3)

print(e.display())
print(s.display())