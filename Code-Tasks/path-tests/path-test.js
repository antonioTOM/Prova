const error = require('console');
const fs = require('fs');
const path = require('path');
const filePath = path.join(process.cwd(), 'path-test.txt');

console.log(filePath)

fs.writeFile('path-test.txt', 'OMG it worked again!', err => {
    if (err) throw error;
    console.log('file modified')
})

fs.readFile(filePath, (err, cont) => {
    if (err) throw error;
    console.log(String(cont))
});