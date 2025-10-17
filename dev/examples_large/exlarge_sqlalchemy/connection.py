from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

dbname = "db_main.sqlite"
engine = create_engine(f"sqlite:///{dbname}")
Session = sessionmaker(bind=engine)
session = Session()

Base = declarative_base()