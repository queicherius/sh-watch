### :boom: Careful: This package is no longer maintained and is only here for historic reasons. This means you should very likely not use it. You have been warned. :boom:

---

# sh-watch

Globbing watcher cli tool

## Install

```
npm install sh-watch
```

## Usage

```bash
# Execute tests if anything in the current working directory 
# or any subdirectories changes
sh-watch --command='npm test'

# Execute tests if anything in the "tests" directory 
# or any subdirectories changes
sh-watch 'tests/**/*.js' --command='npm test'

# Execute tests if anything in the "tests" or "src" directory 
# or any subdirectories changes
sh-watch 'tests/**/*.js' 'src/**/*.js' --command='npm test'
```

Note: Make sure to pass the globs in as **strings**, else the shell will auto-expand them.

## Debugging

This module uses [debug](https://github.com/visionmedia/debug).

```bash
DEBUG='sh-watch' sh-watch --command='npm test'
```

## Licence

MIT
