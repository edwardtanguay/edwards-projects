import os
from qtools import *
from pathlib import Path


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

def get_image_path_and_file_name(path: str, id_code: str) -> str:
	"""
	Looks for an image file with the given id_code and extensions .jpg, .png, or .gif
	
	Args:
		path: Directory path to search in
		id_code: The filename (without extension) to search for
		
	Returns:
		Full path to the image file if found, None otherwise
	"""
	extensions = ['jpg', 'png', 'gif']
	
	for ext in extensions:
		filename = f"{id_code}.{ext}"
		project_root = Path(__file__).parent.parent.parent
		full_path = os.path.join(project_root, f"public{path}{filename}")

		if os.path.isfile(full_path):
			return f"{path}{filename}"
	
	return ""
