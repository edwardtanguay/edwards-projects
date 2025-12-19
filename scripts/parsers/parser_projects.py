import json

from qtools import qcli, debug
from classes.factory import Factory

def parse() -> None:
	
	rawProjects = Factory.create_raw_projects()
	debug(f"Number of raw projects: {len(rawProjects)}")
	
	projects = Factory.create_projects()
	debug(f"Number of projects: {len(projects)}")
	
	# convert raw projects to JSON
	json_raw_projects = []
	for raw_project in rawProjects:
		json_raw_projects.append(raw_project.to_json())

	# convert projects to JSON
	json_projects = []
	for project in projects:
		json_projects.append(project.to_json())

	try:
		# save raw projects to JSON file
		json_raw_projects_data = json.dumps(json_raw_projects, indent="\t")
		with open("../parseddata/raw_projects.json", 'w') as json_file:
			json_file.write(json_raw_projects_data)

		# save projects to JSON file
		json_projects_data = json.dumps(json_projects, indent="\t")
		with open("../parseddata/projects.json", 'w') as json_file:
			json_file.write(json_projects_data)

	except Exception as err:
		qcli.message(f"Error: {err}", "error")