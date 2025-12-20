from classes.project_item import ProjectItem

class Task:
	project_id_code: str
	suuid: str
	kind: str
	title: str

	def __init__(self, project_id_code: str, project_item: ProjectItem):
		self.project_id_code = project_id_code
		self.suuid = project_item.suuid
		self.kind = project_item.kind
		self.title = project_item.title

	def to_json(self):
		return {
				'projectIdCode': self.project_id_code,
				'suuid': self.suuid,
				'kind': self.kind,
				'title': self.title	
			}