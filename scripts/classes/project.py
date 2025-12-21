from qtools import *
from classes.raw_project import RawProject
from classes.project_item import ProjectItem
from classes.category_item import CategoryItem
from classes.outline_block import OutlineBlock

class Project:
	raw_project: RawProject = None
	suuid: str = ""
	id_code: str = ""
	title: str = ""
	status: str = ""
	mode: str = ""
	repo: str = ""
	repo2: str = ""
	live: str = ""
	main_image: str = ""
	categories: list[CategoryItem] = []
	outline_block: OutlineBlock = None
	project_items: list[ProjectItem] = []

	def __init__(self, raw_project: RawProject):
		self.raw_project = raw_project
		self.suuid = raw_project.suuid
		self.id_code = raw_project.id_code
		self.title = raw_project.title
		self.status = raw_project.status
		self.mode = raw_project.mode
		self.repo = raw_project.repo
		self.live = raw_project.live
		self.main_image = raw_project.main_image
		self.categories = raw_project.categories
		self.project_items = self.get_project_items()

	def get_project_items(self):
		# we currently ignore all non "::" fields, implement this later
		return [project_item for project_item in self.raw_project.project_items if project_item.kind != "info"]

	def to_json(self):
		return {
			'suuid': self.suuid,
			'idCode': self.id_code,
			'title': self.title,
			'status': self.status,
			'mode': self.mode,
			'repo': self.repo,
			'live': self.live,
			'mainImage': self.main_image,
			'categories': [category.to_string() for category in self.categories],
			# 'projectItems': [project_item.to_json() for project_item in self.project_items] # all info is now being parsed into tasks
		}