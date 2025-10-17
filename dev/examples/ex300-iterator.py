from tools import separator, section

colors = ["red", "blue", "green"]

section('interator')
colorIter = iter(colors)
print(next(colorIter))
print(next(colorIter))
print(next(colorIter))
