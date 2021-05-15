const chalk = require('chalk');
const validator = require('validator');
const yargs = require('yargs');
const notes = require('./notes.js');

//Customise yargs version
yargs.version('1.1.0');

// create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Title of a new note',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Body of a new note',
      demandOption: true,
      type: 'string',
    },
  },
  handler: function (argv) {
    notes.addNote(argv.title, argv.body);
  },
});

yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'Title of a note to be removed',
      demandOption: true,
      type: 'string',
    },
  },
  handler: (argv) => {
    notes.removeNote(argv.title);
  },
});

yargs.command({
  command: 'list',
  describe: 'Lists all notes',
  handler: () => {
    console.log('Listing notes');
  },
});

yargs.command({
  command: 'read',
  describe: 'Read a note',
  handler: function () {
    console.log('Read a note');
  },
});

// add, remove, read, list
yargs.parse();
