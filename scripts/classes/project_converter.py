from classes.project import Project
from classes.task import Task

class ProjectConverter:
	projects: list = []
	tasks: list = []
	
	def __init__(self, raw_projects):
		self.raw_projects = raw_projects
	
	def convert(self):
		self.transfer_raw_projects_to_projects()
		self.adjust_indents()
		self.create_tasks()

	def transfer_raw_projects_to_projects(self):
		for raw_project in self.raw_projects:
			# check if project already exists, if so, add items to it
			existing_project = next((p for p in self.projects if p.id_code == raw_project.id_code), None)
			if existing_project:
				existing_project.project_items.extend(raw_project.project_items)
			else:
				project = Project(raw_project)
				self.projects.append(project)

	# indents are still raw that this point, e.g. "indents::2" means the line started after the second tab in the text file
	# but we the indent level to start as 0 for displaying on the frontend, so 2 = 0, 3 = 1, etc.
	def adjust_indents(self):
		for project in self.projects:
			for project_item in project.project_items:
				project_item.adjust_indents()

	def create_tasks(self):
		for project in self.projects:
			for project_item in project.project_items:
				self.tasks.append(Task(project.id_code, project_item))
		