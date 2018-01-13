# How to Create a Boilerplate MERN app

## Initialize Your Project with npm
```
mkdir mern-redux-passport
cd mern-redux-passport
npm init
```
During the init process you will be prompted to add a GitHub repository. Now would be a good time to make a new project on GitHub. Add the repo link to your package.json when prompted.

## Initialize Your Project with Git
```
git init
git remote add origin https://github.com/nielsenjared/mern.git
atom .gitignore
```
Add `node_modules` to your `.gitignore`.

## Set Up a Simple Server
```
npm install express --save
```
Add a server.js:
```
const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send("Hello World!");
});
const PORT = process.env.PORT || 3001;
app.listen(PORT);
```

Start the server and navigate to localhost:3001 to verify that it works. You don't need to use port 3001, but don't use 3000. That's the default for Create React App.

## Deploy to Heroku
Do not wait until the last minute to deploy! Let’s deploy this now so we can test deployment periodically.

Update package.json:
```
	"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js"
  },
```
Then log into Heroku via the command line and create a new app:
```
heroku login
heroku create
```

Verify the creation of your Heroku app by running `git remote -v`.

Then run the following:
```
git add .
git commit -m “First”
git push -u origin master
git push heroku master
```
Navigate to the URL provided to verify deployment. 

In the future:
```
	git add .
	git commit -m “Ch-ch-ch-changes…”
	git push heroku master
```
