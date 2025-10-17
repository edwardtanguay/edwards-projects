import random
import string

def generate_short_uuid() -> str:
	"""
	Return a random short UUID (6 characters)

	Example output: "q35HZa"
	"""
	charset = string.ascii_letters + string.digits  # A-Z, a-z, 0-9
	length = 6
	return ''.join(random.choice(charset) for _ in range(length))

def get_line_block_with_one_marker(lines: list[str], marker: str) -> list[str]:
	start = -1
	end = -1
	
	for i, line in enumerate(lines):
		if marker in line.strip():
			if start == -1:
				start = i + 1
			else:
				end = i
				break
	return lines[start:end] if start != -1 and end != -1 else []
	

def get_line_block(lines: list[str], startMarker: str, endMarker: str) -> list[str]:
	line_block = []
	recording = False
	for line in lines:
		if endMarker in line:
			break
		if recording:
			line_block.append(line)
		if startMarker in line:
			recording = True
	return line_block

import re

def line_begins_with_date(line):
	"""
	Check if a line begins with a date in the format YYYY-MM-DD followed by a semicolon.
	
	Args:
		line (str): The line to check
		
	Returns:
		bool: True if the line matches the pattern, False otherwise
	"""
	pattern = r'^\d{4}-\d{2}-\d{2};'
	return bool(re.match(pattern, line))

def get_line_blocks(lines, start_marker="starts_with_date", end_marker="starts_with_hyphens", hyphens_limit=2):
	"""
	Groups lines into blocks that begin with a date and end with hyphens.
	
	Args:
		lines: List of strings to process
		start_marker: Marker type for block start (only "starts_with_date" supported)
		end_marker: Marker type for block end (only "starts_with_hyphens" supported)
		hyphens_count: Number of hyphen lines needed to end a block
		
	Returns:
		List of line blocks (each block is a list of strings)
	"""
	blocks = []
	current_block = None
	hyphen_lines_seen = 0
	
	for line in lines:
		# Check if we should start a new block
		if start_marker == "starts_with_date" and current_block is None:
			if re.match(r'^\d{4}-\d{2}-\d{2};', line):
				current_block = [line]
				hyphen_lines_seen = 0
				continue
		
		# If we're in a block, add lines to it
		if current_block is not None:
			current_block.append(line)
			
			# Check if we should end the current block
			if end_marker == "starts_with_hyphens":
				if line.strip().startswith('---'):
					hyphen_lines_seen += 1
					if hyphen_lines_seen >= hyphens_limit:
						blocks.append(current_block)
						current_block = None
						hyphen_lines_seen = 0
	
	# Add the last block if it wasn't closed by hyphens
	if current_block is not None:
		blocks.append(current_block)
	
	return blocks
	

def convert_line_block_to_string_block(line_block: list[str]) -> str:
    """Converts a list of lines into a single string with newline characters.
    
    Args:
        line_block: A list of strings representing lines of text.
        
    Returns:
        A single string with each element from the input list joined by newlines.
    """
    return '\n'.join(line_block)