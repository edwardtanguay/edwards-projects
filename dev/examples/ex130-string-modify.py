from tools import separator, section

section('general')
name = " Nikola Tesla   "
print(f"name: [{name}]")
print(f"upper case: [{name.upper()}]")
print(f"lower case: [{name.lower()}]")
print(f"strip: [{name.strip()}]") # like .trim()
print(f"replace: [{name.replace("a","x")}]")
print(f"split: {name.strip().split(" ")}") # double quotes
print(f"split: {name.strip().split(' ')}") # single quotes
print(f"\t1. \"{name.strip()}\"\n\t2. \"{name.strip()}\"")
print(f"The letter a occurs {name.count('a')} times.")

# endswith
if name.endswith(" "):
	print("space at end")

section('find')
print(f"find: {name.find('Tesla')}")

section('join')
names = ["Harold", "Austin", "Georg"]
print(f"The names of invitees are: {", ".join(names)}") # note this is the opposite as in JavaScript

section('split')
url = "https://company.com/products/specials/003"
urlParts = url.split('/')
print(f"{urlParts} is of type {type(urlParts)}")
separator()
for i, urlPart in enumerate(urlParts):
	print(f"{i+1}. {urlPart}")
separator()
i = 1
for urlPart in urlParts:
	if urlPart.strip() != "":
		print(f"{i}. {urlPart}")
		i += 1


