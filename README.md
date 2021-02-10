# Introduction

pdfconverter-ui is a single page React application that allows users to convert PDF files into plain text files. Users can choose any PDF files and upload to api server to retrieve them as plain text files. After files are being uploaded, application listens file status changes as polling based, by constantly requesting to the server. So that application notifies users about file status changes as initialized, converted, failed etc. When the converted text file is returned from server, application shows all pages separately.

There are 3 main resources in this project : 
* **Files**: The resource that the user has chosen from the file system on their computer but has not yet uploaded.
* **Tasks**: The specified resource sent by the user to the server and started to be processed by the server.
* **Pages**: The state of the file after it is processed and converted.

## Project Tech Stack

* **[Redux](https://redux.js.org/)**: State management library. Responsible of managing files, tasks and pages in this project. Also used with redux-thunk for async logic. 
* **[Material UI](https://github.com/mui-org/material-ui)**: A simple and customizable React component library.  
* **[Jest](https://github.com/facebook/jest)**: Unit test framework. Used in this project for testing some of components and modules.
* **[Typescript](https://www.typescriptlang.org/)**: Language built on javascript. Useful for managing api responses and redux state objects in this project.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
