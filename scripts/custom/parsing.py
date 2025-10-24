from qtools import *

#backport: make example with this, or make generic with function as parameter
def get_project_line_blocks(line_block: list[str]) -> list[list[str]]:
	"""
	Extracts blocks that start with "PROJECT:" from the input lines.
	
	Args:
		lines: List of strings containing project blocks
		
	Returns:
		A list of lists, where each inner list contains the lines of a project block
	"""
	project_line_blocks = []
	current_line_block = []

	project_prefixes = ['- PROJECT:', '- .. PROJECT:', '- x PROJECT:', '- ,, PROJECT:', '- )) PROJECT:']
	
	for line in line_block:
		if any(line.startswith(prefix) for prefix in project_prefixes):
			# If we have a previous block, save it
			if current_line_block:
				project_line_blocks.append(current_line_block)
			# Start a new block
			current_line_block = [line]
		elif current_line_block:
			# Add line to current block (only if we're in a block)
			current_line_block.append(line)
	
	# Don't forget the last block
	if current_line_block:
		project_line_blocks.append(current_line_block)

		# Trim empty strings from the beginning and end of each block
	project_line_blocks = trimLineBlocks(project_line_blocks)
	
	return project_line_blocks