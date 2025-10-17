from models import Department, Employee
from connection import engine, Base

def save_data():
	# Example usage: Adding a department and an employee
	from connection import session

	# Create a new department
	new_department = Department(name="Human Resources")
	session.add(new_department)
	session.commit()

	# Create a new employee in the newly created department
	new_employee = Employee(first_name="Hans", last_name="Schmidt", department_id=new_department.id)
	session.add(new_employee)
	session.commit()

	print("Department and Employee added successfully!")


if __name__ == "__main__":
	# Create all tables in the database
	Base.metadata.create_all(engine)

	save_data()
