from bs4 import BeautifulSoup
import requests
import re
import sys

if len(sys.argv) > 1:
    verb = sys.argv[1]
else:
    verb = 'salire'

url = f'https://www.italian-verbs.com/italian-verbs/conjugation.php?parola={verb}'
response = requests.get(url)
soup = BeautifulSoup(response.text, 'html.parser')

# title
print(f"Page title: {soup.title.string}\n")

verb_elements = soup.find_all(class_="cpad")
for index, element in enumerate(verb_elements):
    if 12 <= index <= 17:
        print(element.get_text(strip=True))