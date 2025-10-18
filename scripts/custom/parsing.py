from qtools import *

#backport: make example with this, or make generic with function as parameter
def get_project_line_blocks(lines: list[str]) -> list[list[str]]:
	"""
	Extracts blocks that start with "PROJECT:" from the input lines.
	
	Args:
		lines: List of strings containing project blocks
		
	Returns:
		A list of lists, where each inner list contains the lines of a project block
	"""
	blocks = []
	current_block = []
	
	for line in lines:
		if line.startswith('- PROJECT:') or line.startswith('- .. PROJECT:'):
			# If we have a previous block, save it
			if current_block:
				blocks.append(current_block)
			# Start a new block
			current_block = [line]
		elif current_block:
			# Add line to current block (only if we're in a block)
			current_block.append(line)
	
	# Don't forget the last block
	if current_block:
		blocks.append(current_block)

		# Trim empty strings from the beginning and end of each block
	blocks = trimLineBlocks(blocks)
	
	return blocks