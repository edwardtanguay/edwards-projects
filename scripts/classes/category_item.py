from qtools import *

class CategoryItem:
	id_code: str
	short_info: str

	# example: "active; currently creating basic parsing of text file that shows project information"
	def __init__(self, category_line: str):
		self.id_code = qstr.get_smart_part(category_line, ";", 0)
		self.short_info = qstr.get_smart_part(category_line, ";", 1)

	def to_string(self) -> str:
		return {
			"idCode": self.id_code,
			"shortInfo": self.short_info
		}