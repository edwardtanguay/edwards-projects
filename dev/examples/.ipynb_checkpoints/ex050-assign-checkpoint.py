# assign multiple values
height, width, depth = 20, 40, 100
print(f"The height is {height}, the depth is {depth}.")

# assign same value 
score1 = score2 = score3 = 0
scores = [score1, score2, 999]
for i, score in enumerate(scores, start=1):
	print(f"{i}. {score}")

# from array
frameworks = ["React", "Angular", "Vue"]
f1, f2, f3 = frameworks
print(f"The second framework is {f2}.")