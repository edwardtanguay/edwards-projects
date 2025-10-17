# Ensures forward references work in type hints within VSCode, 
# i.e. that "Robot" is a known type inside its own class
from __future__ import annotations  

class Robot:
	def __init__(self, idCode:str):
		self.idCode = idCode
		self.position = 0

	def display(self):
		print(self.idCode + " is at position " + str(self.position))

	def __add__(self, distance:int) -> None:
		self.position += distance

	def __lt__(self, second_robot: Robot) -> bool:
		return self.position < second_robot.position

r001 = Robot("robot_001")
r001.display()
r001 + 15
r001.display()

r002 = Robot("robot_002")
r002 + 20
r002.display()

print("r002 is further along" if r001 < r002 else  "r001 is further along")

