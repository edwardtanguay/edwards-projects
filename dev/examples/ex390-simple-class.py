class Player:
	type = "game_player"

	def __init__(self, idCode: str, name: str, score: int) -> None:
		self.idCode = idCode
		self.name = name
		self.score = score

	def increaseScore(self, score: int) -> None:
		self.score += score

p1 = Player("p1", "Player 001", 0)
print(p1.type, p1.name, p1.score)
p1.increaseScore(10)
p1.increaseScore(8)
print(p1.type, p1.name, p1.score)

