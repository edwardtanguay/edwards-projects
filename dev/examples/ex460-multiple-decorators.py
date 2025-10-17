import time

def measure_execution_time(func):
	def wrapper(*args, **kwargs):
		start = time.time()
		func(*args, **kwargs)
		fin = time.time()
		total_time = fin - start
		print(f"total execution time: {total_time}")
	return wrapper

def show_ends(func):
	def wrapper(*args, **kwargs):
		print(">>> START")
		func(*args, **kwargs)
		print(">>> END")
	return wrapper

@show_ends
@measure_execution_time
def show_range(num):
	for i in range(num):
		print(i)
		time.sleep(1)

show_range(3)