const fs = require('fs');

fs.writeFileSync('notes.txt', 'My name is Tym Zon\n');

//---------- Challenge ------------//

fs.appendFileSync('notes.txt', 'I live at 11 Doongalla Road, Attadale, WA 6156 and my number is 0000 000 000\n');

