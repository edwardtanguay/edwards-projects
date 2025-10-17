import tools as t
import datetime

t.section('current date/time')
dt = datetime.datetime.now()
print(dt)
print(dt.year)
print(dt.strftime("%A"))

t.section('specific date/time')
dt2 = datetime.datetime(2000, 12, 31)
print(dt2)
dt3 = datetime.datetime(2000, 12, 31, 12, 30, 0)
print(dt3)
print(dt3.strftime("%B"))
# see other date/time format codes: https://www.w3schools.com/python/python_datetime.asp