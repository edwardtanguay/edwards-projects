import os
from collections import Counter

def stopWords(text, k):
	words = text.split()
	all_words = Counter(words)
	repeated_words = [word for word in words if all_words[word] >= k]
	unique_repeated_words = []
	seen = set()
	for word in repeated_words:
		if word not in seen:
			unique_repeated_words.append(word)
			seen.add(word)
	return unique_repeated_words

if __name__ == '__main__':
	result = stopWords("the quick brown fox jumps over the lazy brown dog and runs away to a brown house and go go go", 2)
	print("\n".join(result))