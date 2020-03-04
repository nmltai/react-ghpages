import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <ol>
        <li>Create a new github repo with your username and githubio. Github pages specify what you need to name your repo in order to use ghpages</li>
        <li>Download whatever it takes so you can run the command "npx create-react-app [insert ur name]"</li>
        <li>use the command npx create-react-app</li>
        <li>Now on github create ANOTHER repo and name it what you like. Once you created the repo on github youll see "…or push an existing repository from the command line"
        Paste that command into your terminal while inside the react app folder you just created with npx command.</li>
        <li>also use the command npm install --save ghpages</li>
        <li>Now go into the package.json file and above dependencies paste in "homepage": "https://[insert ur user name].github.io/[insert the repo name]".
        Note the repo name is not your githubio repo that you created it's the other one that you used to get the "...or push an existing repository..." command</li>
        <li>Then add these two lines  "predeploy": "npm run build" AND "deploy": "gh-pages -d build" within the scripts in package.json. This should be below dependencies</li>
        <li>Now use the command npm run deploy</li>
        <li>Then go to the homepage link in your browser.</li>
        <li>Also to check if you did it right, go to github and the repo you pushed the react app code onto. In the code tab, below commits, click on the branch and you should see ghpages. </li>
      </ol>
      {/* <p>Create a new github repo with your username and githubio.</p>
      <p>Github pages specify what you need to name your repo in order to use ghpages.</p>
      <p>Download whatever it takes so you can run the command "npx create-react-app [insert ur name]</p>
      <p>use the command npx create-react-app</p>
      <p>Now on github create ANOTHER repo and name it what you like.</p>
      <p>Once you created the repo on github youll see "…or push an existing repository from the command line"
        Paste that command into your terminal while inside the react app folder you just created with npx command.</p>
      <p>also use the command npm install --save ghpages</p>
      <p>Now go into the package.json file and above dependencies paste in "homepage": "https://[insert ur user name].github.io/[insert the repo name]".</p>
      <p>Note the repo name is not your githubio repo that you created it's the other one that you used to get the "...or push an existing repository..." command</p>
      <p>hen add these two lines  "predeploy": "npm run build" AND "deploy": "gh-pages -d build" within the scripts in package.json.</p>
      <p>This should be below dependencies.</p>
      <p>Now use the command npm run deploy.</p>
      <p>Then go to the homepage link in your browser.</p>
      <p>Also to check if you did it right, go to github and the repo you pushed the react app code onto.</p>
      <p>In the code tab, below commits, click on the branch and you should see ghpages. </p>
      <p>Now it should work! Everytime you make changes use npm run deploy and it should reflect</p> */}

      </header>
    </div>
  );
}

export default App;
