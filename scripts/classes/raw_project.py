from qtools import *
from classes.project_item import ProjectItem
from classes.category_item import CategoryItem
from classes.outline_block import OutlineBlock

"""
EXAMPLE: project_line_block

[- PROJECT: showcase-drizzle]
[\t- INFO]
[\t\t- title::Showcase Drizzle]
[\t\t- Kyle video: https://www.youtube.com/watch?v=7-NZ0MlPpJA]
[\t\t- Kyle video: https://www.youtube.com/watch?v=cTu9-C2rd-0]
[\t- FEATURE: Express CRUD API with Drizzle/SQLite + React client]
[\t\t- x branch: feature-express-drizzle-sqlite-crud-server]
[\t\t- x api works]
[\t\t- x add react site from trpc project]
[\t\t- x make mock component: ManageEmployees.tsx]
"""

class RawProject:
	project_line_block:str
	suuid: str = ""
	id_code: str = ""
	title: str = ""
	status: str = ""
	kind: str = ""
	mode: str = ""
	repo: str = ""
	live: str = ""
	main_image: str = ""
	categories: list[CategoryItem] = []
	outline_block: OutlineBlock = None
	project_items: list[ProjectItem] = []

	def __init__(self, project_line_block: list[str]):
		self.categories = []
		self.project_items = []	
		self.project_line_block = project_line_block
		self.prepare_outline_block()
		self.parse_general_fields()
		self.parse_project_items()
		self.parse_line_variables()
		self.define_main_image()
		self.define_mode() # TODO: remove

	def define_mode(self):
		firstOutlineItem = self.outline_block.outline_items[0]
		marker = firstOutlineItem.marker
		if marker == "..":
			self.mode = "active"
		elif marker == ",,":
			self.mode = "stable"
		elif marker == "x":
			self.mode = "closed"
		elif marker == "))":
			self.mode = "planning"
		else:
			self.mode = "open"

	# line variables are values that have "::" in the INFO section of the project
	def parse_line_variables(self):
		for project_item in self.project_items:
			if project_item.kind == "info":
				self.title = project_item.project_title
				self.status = project_item.project_status
				self.repo = project_item.project_repo
				self.live = project_item.project_live
				self.categories = [CategoryItem(project_category_line) for project_category_line in project_item.project_category_lines]
			self.repo = self.get_repo_for_json()
		# default values
		if self.title == "":
			self.title = self.id_code.upper()
		if self.status == "":
			self.status = "(fill in status)"

	def prepare_outline_block(self):
		self.outline_block = OutlineBlock(self.project_line_block)

	def parse_general_fields(self):
		self.suuid = qstr.generate_short_uuid()
		self.parse_id_code(self.outline_block.outline_items[0].line)	

	# example line: "PROJECT: edwards-projects"
	def parse_id_code(self, line):
		parts = qstr.breakIntoParts(line, ":")
		self.id_code = parts[1].strip()

	def parse_project_items(self):
		count = 0
		recordng_item = False
		recording_outline_items: list[OutlineItem] = []
		for outline_item in self.outline_block.outline_items:
			if outline_item.indents == 1:
				if count > 0:
					self.project_items.append(ProjectItem(recording_outline_items))
					recording_outline_items = []
				count += 1
				recordng_item = True
			if recordng_item:
				recording_outline_items.append(outline_item)
		self.project_items.append(ProjectItem(recording_outline_items)) # include the last item

	def get_repo_for_json(self):
		if self.repo != "none":
			return "https://github.com/edwardtanguay/" + self.id_code
		else:
			return self.repo

	def define_main_image(self):
		self.main_image = qfil.get_image_path_and_file_name("/images/projects/", self.id_code)
		
	def to_json(self):
		return {
			'suuid': self.suuid,
			'idCode': self.id_code,
			'title': self.title,
			'status': self.status,
			'mode': self.mode, # TODO: remove
			'repo': self.repo,
			'live': self.live,
			'mainImage': self.main_image,
			'categories': [category.to_string() for category in self.categories],
			'projectItems': [project_item.to_json() for project_item in self.project_items]
		}