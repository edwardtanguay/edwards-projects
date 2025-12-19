# edwards-projects

This is a site that shows all my projects.

- repo: https://github.com/edwardtanguay/edwards-projects
- live: https://edwards-projects.vercel.app

## Create .env file in root

The paths are based on the /scripts directory in this project.

```
PROJECT_FILE_001 = "../../../maindata/projects_active.txt"
PROJECT_FILE_002 = "../../../maindata/projects_archive.txt"
```

## Set up backend

-   (root directory of this project)
-   `python -m venv .venv`
-   (Linux/Mac) `source .venv/bin/activate`
-   (Windows with bash) `source .venv/Scripts/activate`
-   (Windows command line) `.venv\Scripts\activate`
-   `pip install -r requirements.txt`

## Set up frontend

- `npm i`
- `npm run dev`

## npm scripts

- `npm run cp` - create page
- `npm run pd` - parse data 
- `npm run gh` - GitHub commit log
- `npm run backup` - backup site in ../BACKUP folder (as .zip file without node_modules)

## Documentation

### Project Parsing

- projects are parsed with `npm run pd` (pd = parse data)
- **rawProject**: a project in one of the two data files (see .env file), rawProjects can contain duplicates with the same idCode
- **project**: a unique project, created from rawProjects by removing duplicates and enhancing with addition information
- we have these two kinds of projects in order to simplify the classes
	- rawProjects are used for parsing the raw data into a usuable form
	- projects are what are sent to the frontend
- the suuids are different in each file
