from connection import Base
from sqlalchemy import Column, ForeignKey, Integer, String

class Department(Base):
	__tablename__ = 'department'
	
	id = Column(Integer, primary_key=True)
	name = Column(String, nullable=False)

	def __init__(self, name):
		self.name = name

class Employee(Base):
	__tablename__ = 'employee'
	
	id = Column(Integer, primary_key=True)
	first_name = Column(String, nullable=True)
	last_name = Column(String, nullable=True)
	department_id = Column(Integer, ForeignKey('department.id'), nullable=False)

	def __init__(self, first_name, last_name, department_id):
		self.first_name = first_name
		self.last_name = last_name
		self.department_id = department_id