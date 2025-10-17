from tools import separator, section

a = 200
b = 20

online = True

section('else if')
if b > a:
  print("b is greater than a")
elif a == b: # note it is not "elseif"
  print("a and b are equal")
else:
  print("a is greater than b")

section('one-line if')
if a > b: print('a is greater')

section('one-line if/else')
print ('a is greater') if a > b else print('a is NOT greater')

section('and/or/not')
if a > b and online:
	print('a greater and online')
if a > b or online:
	print('a greater or online')
if not a < b:
	print('a is not less than b')
