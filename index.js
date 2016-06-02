#!/usr/bin/env node
var watch = require('chokidar').watch
var args = require('minimist')(process.argv.slice(2))
var debounce = require('debounce')
var exec = debounce(require('exec-sh'), 250)
var debug = require('debug')('sh-watch')

var globs = args._.length > 0 ? args._ : ['**/*.*']
var command = args.command

if (!command) {
  console.log('Missing a command to execute')
  process.exit(1)
}

debug('Command: ' + command)
debug('Globs: ' + globs.join(', '))
var watcher = watch(globs)

watcher
  .on('add', path => onChange('added', path))
  .on('change', path => onChange('changed', path))
  .on('unlink', path => onChange('removed', path))
  .on('addDir', path => onChange('added', path))
  .on('unlinkDir', path => onChange('removed', path))
  .on('ready', () => debug('Initial scan complete. Waiting for changes.'))

function onChange (event, filepath) {
  debug(filepath + ' was ' + event)
  exec(command)
}
