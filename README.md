# Friday cars

Build a simple web app that allows a user to select their car from a directory of registered cars.
This data will be provided by the api server in this repo.
The api provides a list of available makes, models of each make and specific cars for each model with horsepower and engine capacity info.

## Installation, Run and Test

Nodejs (tested in v16.14.0) is required in order to run and build the project.

** For changing the server address, modify the `.env` file **

- `yarn install`
- `yarn start`
- `yarn test`

### Running The Server

Download the api server from [here](https://www.dropbox.com/s/i3bjhj90ccbtf1w/friday-code-challenge.zip?dl=0&file_subpath=%2Fapiserver).

You will need node.js version 7.6 or higher

```bash
node apiserver/server.js
```

### Tools and technologies

- Typescript: main language used
- React: The javaScript library for building the interface
- Redux Toolkit: State management
- Styled components: Styling the app
- axios, axios-retry: http client for making API requests

### Testing

It was used @testing-library/react for testing purposes. There are some snapshots for the main and smaller components. The principal features were tested using integration tests, where a group of functionalities were tested together, like data fetching, clicks on inputs, options and buttons, etc (See: App.test.tsx, ModelSelect.test.tsx)

### Continuous integration

Github actions is used for building and testing using different nodejs versions every time a new commit is made.
