## Prerequisites

First, please fork this repo.
[Node.js](http://nodejs.org/) >= 6 must be installed.

## Installation

- Running `npm install` in the component's root directory will install everything you need for development.

## Demo Development Server

- `npm start` will run a development server with the component's demo app at [http://localhost:3000](http://localhost:3000) with hot module reloading.

## Running Tests

- `npm test` will run the tests once.

- `npm run test:coverage` will run the tests and produce a coverage report in `coverage/`.

- `npm run test:watch` will run the tests on every change.

## Building

- `npm run build` will build the component for publishing to npm and also bundle the demo app.

- `npm run clean` will delete built resources.

## Making and Sumibtting Changes

Uisng your fork, ensure you've properly set `git remote` to point back to **this** repo as "upstream", or whatever you want to call it. Read [GitHub's guide on forking](https://help.github.com/articles/fork-a-repo/) for more info.

Once you have that set up, read [GitHub's guide on keeping a fork in sync](https://help.github.com/articles/syncing-a-fork/).

If you've completed that, please create a branch off of the latest version of `master` using [this Git workflow](https://github.com/Automattic/wp-calypso/blob/master/docs/git-workflow.md)

When you're ready, open a PR from your fork to this repo to get the party started.

Thanks and have fun!
