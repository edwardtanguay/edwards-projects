import time

def measure_execution(func):
	def wrapper(*args, **kwargs):
		start = time.time()
		func(*args, **kwargs)
		finish = time.time()
		print(f"time of execution: {finish-start}")
	return wrapper

@measure_execution
def count_up(seconds):
	for i in range(seconds):
		print(i+1)
		time.sleep(1)

count_up(2)
count_up(3)