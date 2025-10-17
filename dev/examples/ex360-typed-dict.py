from typing import TypedDict

class Employee(TypedDict):
    id: int
    firstName: str
    lastName: str

employee: Employee = {"id": 34, "firstName": "Hans", "lastName": "Bakker"}


print(employee["id"])
print(employee["firstName"].lower())
print(employee["id"].lower()) # error