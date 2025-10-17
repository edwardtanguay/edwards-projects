def separator():
	print('---')

def section(title):
	sideLength = 10
	wrapLine = "=" * (sideLength * 2 + 2 + len(title))
	side = "=" * sideLength
	print('')
	print(wrapLine)
	print(f'{side} {title.upper()} {side}')
	print(wrapLine)
	print('')