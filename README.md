# Documentation

### Index

 - [Installation](#installation)
 - [Commands](#commands)
 - [Stack](#stack)
	 -  [Nx.dev](#nx.dev)
	 -  [Typescript](#typescript)
	 -  [React](#react)
	 -  [Scss](#scss)
	 -  [Storybook](#storybook)
	 -  [Node.js (Express)](#node.js-(express))
 - [Workspace arquitecture](#workspace-arquitecture)
 - [To do](#to-do)

### Installation

First, we need to have yarn installed on our computer. Why? it's neccesary for nx.dev because of workspaces.
Sadly npm can't handle this for now but is on the [roadmap](https://blog.npmjs.org/post/186983646370/npm-cli-roadmap-summer-2019), planned for v7.. currently on [v6](https://github.com/npm/cli/releases/tag/v6.14.7).
If you haven't installed, you can do it by running:

    npm install -g yarn
*If you already have it, you can omit this step.*

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
I like to build the basic components that every app will need in an isolated environment. Storybook give us that hability in an easy way. Making component stories give us the hability to use it for documentation.
### Node.js (Express)
Node.js with express for communication with the REST API and handling data in the server.
## Workspace arquitecture
### To do

 - [ ] Grids
 - [ ] Better scss
 - [ ] More tests (it has only basic ones on UI lib)
