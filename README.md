This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and it is an exercise of the awesome course [The Modern React Bootcamp (Hooks, Context, Router & More)](https://www.udemy.com/modern-react-bootcamp/).

The architecture of components for the app is:

App
    |--Pokegame
              |--Pokedex
                       |--Pokecard
                       |--Pokecard
                       |--Pokecard
                       |--Pokecard
               |--Pokedex
                       |--Pokecard
                       |--Pokecard
                       |--Pokecard
                       |--Pokecard
                       
Components:
           ### App: This component wrap the components of the app.
           ### Pokegame: This component has an array with 8 pokemons, Each pokemon have a name, a pic, a speciality and experience. 
                         When the Pokegame begins pick up randomly 4 pokemons for each pokedex and add the experiences of the 4 pokemon.
                         The pokedex with a mayor experience is the winner. Lastly Pokegame assign the status (Winner or Looser) and the total experience for every pokedex.
           ### Pokedex: This component receive an array with 4 pokemons, the estatus (Winner or Looser) and the total experience of the 4 pokemons. For every pokemon the component render a pokecard.
           ### Pokecard: This component receive one pokemon and shows the data (name, pic, speciality and the experience).
                   

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

