from tools import separator, section

section('arguments')
def getFullName(first, last):
  return f"{first} {last}"
fullName = getFullName("Roger", "Gargoyle")
print(fullName)

section('arbitrary number of arguments')
def printInfos(*infos):
  print(f"The argument is a {type(infos)}.")
  print(infos)
  print(f"There are {len(infos)} infos.")
  for i,info in enumerate(infos):
    print(f"{i+1}. {info}")
printInfos('rock', 'tree')

section('keyword arguments') # also known as kwargs
def getMessage(name, age):
  return f"{name} is {age} years old."
print(getMessage('Harold', 33))
print(getMessage(age = 55, name = "Alice"))

section('default parameter')
def displayName(name = '(unknown)'):
  print(f"The name is {name}.")
displayName('Richard')
displayName()
