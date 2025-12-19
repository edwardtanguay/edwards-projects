from classes.project import Project

class ProjectConverter:
	projects: list = []
	
	def __init__(self, raw_projects):
		self.raw_projects = raw_projects
	
	def convert(self):
		for raw_project in self.raw_projects:
			# check if project already exists, if so, add items to it
			existing_project = next((p for p in self.projects if p.id_code == raw_project.id_code), None)
			if existing_project:
				existing_project.project_items.extend(raw_project.project_items)
			else:
				project = Project(raw_project)
				self.projects.append(project)
