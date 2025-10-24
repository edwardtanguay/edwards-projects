import os

def get_line_block_from_file(file_name: str) -> list[str]:
	"""
	Get all line_block from a file as a list of strings.

	Usage:
		line_block = get_line_block_from_file("../../notes.txt")
	"""
	try:
		with open(file_name, "r", encoding="utf-8") as f:
			contents = f.read()
	except Exception as e:
		raise RuntimeError(f"Failed to read file: {e}")

	line_block = contents.split('\n')
	return line_block


def get_line_block_from_file_till_marker(file_name: str, marker: str) -> list[str]:
	"""
	Get all line_block from a file as a list of strings up to the marker.
	If marker is not found, returns full line_block.

	Usage:
		line_block = get_line_block_from_file_till_marker("../../notes.txt", "===")
	"""
	try:
		with open(file_name, "r", encoding="utf-8") as f:
			contents = f.read()
	except Exception as e:
		raise RuntimeError(f"Failed to read file: {e}")

	line_block = contents.split('\n')
	
	try:
		marker_index = line_block.index(marker)
		line_block = line_block[:marker_index]
	except ValueError:
		# Marker not found, return full line_block
		pass
		
	return line_block
