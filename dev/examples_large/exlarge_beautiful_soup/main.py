from bs4 import BeautifulSoup
import requests
import re

url = 'https://en.wikipedia.org/wiki/Python_(programming_language)'
response = requests.get(url)
soup = BeautifulSoup(response.text, 'html.parser')

# title
print(f"Page title: {soup.title.string}\n")

# display all paragraphs that contain the word "python"
for p in soup.find_all('p'):
	text = p.get_text()
	if re.search(r'python', text, re.IGNORECASE):
		print(f"{text.strip()}\n")
