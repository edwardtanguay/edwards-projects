import json

from qtools import qcli, debug
from classes.factory import Factory

def parse() -> None:
	
	rawProjects = Factory.create_raw_projects()
	debug(f"Number of raw projects: {len(rawProjects)}")

	projects, tasks = Factory.create_projects()
	debug(f"Number of projects: {len(projects)}")
	debug(f"Number of tasks: {len(tasks)}")
	
	# convert raw projects to JSON
	json_raw_projects = []
	for raw_project in rawProjects:
		json_raw_projects.append(raw_project.to_json())

	# convert projects to JSON
	json_projects = []
	for project in projects:
		json_projects.append(project.to_json())

	# convert tasks to JSON
	json_tasks = []
	for task in tasks:
		json_tasks.append(task.to_json())

	try:
		# save raw projects to JSON file
		json_raw_projects_data = json.dumps(json_raw_projects, indent="\t")
		with open("../parseddata/raw_projects.json", 'w') as json_file:
			json_file.write(json_raw_projects_data)

		# save projects to JSON file
		json_projects_data = json.dumps(json_projects, indent="\t")
		with open("../parseddata/projects.json", 'w') as json_file:
			json_file.write(json_projects_data)

		# save tasks to JSON file
		json_tasks_data = json.dumps(json_tasks, indent="\t")
		with open("../parseddata/tasks.json", 'w') as json_file:
			json_file.write(json_tasks_data)

	except Exception as err:
		qcli.message(f"Error: {err}", "error")