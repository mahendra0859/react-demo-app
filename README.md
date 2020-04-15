# React Demo App

- [Click for live demo](https://mahendra0859.github.io/react-demo-app/)

#### Commands to start the project

```
$ npm i
$ npm start
```

- Runs the app in the development mode.
- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

#### Deploying React app to Github Pages using 'gh-pages' package

```
$ npm install gh-pages --save-dev
$ npx json -I -f package.json -e "this.homepage='http://{username}.github.io/{repo-name}'"
$ npx json -I -f package.json -e "this.scripts={...this.scripts,'predeploy':'npm run build','deploy':'gh-pages -d build'}"
$ git init
$ git remote add origin git@github.com:Yuribenjamin/my-app.git
$ npm run deploy
```

#### Preview

![](https://media.giphy.com/media/RkE4bKITgkGBAxxtY8/giphy.gif)
