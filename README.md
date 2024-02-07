# TOY ROBOT

This is a small CLI project that simulates a toy robot moving on a square tabletop.

This proyect is developed to running on [Node.js](https://nodejs.org/)

## FIRST STEPS

Firts, be sure you install all proyect dependencies by running

```
npm install
```

This proyect uses TypeScript, so be sure to build before starting, running:

```
npm run build
```

or

```
npm run build:dev
```

for compiling on watch mode.

You can start the app by running:

```
npm start
```

## TEST AND USAGE EXAMPLE

Here's an example of how you could interact with the application, run the following commands (you have to start the application first):

- PLACE 0, 0, NORTH
- MOVE
- MOVE
- RIGHT
- MOVE
- REPORT

The expected output should be:

```
Robot is currently at position 1, 2, EAST

```

## TESTING

This project uses [Jest](https://nodejs.org/) for automatic testing, to run current test suite on watch mode, run:

```
npm run test:dev
```
