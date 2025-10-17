# BASIC SORTING

# numbers
nums = [6, 3, 8, 2, 5]
sorted_nums = sorted(nums)
print('sorted numbers:', sorted_nums)

# strings
fruits = ["banana", "apple", "cherry", "date", "elderberry", "fig", "grape", "honeydew"]
sorted_fruits = sorted(fruits)
print('sorted strings:', sorted_fruits)


reverse_nums = sorted(nums, reverse=True)
print("reverse numbers:", reverse_nums)

# In-place sorting
numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5]
numbers.sort()
print("Sorted in-place:", numbers)

# Reverse in-place sorting
fruits.sort(reverse=True)
print("Reverse sorted fruits:", fruits)

# SORT BY KEY

# by length
length_sorted_fruits = sorted(fruits, key=len)
length_sorted_fruits_reversed = sorted(fruits, key=len, reverse=True)
print("Length sorted fruits:", length_sorted_fruits)
print("Length sorted fruits (reverse):", length_sorted_fruits_reversed)

# by second character
second_char_sorted_fruits = sorted(fruits, key=lambda x: x[1])
print("Second character sorted fruits:", second_char_sorted_fruits)

# by fourth characters, strings with no fourth character at end
fourth_char_sorted_fruits = sorted(fruits, key=lambda x: x[3] if len(x) > 3 else "zzzzzzzz")
print("Fourth character sorted fruits:", fourth_char_sorted_fruits)

# Sort list of tuples by specific element
students = [("Alice", 85), ("Bob", 92), ("Charlie", 78), ("Diana", 95)]
sorted_by_grade = sorted(students, key=lambda x: x[1], reverse=True)
print("Students by grade:", sorted_by_grade)

# SORTING DICTIONARIES

# Sort dictionary by keys
scores = {"Alice": 85, "Charlie": 78, "Diana": 95, "Bob": 92 }
sorted_by_name = dict(sorted(scores.items()))
print("Sorted by name:", sorted_by_name)

# Sort dictionary by values
sorted_by_score = dict(sorted(scores.items(), key=lambda x: x[1]))
print("Sorted by score:", sorted_by_score)

# Sort dictionary by values (descending)
sorted_by_score_desc = dict(sorted(scores.items(), key=lambda x: x[1], reverse=True))
print("Sorted by score (desc):", sorted_by_score_desc)

# case-insensitive
fruits_mixed_case = ["banana", "Apple", "cherry", "date", "Elderberry", "fig", "grape", "honeydew"]
fruits_mixed_case_sorted_wrongly= sorted(fruits_mixed_case)
fruits_mixed_case_sorted_correctly = sorted(fruits_mixed_case, key=str.lower)
print("Mixed-case fruits sorted (wrong):", fruits_mixed_case_sorted_wrongly)
print("Mixed-case fruits sorted (correct):", fruits_mixed_case_sorted_correctly)

# MULTI-KEY SORTING

# Sort by multiple criteria
data = [
    ("apple", 3, 2.5),
    ("banana", 2, 1.8),
    ("apple", 2, 3.0),
    ("banana", 3, 2.2),
    ("cherry", 1, 4.0),
    ("cherry", 1, 3.0),
    ("cherry", 1, 1.0),
    ("cherry", 1, 2.0),
]
multi_sorted = sorted(data, key=lambda x: (x[0], -x[1], x[2]))
print("Multi-criteria sorted:", multi_sorted)