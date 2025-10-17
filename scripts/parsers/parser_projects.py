import json

from core import *
from custom import *
from qtools import *

class Project:
	def __init__(self, suuid, idCode):
		self.suuid = suuid
		self.idCode = idCode

def parse() -> None:
	lines = qfil.get_lines_from_file_till_marker(config.path_and_filename_project_file_001(), "```END")

	project_line_blocks = parsing.get_project_line_blocks(lines)
	for project_line_block in project_line_blocks:
		print(project_line_block)

	projects = []
	# Parse each project line block
	for project_line_block in project_line_blocks:	
     	# Extract idCode from the first line
		idCode = project_line_block[0].split(':')[1].strip()
		
		project = Project(
			suuid=qstr.generate_short_uuid(),
			idCode=idCode
		)
		
		projects.append(project.__dict__)

	try:
		# Convert projects to JSON
		json_data = json.dumps(projects, indent=4)
		
		# Write JSON data to file
		with open("../parseddata/projects.json", 'w') as json_file:
			json_file.write(json_data)
		
		qcli.message("Successfully updated projects.json")

	except Exception as err:
		qcli.message(f"Error: {err}", "error")