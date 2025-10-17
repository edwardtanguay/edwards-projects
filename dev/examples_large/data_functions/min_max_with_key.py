import json
from pprint import pprint

def getmag(quake):
	mag = quake['properties']['mag']
	if mag == None:
		return 0
	return mag

# display a part of the object
with open('../../test_data/30dayquakes.json') as f:
	data = json.load(f)
	print(f"TITLE: {data['metadata']['title']}")
	print(f"Number of earthquakes: {len(data['features'])}")

	quake = data['features'][0]
	print(f"First earthquake: {quake['properties']['title']}")
	print(f"First earthquake magnitude: {getmag(quake)}")
	print(f"Lowest magnitude: {min(data['features'], key=getmag)['properties']['title']}")
	print(f"Highest magnitude: {max(data['features'], key=getmag)['properties']['title']}")