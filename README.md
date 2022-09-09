#TestCafe Tutorials
Create a project directory
cd to the project directory
npm init -y   --> create the package.json file
Install testcafe package - do not install globally to get the suggestions
  npm i testcafe --save-dev

 Add the .gitignore file and add node_modules in the file to ignore the module specific files for git promotion 

Create a tests directory and create firstTest.js file
Add/update the following snippet in package.json
    "scripts":{
        "test": "testcafe chrome /tests/firstTest.js"
    }
