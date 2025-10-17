status = "online"

print(f"status = {status}")

def showInfo():
	# global status # uncomment to overwrite
	status = "offline"
	print(f"internal status is {status}")

showInfo()

print(f"status = {status}")