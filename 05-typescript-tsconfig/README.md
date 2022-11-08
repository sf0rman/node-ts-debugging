# 05 TypeScript

TypeScript is an extention of JavaScript or what we would call a `superset` of JavaScript that essentially adds typechecking to JavaScript.

On typescriptlang.org you can read the whole explanation of this, but a summary (and my opinion) for why use typescript would primerally be becase large projects in JavaScript are very difficult to maintain. TypeScript improves JS by...

- ... giving the IDE you work with autofill-features for your objects and classes (types and interfaces)
- ... validating connections between the parts of you codebase.
- ... warning you and even preventing you from writing "buggy" code
- ... adding additional syntax and data-types that JavaScript doesn't support natively (enums are a good example of this)

The downside of TypeScript is that it takes some setup to run. TypeScript doesn't really run on its own, but can be considered "a layer on top of javascript" to help developers. And when you need to run your code, the TypeScript transpiler will convert your code back to JavaScript for you to run.

The official TypeScript compiler is `tsc`. There are several alternatives out there, `ts-node` as used in the previous challenge might be the simplest to use and there are other ones like `gulp` which is mentioned on TypeScriptLang.org's documentation pages. For this excersise we're going to setup and run a TypeScript file the official way.

## Challenge

- Install `typescript` as a developer dependency
- Create a tsconfig.json file includes `includeme.ts` and ignores `ignoreme.ts` and anything in `node_modules`.
- Set the output directory to `build`.
- Run `npx tsc` in the terminal and confirm the correct files are transpiled
- Run the file.

## Documentation

- [TypeScript docs](https://www.typescriptlang.org/)
- [Official Installation guide](https://www.typescriptlang.org/download)
- [TSC CLI options](https://www.typescriptlang.org/docs/handbook/compiler-options.html#handbook-content)
- [tsconfig.json](https://www.typescriptlang.org/tsconfig)
- [Why was TypeScript created](https://www.typescriptlang.org/why-create-typescript)
- [Gulp](https://www.typescriptlang.org/docs/handbook/gulp.html)

## Example where TypeScript seems unnecessary

Imagine the function `addNumbers` that takes two numbers and returns the sum.
In JavaScript you won't find any data-types defined anywhere and the language will accept any value into the function during development.

```
function addNumbers(x, y) {
  return x + y;
}

addNumbers(1, 2);             // returns: 3
addNumbers("Hello", "World")  // returns "HelloWorld"
addNumbers("Hello", 5);       // returns "Hello5"
addNumbers(true, true)        // returns 2
addNumbers(true, false)       // returns 1
addNumbers(false, false)      // returns 0
```

This seems convenient at first and has some benefits, but it can cause problems when working with larger codebases. Especially when the functions get more complex and might crash if the wrong data-types are passed.

## Example where TypeScript becomes very useful

Imagine another function `getInitials` that takes two strings and returns the first letter of each. When passing two strings it's all fine, but in this case we are using a function that only exists on strings: `charAt`, so as soon as a parameter doesn't match the type we can quickly see the problem TypeScript attempts to solve.

```
function getInitials(firstname, surname) {
  return firstname.charAt(0) + surname.charAt(0)
}

getInitials("Sebastian", "Forman") // returns "SF"
getInitials("Sebastian", 5) // throws: Uncaught TypeError: surname.charAt is not a function
```

TypeScript attempts to provide some type-safety to help developers make sure their code will run before you even attempt to run it.
