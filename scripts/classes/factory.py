from core import config
from qtools import qfil
from custom import parsing
from classes.raw_project import RawProject
from classes.project import Project
from classes.project_converter import ProjectConverter

class Factory:

	@staticmethod
	def create_raw_projects():
		raw_projects = []

		# process file 001
		file_001_line_block = qfil.get_line_block_from_file_till_marker(config.path_and_filename_project_file_001(), "```END")
		file_001_project_line_blocks = parsing.get_project_line_blocks(file_001_line_block)
		for project_line_block in file_001_project_line_blocks:	
			raw_project = RawProject(project_line_block)
			raw_projects.append(raw_project)

		# process file 002
		file_002_line_block = qfil.get_line_block_from_file_till_marker(config.path_and_filename_project_file_002(), "```END")
		file_002_project_line_blocks = parsing.get_project_line_blocks(file_002_line_block)
		for project_line_block in file_002_project_line_blocks:	
			raw_project = RawProject(project_line_block)
			raw_projects.append(raw_project)

		return raw_projects


	@staticmethod
	def create_projects():
		projectConverter = ProjectConverter(Factory.create_raw_projects())
		projectConverter.convert()
		return projectConverter.projects, projectConverter.tasks