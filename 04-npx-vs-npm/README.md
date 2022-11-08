# 04 NPX vs NPM

Node Package Manager `npm` is used for creating, installing and managing packages in your node project, but you will sometimes also see commands startin with `npx` when reading documentation for various libraries and frameworks.

Simply put `npx` allows you to run a command from a npm package without having to install it first. 

## Challenge

Run `index.ts` without a package.json or any dependencies with `ts-node`.

## Documentation

- [npx](https://docs.npmjs.com/cli/v8/commands/npx)

## Extra information

[ts-node](https://www.npmjs.com/package/ts-node) is a TypeScript execution engine and REPL for Node.js.

## Examples of using NPX

- `npx create-react-app` allows you to run the script that bootstraps a prebuilt starting point for React.
- `npx tsc` allows you to compile typescript files without having to install typescript globally.