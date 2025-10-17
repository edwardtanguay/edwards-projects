#backport: whole file, also pip dotenv
import os

import pathlib
from qtools import *
from dotenv import load_dotenv

root_dir = pathlib.Path(__file__).parent.parent.parent
dotenv_path = os.path.join(root_dir, '.env')
load_dotenv(dotenv_path)

def path_and_filename_project_file_001() -> str:
	project_file_001 = os.getenv("PROJECT_FILE_001")
	if project_file_001 is None:
		qcli.message("Error: PROJECT_FILE_001 is not set in .env file", "error")
		return ""
	
	return project_file_001
