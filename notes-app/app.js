const chalk = require('chalk');
const validator = require('validator');
const yargs = require('yargs');
const getNotes = require('./notes.js');


//Customise yargs version
yargs.version('1.1.0')

// create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  handler: function() {
    console.log('Adding a new note');
  }
})

yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  handler: function() {
    console.log('Removing note');
  }
})

yargs.command({
  command: 'list',
  describe: 'Lists all notes',
  handler: function() {
    console.log('Listing notes');
  }
})

yargs.command({
  command: 'read',
  describe: 'Read a note',
  handler: function() {
    console.log('Read a note');
  }
})

// add, remove, read, list

console.log(yargs.argv);