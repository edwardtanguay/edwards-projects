from classes.outline_item import OutlineItem
from qtools import *

class OutlineBlock:
	line_blocks: list[list[str]]
	outline_items: list[OutlineItem] = []

	def __init__(self, line_blocks: list[list[str]]):
		self.line_block = line_blocks
		self.create_outline_items()

	def create_outline_items(self):
		self.outline_items = []
		for line in self.line_block:
			self.outline_items.append(OutlineItem(line))

	def to_json(self):
		json_items = []
		for outline_item in self.outline_items:
			json_items.append(outline_item.to_json())
		return json_items