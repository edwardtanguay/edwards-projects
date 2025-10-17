import json
from pprint import pprint

def get_quakes():
	with open('../../test_data/30dayquakes.json') as f:
		data = json.load(f)
		return data['features']

def get_all_felt_quakes():
	quakes = get_quakes()
	return [quake for quake in quakes if quake['properties']['felt'] is not None]

def get_all_felt_values():
	felt_values = map(lambda q: q['properties']['felt'], filter(lambda q: q['properties']['felt'] is not None, get_quakes()))
	return list(felt_values)

# simplified of the previous
def get_all_felt_values2():
	filtered = filter(lambda q: q['properties']['felt'] is not None, get_quakes())
	felt_values = map(lambda q: q['properties']['felt'], filtered)
	return list(felt_values)

# print(get_all_felt_quakes())
# print(get_all_felt_values())
# print("---")
# print(get_all_felt_values2())

felt_values = get_all_felt_values()
print(felt_values)
print(any(v > 100 for v in felt_values))
print(any(v > 100000 for v in felt_values))
print(all(v >= 0 for v in felt_values))
print(all(v > 0 for v in felt_values))
print(list(filter(lambda v: v <= 0, felt_values)))
print(f"Number of quakes felt by more than 500 people: {sum(v >= 500 for v in felt_values)} and those numbers were {list(filter(lambda v: v >= 500, felt_values))}")
