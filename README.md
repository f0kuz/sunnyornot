## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## My thought process
I wanted to create custom look of the app. Simple with original colors and fonts.<br>
Ensure that user can engage with the app by see details for any day with some nice graph representation(as TODO).

In case of my coding skills. I wanted to show how i work on many area of frontend:
- using CSS Grid, Flexbox.
- how i like to structure the app folders.
- how i work with Redux(it can be done with local state but i chose Redux to show my coding style with it).
- how i work and process data with JavaScript.
- how i wrote my first test. I'm starting to drill down on this topic.

## Any tradeoffs i made
Logic of the withLoader HOC needs to be fixed. I noticed it on the end. There is a bug with initial state `loading: true` property

## With  more time i will do:
- Render graph in MainDay section
- Display data for current range hour
- Add Error handling
- Search field for particular city weather
