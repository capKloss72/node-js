const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => 'Your notes...';

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title);

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });
    saveNote(notes);
    console.log(chalk.bgGreen(`A note with the title of "${title}" was added`));
  } else {
    console.log(
      chalk.bgRed(`A note with the title of "${title}" already exists`)
    );
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const remainingNotes = notes.filter((note) => note.title !== title);
  saveNote(remainingNotes);
  notes.length > remainingNotes.length
    ? console.log(chalk.bgGreen(`Note with a title of ${title} was removed!`))
    : console.log(chalk.bgRed(`Note with a title of ${title} was not found!`));
};

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.green(`Your Notes`));
  notes.forEach((note) => console.log(note.title));
};

const readNote = (title) => {
  const notes = loadNotes();
  const noteToRead = notes.find((note) => note.title === title);
  if (noteToRead) {
    console.log(`${chalk.bgYellowBright.bold.red(title)}`);
    console.log(`${noteToRead.body}`);
  } else {
    console.log(chalk.red('No Note Found!'));
  }
};

const loadNotes = () => {
  try {
    const notesBuffer = fs.readFileSync('./notes/notes.json');
    const dataJSON = notesBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

const saveNote = (notes) =>
  fs.writeFileSync('./notes/notes.json', JSON.stringify(notes));

const checkTitle = (notes, title) => {
  notes.find((title) => {
    return true;
  });
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote,
};
