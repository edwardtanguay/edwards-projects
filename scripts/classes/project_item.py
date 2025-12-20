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
	project_title: str = ""
	project_status: str = ""
	project_repo: str = ""
	project_live: str = ""
	project_category_lines: list[str] = []

	def __init__(self, outline_items: list[OutlineItem]):
		self.project_category_lines = []
		self.outline_items = outline_items
		self.suuid = qstr.generate_short_uuid()

		line1 = self.outline_items[0].line
		self.parse_kind_and_title(line1)
		if self.kind == "info":
			self.parse_line_variables()

	def parse_kind_and_title(self, line: str):
		self.kind = qstr.get_smart_part(line, ":", 0).lower()
		self.title = qstr.get_smart_part(line, ":", 1)

	def parse_line_variables(self):
		for outline_item in self.outline_items[1:]:
			line = outline_item.line

			# project title
			title = qstr.get_line_variable(line, "title")
			if title != "":
				self.project_title = title
				
			# project status
			status = qstr.get_line_variable(line, "status")
			if status != "":
				self.project_status = status

			# project repo
			repo = qstr.get_line_variable(line, "repo")
			if repo != "":
				self.project_repo = repo

			# project live
			live = qstr.get_line_variable(line, "live")
			if live != "":
				self.project_live = live


			# project categories
			category = qstr.get_line_variable(line, "category")
			if category != "":
				self.project_category_lines.append(category)

	# indents are still raw that this point, e.g. "indents::2" means the line started after the second tab in the text file
	# but we the indent level to start as 0 for displaying on the frontend, so 2 = 0, 3 = 1, etc.
	def adjust_indents(self):
		for outline_item in self.outline_items:
			outline_item.indents -= 2

	def to_json(self):
		return {
			'suuid': self.suuid,
			'kind': self.kind,
			'title': self.title,
   			'outlineItems': [item.to_json() for item in self.outline_items[1:]]
		}