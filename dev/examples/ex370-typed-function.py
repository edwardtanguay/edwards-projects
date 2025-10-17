def get_double(num: int) -> int:
	return num * 2

print(get_double(8.2))

# note this will run without errors (!)
# to catch errors, put "mypy 036-typed-function.py" in your CI/CD pipeline