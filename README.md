# User Age Calculator

A simple static app that lets you:
- add user details (name, date of birth, email)
- store them in the browser
- calculate each user's current age automatically

## Project Notes

This project was created as a simple frontend app for collecting user information and calculating age from the date of birth.

### Steps completed
- Created the HTML, CSS, and JavaScript files
- Added a form for name, date of birth, and email
- Implemented browser storage to keep user data
- Added automatic age calculation on display
- Started a local server with `python3 -m http.server 3000`

## Run

From this folder, start a simple server:

```bash
python3 -m http.server 3000
```

Then open http://localhost:3000

## GitHub

The project has been initialized as a Git repository and pushed to GitHub.

### Command log used

```bash
git status --short --branch
git remote -v
command -v gh
gh auth status
git init
git config user.name "mojga"
git config user.email "mojga@example.com"
git add .
git commit -m "Initial commit"
gh repo create myai --public --source=. --remote=origin --push
git status --short
git add README.md
git commit -m "Update README with project notes"
git push origin HEAD
```

### CLI checks performed

- Verified that `gh` is installed.
- Verified that `gh` is authenticated to GitHub.
- Verified that GitHub CLI is configured to use HTTPS.
- Verified the repository remote URL.
- Confirmed the project was successfully pushed to GitHub.
