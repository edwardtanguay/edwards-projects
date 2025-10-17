from qtools import *

class ParseFile:
	path_and_filename: str
	lines: list[str]

	def __init__(self, path_and_filename):
		self.path_and_filename = path_and_filename
		self.lines = qfil.get_lines_from_file(path_and_filename)

	def get_line_block(self, startMarker: str, endMarker: str) -> list[str]:
		return qstr.get_line_block(self.lines, startMarker, endMarker)