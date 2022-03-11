

![Screen Sho![Screen Shot 2022-02-28 at 4 48 19 pm](https://user-images.githubusercontent.com/58890818/155931303-c182b869-73a5-47a2-842d-f26b8d983e95.png)
t 2022-02-28 at 4 47 40 pm](https://user-images.githubusercontent.com/58890818/155931267-b1161bd3-5a31-401c-8558-29c7cb2b431f.png)

![Screen Shot 2022-02-28 at 4 48 19 pm](https://user-images.githubusercontent.com/58890818/155931414-18750c56-0651-4041-9ccf-ba40f0539acc.png)

![Screen Shot 2022-02-28 at 4 48 39 pm](https://user-images.githubusercontent.com/58890818/155931431-c9d7cba2-6618-4bc6-806f-fb85c13709f5.png)


# Context
This app is a price comparison tool to compare price from two cinemas – Cinemaworld and Filmworld. The app will display both prices, and then calculate to highlight the cheaper ones. The movie catalogue data comes from 2 API, which are not reliable. Therefore, instead of letting the app crashes, a solution has been made to notify users about the issue, and recommend users to reload the page.
Also, this app can be used properly in both desktop and mobile.
I chose React framework to build this app since I am most comfortable in JavaScript language and this framework. Moreover, the React community is among the biggest, which can provide many documents, helps, and tools to build.

# Architectural elements and decisions
The app will have: 
  1.	A page “ClassicMoviesPage” with the pathname “/ClassicMovies”
  2.	Components to render in the page on different conditions:
        •	MovieListSkeleton: to roughly display empty templates of elements while the page is waiting to be rendered with data.
        •	MovieList: to be displayed when client successfully got data back from the request to API.
        •	Movie: children of Movie, acts as a blueprint to display each movie’s information.
        •	ErrorComponent: to be displayed when there is error from the API call. 
  3.	Data: using axios, I request two data sets from two APIs, then used some functions to combine them into one (since these two data sets is pretty much       identical, the only difference is their price) so it is easier for me to pass these data down to components.

# Getting Started with Create React App

After cloning this project from Github:
  - cd into "lexicon-challenge"
  - ten "npm install"
  - then you can use these scripts below.
  
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
