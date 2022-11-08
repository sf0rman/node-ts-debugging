# 03 Dependencies

Along with the scripts and other meta information in the `package.json`, there is a section for dependencies which is crucial for some applications to run.

The `package.json` file has 3 types of dependencies:
- The regular dependencies (`dependencies`) required for the application to work.
- The developer-dependencies (`devDependencies`) often additional features used during development, but not required for the application to run in production. Often these things would be things like linters (e.g. `eslint`), code-formatters (e.g. `prettier`), unit-test frameworks (e.g. `vitest` or `jest`) and `typescript` and all typescript types (e.g. `@types/react`, `@types/node`) should be in `devDependencies` as these aren't included in the built project.
- And finally peer-dependencies (`peerDependencies`) which are used when creating node-packages to inform npm that these dependencies should be installed by your root project. A good example of this would be when working on a UI Library for React. In this case you don't want to actually install React into the library, but simply tell npm that React is required somewhere in the app. 

## Documentation

- [npm install](https://docs.npmjs.com/cli/v8/commands/npm-install)  
- [npm uninstall](https://docs.npmjs.com/cli/v8/commands/npm-uninstall)

## Challenge

- Setup a package.json like in the previous step
- Install `lodash` into your project
- Run project (with script)

## package-lock.json

Notice how that when you start a project there is no `package-lock.json` file, but as soon as you install something, that file is created for you.

The purpose of the `package-lock.json` is to explain to npm exactly how each installed package is resolved. In this example you should be able to see

## Installing dependencies

### Installing a single dependency

You can install a package using the commands:
`npm install <package-name>`
or the shorthand
`npm i <package-name>`

### Remove a dependency

You can remove a dependency the same way
`npm uninstall <package-name>`
or the shorthand
`npm un <package-name>`

### Installing a dependency as a devDependency

To install a developer dependency, you need tell npm this by adding `--save-dev` or the shorthand `-D`

### Installing several dependencies at once

You can install several packages in one go by simply adding more package names seperate by a single space.
`npm i <package1> <package2> <package3>`

### Example

- `npm i express` - install express into dependencies
- `npm i -D eslint prettier` - install eslint AND prettier into devDependencies

## Extra information

Public packages are typically shared on [npmjs](https://www.npmjs.com/), but it is also possibly to have packages shared other places; like through `AWS`, `Azure`, `Github` or even on private registries. 

In order to tell npm to lookup packages on other registries, you'll need to set the registry in your `.npmrc` file.

For example, setting the registry to github, you need to set the registry and optionally a token for that registry.
```
registry=https://npm.pkg.github.com
```

You can also tell npm to look for specific scoped packages seperately from the rest of them. The example below will look for any package starting with `@shell/<package>` in github and install the rest from npmjs.org
```
registry=https://registry.npmjs.org
@shell:registry=https://npm.pkg.github.com
```