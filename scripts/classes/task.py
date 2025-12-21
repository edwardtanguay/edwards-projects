from qtools import *
from classes.project_item import ProjectItem

class Task:
	project_id_code: str
	project_item: ProjectItem
	suuid: str
	stage:str
	kind: str
	title: str
	begin_date_time: str
	end_date_time: str
	branch: str = ""
	rank: float = 2.5

	def __init__(self, project_id_code: str, project_item: ProjectItem):
		self.project_id_code = project_id_code
		self.project_item = project_item
		self.suuid = project_item.suuid
		self.stage =  self.convert_marker_to_stage()
		self.kind = project_item.kind
		self.title = self.parse_and_get_title()
		self.branch = project_item.branch
		self.rank = project_item.rank

	def convert_marker_to_stage(self):
		return {
			"x": "finished",
			"..": "current",
			"))": "paused"
		}.get(self.project_item.marker, "upcoming")

	def parse_and_get_title(self):
		self.parse_times()
		return qstr.delete_after_marker(self.project_item.title, "//")

	def parse_times(self):
		rest_after_comment_marker = qstr.get_rest_after_first_instance(self.project_item.title, "//")
		# e.g. "2025-12-21 15:03:15..2025-12-21 15:03:15"
		self.begin_date_time = qstr.get_smart_part(rest_after_comment_marker, "..", 0)
		self.end_date_time = qstr.get_smart_part(rest_after_comment_marker, "..", 1)	

	def to_json(self):
		return {
				'projectIdCode': self.project_id_code,
				'suuid': self.suuid,
				'stage': self.stage,
				'kind': self.kind,
				'title': self.title,
				'beginDateTime': self.begin_date_time,
				'endDateTime': self.end_date_time,
				'branch': self.branch,
				'rank': self.rank	
			}