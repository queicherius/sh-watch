#!/usr/bin/env node
var gaze = require('gaze')
var args = require('minimist')(process.argv.slice(2))
var debounce = require('debounce')
var exec = debounce(require('exec-sh'), 250)
var debug = require('debug')('sh-watch')

var glob = args._.length > 0 ? args._ : ['**/*.*']
var command = args.command

if (!command) {
  console.log('Missing a command to execute')
  process.exit(1)
}

debug('Command: ' + command)
debug('Globs: ' + glob.join(', '))
gaze(glob, function (err, watcher) {
  if (err) {
    console.log('Error starting watcher', err)
    process.exit(1)
  }

  this.on('all', function (event, filepath) {
    debug(filepath + ' was ' + event)
    exec(command)
  })
})
