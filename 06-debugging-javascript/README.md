# 06 Debugging (JavaScript)

Using the debugger in you IDE can be very useful when writing code. Unlike logging everything you do when you develop, the debugger will allow you to stop your code at practically any point (read: on any line), run the code line by line and inspect how variables and other values change over time. It even lets you change variables mid-runtime to test your code without having to rewrite anything.

Most full IDE software, like `Visual Studio`, `VSCode`, `Eclipse`, `IntelliJ`, `Webstorm`, `Pycharm`, `CLion` and `Rider` to list a few have their own built in debuggers, even the developer-tools in WebBrowsers have debuggers built in. These debuggers vary in setup and configuration. Some provide full graphical UIs for configuring the debuggers, others, like what we'll be doing in `VS Code` are a little more clunky to setup. However the concepts are the same.

Although the setup will be different in the different IDE's, the concept is the same: They will all, one way or another, run your code via a the debugger or in some cases attach the debugger to an existing process on you machine to that enables breakpoints and other features.

## Challenge

- Setup the debugger in VSCode

There are 2 errors in code that don't actually cause the program to crash, but we want the results to be:
```
Total depth 1000
Total distance 1990
```

Figure out what mistakes have been made here.
- Solving the first mistake should result in `NaN` and `1990`
- Second mistake should fix the `NaN` issue

## Documentation

- [Debugging in VSCode](https://code.visualstudio.com/docs/editor/debugging)

## SourceCode

Code is taken from my solution to day2, part1 from the [adventofcode 2021](https://adventofcode.com/2021/day/2) that I broke for the demo : )  

There's a new [adventofcode 2022](https://adventofcode.com/2022) which might be fun do to, but it gets really challenging very quickly... 