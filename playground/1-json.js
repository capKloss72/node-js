const fs = require('fs')

// const book = {
//   title: 'Nemesis',
//   author: 'Issac Asimov'
// }

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync('./test_files/1-jason.json', bookJSON)

// const loadJSON = fs.readFileSync('./test_files/1-jason.json')
// const dataJSON = JSON.parse(loadJSON)
// console.log(`${dataJSON} ${dataJSON.title}`);
// console.log(dataJSON);

const jsonDataBuffer = fs.readFileSync('./test_files/1-jason.json')
let jsonString = jsonDataBuffer.toString()
const person = JSON.parse(jsonString)

person.age = 48
person.name = 'Tymoteusz'

jsonString = JSON.stringify(person)
fs.writeFileSync('./test_files/1-jason.json', jsonString)