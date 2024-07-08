# Weather App - PSL Challenge

## Description

This is a simple web app that allows you to sign in with an username and password. After signing in, you can search for the weather in a given location.

## Technologies

- React
- TypeScript
- Vite
- Ant Design
- React Router
- Vitest + React Testing Library

## Explanation of design choices and architecture

- Why I chose to use React Router for routing?
  I decided to use React Router because it is a lightweight and flexible routing library that is easy to use and integrates well with React.
  This was a very tricky part of the project, as I had to learn how to use it and understand its concepts (again) because I was used to file-based routing and had not used react router for a while
- Why I chose to use Ant Design for the UI?
  I chose Ant Design because it is a popular and well-maintained UI library that has a large community and a lot of resources available. It also has a good documentation and examples, which helped me understand how to use it.
  I almost used shadcn as the main library but I was not sure if I could use tailwindcss for the challenge.
  Also again, this was very difficult to me because I was usted to use tailwindcss and apply classes to the elements directly and I think it was a bit confusing at the beginning not using tailwind for the challenge, but I think it was a good decision
- Why I chose to use Vite for the development server?
  Vite is a fast and lightweight development server and is the official recommended server for React.
- Why I chose that folders structure?
  I decided to use a folder structure that allows me to easily organize my code and separate my components, routes, and hooks into different folders.
  This makes it easier to manage and maintain the codebase.

## Prerequisites

Node.js and npm are required to run the project.
Vite is used as the development server and the build tool.

## Getting Started

1. Clone the repository
2. Install dependencies with `npm install`
3. Create a `.env` file in the root directory with the following content:

```
VITE_API_URL=weatherapi_url
VITE_API_KEY=your_api_key
```

You can get the weatherapi_url and your_api_key from [https://www.weatherapi.com/](https://www.weatherapi.com/)

4. Run the app with `npm run dev`
5. Open http://localhost:5173/ in your browser
6. Enjoy!

### User credentials

The app uses a local storage to store the user credentials. If you want to reset the credentials, you can delete the `auth` key from the local storage or click the "Sign out" button in the top right corner of the app.

```
username: adal.dev
password:123
```

## Running the tests

Run the tests with `npm run test`
