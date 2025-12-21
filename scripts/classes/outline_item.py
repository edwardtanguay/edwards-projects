from qtools import *

class OutlineItem:
	indents: int
	line: str
	marker: str = ''

	"""
	outline_line = e.g.
	- PROJECT: showcase-drizzle
	/t- this another example of a line
	/t/t- this another example of a line
	"""

	def __init__(self, outline_line: str):
		outline_line = outline_line.rstrip() # remove trailing whitespace, this fixes the problem that a blank line with tab would count as a block
		self.indents = qstr.count_tabs_at_front_of_line(outline_line)
		self.line = outline_line.strip()

		# trim the outline line markers
		self.line = qstr.chopLeft(self.line, '- ')

		# parse out two character markers
		if self.line.startswith(".. ") or self.line.startswith(",, ") or self.line.startswith(")) "):
			self.marker = self.line[:2]
			self.line = qstr.chopLeft(self.line, self.marker + " ") 

		# parse out one character markers
		if self.line.startswith("x "):
			self.marker = self.line[:1]
			self.line = qstr.chopLeft(self.line, self.marker + " ") 

	def to_json(self):
		return {
				'indents': self.indents,
				'line': self.line,
				'marker': self.marker	
			}