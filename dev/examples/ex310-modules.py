import tools 
from tools import separator, section
import tools as t
import platform # built-in

tools.section('first test section')

section('second test section')

t.section('third test section')

t.section('platform information')
print(platform.system())

t.section('all platform information')
funcs = dir(platform)
for i,func in enumerate(funcs):
	print(f"{i+1}. {func}")