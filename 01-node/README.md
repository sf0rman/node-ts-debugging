# 01 Node on its own

A package.json and npm is NOT necessary to run a javascript file with Node.
Assuming the node runtime is installed on your machine, a single `.js` file can be run using `node <filename>.js` in the terminal.

## Challenge

- Navigate to the folder in the terminal and run the `index.js` file using node in the terminal

## Extra information

### Interpreted language
JavaScript is what we call an `interpreted language`, which means you don't need to compile code into machine instructions. It can run directly as it's written, usually in some runtime (program).
Web Browsers (Chrome, Firefox etc.) have a JavaScript runtime built into them, wheras if you want to run JavaScript directly on a computer, you need to install a runtime for your machine.
The most popular runtime for JavaScript is [Node.js](https://nodejs.org/en/), but there are other options like [bun](https://bun.sh/) and probably others I don't know about

The alternative is a `compiled langauge` which has to be compiled (converted) into machine-instructions before it can run.

### Popular interpreted languages
- JavaScript
- Python
- Perl

### Popular compiled languages
- C++ (compiles to machine instructions and has to be compiled seperately for each operating system. This means that if you compile for Windows, the code won't run on a Mac and vice versa.
- C# (Compiles to the dotnet runtime)
- Java (Compiles to the Java runtime)