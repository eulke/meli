# Documentation

### Index

- [Documentation](#documentation)
		- [Index](#index)
		- [Installation](#installation)
	- [Commands](#commands)
		- [Storybook](#storybook)
		- [Test](#test)
		- [Linting](#linting)
	- [Stack](#stack)
		- [Nx.dex](#nxdex)
		- [Typescript](#typescript)
		- [React](#react)
		- [Scss](#scss)
		- [Storybook](#storybook-1)
		- [Node.js (Express)](#nodejs-express)
		- [Prettier ESLint](#prettier-eslint)
	- [Workspace arquitecture](#workspace-arquitecture)
		- [To do](#to-do)

### Installation

First, we need to have yarn installed on our computer. Why? it's neccesary for nx.dev because of workspaces.
Sadly npm can't handle this for now but is on the [roadmap](https://blog.npmjs.org/post/186983646370/npm-cli-roadmap-summer-2019), planned for v7.. currently on [v6](https://github.com/npm/cli/releases/tag/v6.14.7).
If you haven't installed, you can do it by running:

    npm install -g yarn

_If you already have it, you can omit this step._

Then you clone this repo:

    git clone https://github.com/eulke/meli.git

and..

    cd meli && yarn

The last command will step us inside the project and install the required dependencies. Once the dependencies install finish. You can serve the apps (both api and mercadolibre) by running:

    yarn start

Last but not leat, we check that our apps are running ok. Go to [http://localhost:4200](http://localhost:4200)
You should see something like this:

![homepage](https://i.imgur.com/UTKYcXF.png)

## Commands

### Storybook

You can serve Storybook by running:

    yarn storybook

and open: http://localhost:4400/

### Test

You can run the tests of all apps and libs simultaneously by running:

    yarn test

_Only basic tests were created_

### Linting

You can run the linting of all apps and libs simultaneously by running:

    yarn lint

## Stack

### Nx.dex

Before start talking about Nx, why monorepo?:
Monorepos have some benefits that make it easy for our project to scale. Some of them:

- Single set of dependencies
- Shared code between apps/libs
- Atomic changes

Why Nx? It provides some cool feats that make it easier to scale and avoid some pain in between.
It has a CLI that make it easier for creating libraries, apps, move folders, etc. Similar that Angular do with schematics (in fact, it uses schematics). When we make a change in some lib, we can run a command that show us what apps are affected by that change.
With tags we can restrict the use of libs by some team and we can lock some project for a team, avoiding unexpected changes by the team that mantain that project.

For more: [why nx?](https://nx.dev/react/getting-started/why-nx)

### Typescript

Typescript is a superset of javascript that make our code less error prone. It adds some features that make our code more robust and pleasent to work with.

### React

This is the frontend library that the company uses and the one that i feel more comfortable.

### Scss

The style preprocessor that the company uses

### Storybook

I like to build the basic components that every app will need in an isolated environment. Storybook give us that ability in an easy way. Making component stories give us the ability to use it for documentation.

### Node.js (Express)

Node.js with express for communication with the REST API and handling data in the server.

### Prettier ESLint

With this set of tools we gain consistency in our code

## Workspace arquitecture

![arquitecture](https://i.imgur.com/qPvl9F0.png)

In the structure you can find two separate folders:

- **apps**: It holds the application type projects. In this case the mercadolibre react app and the api express app.
- **libs**: It holds all the libraries. In this case the shared interfaces and the melui ui library with react components and storybook configuration.

Inside _apps/_ you can find

- **api/** To communication between the frontend and the meli REST API. - **connectors/** Connect with external data, in this case the API endpoints from mercadolibre. - **services/** Call the connector methods and do some logic with the data that connectors returns (in this case, transform data) - **controllers/** Receive the calls from the routes and communicate with service. - **routes/** Manage api routes and assign a controller to route.
- **mercadolibre/** React app - **components/** Has the components specific for an app that we build with the melui library. - **containers/** Has the components that the router renders, a page or screen. - **services/** Has the services that communicate with the express app. - **utils/** Has some app utils, in this case a price formatter. If the project grows, we can put this on utils library inside _libs/_

### To do

- [ ] Grids
- [ ] Better scss
- [ ] More tests (it has only basic ones on UI lib)
- [ ] SEO proof
- [ ] Next.js
- [ ] No results message
- [x] Loading spinner on data fetch
