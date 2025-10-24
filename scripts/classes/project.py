from qtools import *
from classes.project_item import ProjectItem
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

class Project:
	project_line_block:str
	suuid: str = ""
	idCode: str = ""
	title: str = ""
	kind: str = ""
	mode: str = ""
	outline_block: OutlineBlock = None
	project_items: list[ProjectItem] = []

	def __init__(self, project_line_block: list[str]):
		self.project_line_block = project_line_block
		self.prepareOutlineBlock()
		self.parseGeneralFields()
		self.parseProjectItems()
		self.parseLineVariables()
		self.defineMode()

	def defineMode(self):
		firstOutlineItem = self.outline_block.outline_items[0]
		marker = firstOutlineItem.marker
		# qdev.debug(marker)
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
	def parseLineVariables(self):
		for project_item in self.project_items:
			if project_item.kind == "info":
				self.title = project_item.projectTitle
				self.status = project_item.projectStatus
		# default values
		if self.title == "":
			self.title = self.idCode.upper()
		if self.status == "":
			self.status = "(fill in status)"

	def prepareOutlineBlock(self):
		self.outline_block = OutlineBlock(self.project_line_block)

	def parseGeneralFields(self):
		self.suuid = qstr.generate_short_uuid()
		self.parseIdCode(self.outline_block.outline_items[0].line)	

	# example line: "PROJECT: edwards-projects"
	def parseIdCode(self, line):
		parts = qstr.breakIntoParts(line, ":")
		self.idCode = parts[1].strip()
		qdev.debug(f"PROJECT: {self.idCode}")

	def parseProjectItems(self):
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
		
	def to_json(self):
		return {
			'suuid': self.suuid,
			'idCode': self.idCode,
			'title': self.title,
			'status': self.status,
			'mode': self.mode,
			'repo': 'https://github.com/edwardtanguay/' + self.idCode,
			'project_items': [project_item.to_json() for project_item in self.project_items]
		}