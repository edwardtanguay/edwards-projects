from qtools import *
from classes.outline_item import OutlineItem

"""
outline_items = e.g.
	- INFO
		- Kyle video: https://www.youtube.com/watch?v=7-NZ0MlPpJA
		- Kyle video: https://www.youtube.com/watch?v=cTu9-C2rd-0
-------------------------------------------------------------------------------
	- FEATURE: Express CRUD API with Drizzle/SQLite + React client
		- x branch: feature-express-drizzle-sqlite-crud-server
		- x api works
		- x add react site from trpc project
		- x make mock component: ManageEmployees.tsx
"""

class ProjectItem:
	outline_items: list[OutlineItem]
	suuid: str
	kind: str
	title: str
	projectTitle: str = ""
	projectStatus: str = ""

	def __init__(self, outline_items: list[OutlineItem]):
		self.outline_items = outline_items
		self.suuid = qstr.generate_short_uuid()

		line1 = self.outline_items[0].line
		self.parseKindAndTitle(line1)
		if self.kind == "info":
			self.parse_line_variables()

	def parseKindAndTitle(self, line: str):
		self.kind = qstr.get_smart_part(line, ":", 0).lower()
		self.title = qstr.get_smart_part(line, ":", 1)

	def parse_line_variables(self):
		for outline_item in self.outline_items[1:]:
			line = outline_item.line

			# project title
			title = qstr.get_line_variable(line, "title")
			if title != "":
				self.projectTitle = title
				
			# project status
			status = qstr.get_line_variable(line, "status")
			if status != "":
				self.projectStatus = status
				

	def to_json(self):
		return {
			'suuid': self.suuid,
			'kind': self.kind,
			'title': self.title,
   			'outline_items': [item.to_json() for item in self.outline_items[1:]]
		}