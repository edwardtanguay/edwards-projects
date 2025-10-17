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
