import os

def get_lines_from_file(file_name: str) -> list[str]:
	"""
	Get all lines from a file as a list of strings.

	Usage:
		lines = get_lines_from_file("../../notes.txt")
	"""
	try:
		with open(file_name, "r", encoding="utf-8") as f:
			contents = f.read()
	except Exception as e:
		raise RuntimeError(f"Failed to read file: {e}")

	lines = contents.split('\n')
	return lines


def get_lines_from_file_till_marker(file_name: str, marker: str) -> list[str]:
	"""
	Get all lines from a file as a list of strings up to the marker.
	If marker is not found, returns all lines.

	Usage:
		lines = get_lines_from_file_till_marker("../../notes.txt", "===")
	"""
	try:
		with open(file_name, "r", encoding="utf-8") as f:
			contents = f.read()
	except Exception as e:
		raise RuntimeError(f"Failed to read file: {e}")

	lines = contents.split('\n')
	
	try:
		marker_index = lines.index(marker)
		lines = lines[:marker_index]
	except ValueError:
		# Marker not found, return all lines
		pass
		
	return lines
