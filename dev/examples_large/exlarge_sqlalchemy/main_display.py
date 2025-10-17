from models import Department, Employee
from connection import engine, Base

def display_all_departments():
	from connection import session

	# Query all departments
	departments = session.query(Department).all()
	for department in departments:
		print(f"Department ID: {department.id}, Name: {department.name}")

if __name__ == "__main__":
	# Create all tables in the database
	Base.metadata.create_all(engine)

	display_all_departments()

