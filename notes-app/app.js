import { writeFileSync, appendFileSync } from 'fs';

writeFileSync('notes.txt', 'My name is Tym Zon\n');

//---------- Challenge ------------//

appendFileSync('notes.txt', 'I live at 11 Doongalla Road, Attadale, WA 6156\n');

