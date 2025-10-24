import json

from core import *
from custom import *
from qtools import *
from classes.project import Project

def parse() -> None:
	file_001_line_block = qfil.get_line_block_from_file_till_marker(config.path_and_filename_project_file_001(), "```END")
	project_line_blocks = parsing.get_project_line_blocks(file_001_line_block)

	projects = []
	for project_line_block in project_line_blocks:	
		project = Project(project_line_block)
		projects.append(project.to_json())

	try:
		# Convert projects to JSON
		json_data = json.dumps(projects, indent="\t")
		
		# Write JSON data to file
		with open("../parseddata/projects.json", 'w') as json_file:
			json_file.write(json_data)
		
		qcli.message("Successfully updated projects.json")

	except Exception as err:
		qcli.message(f"Error: {err}", "error")