from tools import separator, section

section('simple lambda')
double = lambda x : x * 2
print(double(3))
print(double(5))

section('two-argument lambda')
sum = lambda a,b : a + b
print(sum(3,4))
print(sum(13,14))

section('lambda factory')
def multiplierFactory(num):
  return lambda a : a * num
doubler = multiplierFactory(2)
tripler = multiplierFactory(3)
for i in range(1,6):
  print(i, doubler(i), tripler(i))