def add_logging(func):
	def new_func():
		print("logged: info")
		func()
	return new_func

@add_logging
def hello_world():
	print("hello world")

hello_world()

# hw = add_logging(hello_world)
# hw()

