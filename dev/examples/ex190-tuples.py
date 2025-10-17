from tools import separator, section

# why use tuples when you would just use lists?
# 1. immutability ensures data integrity
# 2. tuples are generally faster than lists  

singers = (
    "Édith Piaf",
    "Jacques Brel",
    "Charles Aznavour",
    "Johnny Hallyday",
    "Serge Gainsbourg",
    "Françoise Hardy",
    "Mylene Farmer",
    "Dalida",
    "Julien Doré",
)

section('asterisk at end')
(first, second, *rest) = singers
print(first)
print(rest)


section('asterisk in middle')
(first, *others, last) = singers
print(first)
print(last)
print(others)

section('works with lists as well')
numbers = [1,2,3,4,5]
[first, second, *rest] = numbers
print(first)
print(rest)

# for/while are same for lists and tuples
# tuples have count and index
section('count')
ages = (1,2,3,4,4,5,6,7,7,7,8)
print(ages.count(7))
print(ages.index(2))
