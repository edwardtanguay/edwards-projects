from tools import separator, section

airplane = {
    "tail_number": "N12345",
    "model": "Boeing 737",
    "manufacturer": "Boeing",
    "year_built": 2015,
    "seating_capacity": 180,
    "range_km": 5460,
    "engines": {
        "type": "CFM56-7B",
        "number": 2
    },
    "current_location": {
        "airport": "JFK",
        "city": "New York",
        "country": "USA"
    },
    "maintenance_schedule": {
        "last_maintenance": "2023-06-15",
        "next_maintenance": "2024-06-15"
    },
    "crew": ["Captain", "First Officer", "Flight Attendant", "Flight Engineer"]
}

section('loop through keys')
for key in airplane:
    print(key)

section('loop through keys with index')
for i, key in enumerate(airplane):
    print(f"{i+1}. {key}")

section('loop through values')
for value in airplane.values():
    print(value)

section('loop through keys/values')
for k,v in airplane.items():
    print(f"{k} --> {v}")