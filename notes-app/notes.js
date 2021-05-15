const fs = require('fs');

const getNotes = () => {
  return 'Your notes...';
};

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNotes = notes.filter((note) => {
    return note.title === title;
  });

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body,
    });
    saveNote(notes);
  } else {
    console.log(`A note with the title of "${title}" already exists`);
  }
};

const removeNote = (title) => {
  console.log(`${title} to be removed`);
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

const saveNote = (notes) => {
  fs.writeFileSync('./notes/notes.json', JSON.stringify(notes));
};

const checkTitle = (notes, title) => {
  notes.find((title) => {
    return true;
  });
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
};
