class Robot:

	def __init__(self, idCode:str, position:int) -> None:
		self.idCode = idCode
		self.position = position

	def move(self, distance: int) -> int:
		self.position += distance
		return self.position

robot001 = Robot("r001", 5)
pos = robot001.move(5)

print(f"new position = {pos}")