# 02 Node project

Usually, when working on a node project, you'll want to have a `package.json` setup for any dependencies, scripts and other meta information about your project.

The `package.json` file can be considered the source of the projects information and contains:
- Meta information used by npm
- Scripts to run project
- Dependencies that are required by program to run.

## Documentation

- [NPM Docs](https://docs.npmjs.com/cli/v8/commands/npm-init)  
- [package.json](https://docs.npmjs.com/cli/v8/configuring-npm/package-json)

## Challenge

Setup a `package.json` with npm and create a script to run the `index.js`

## Scripts syntax

Within the `package.json` you can add a property `scripts` and add your scripts there.

### Example
```
{
 "name": "someExample",
 "scripts": {
   "myFirstScript": "<any command you could put in your terminal>",
   "otherScript": "<any command you could put in your terminal>"
 }
}
```
Which should allow you to run:
- `npm run myFirstScript`
- `npm run otherScript`

## Extra information

Whenever you clone a node-project setup by someone else, it is usually recommended to check the package.json file first to find out which commands and dependencies you would need.

The scripts section of a `package.json` is simply an alias for any command that you otherwise could run directly from a terminal.
Very often when using frameworks like React, JEST, vitest and SST, those modules come with their own CLI (Command Line Interface) that could be useful to setup scripts for.