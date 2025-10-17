def get_hello_function():
	message = "hello"

	def say_hello():
		print(message)

	return say_hello

hello_func = get_hello_function()
hello_func()
