// * fs module => file system
const fs = require('fs');

// * Blocking, synchronous way
// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
// const textOut = `This is what we know about the avocado: ${textIn}.\nCreated on ${new Date()}`;
// fs.writeFileSync('./txt/output.txt', textOut);

// * Non-blocking, asynchronous way
fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
 fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
  fs.readFile('./txt/append.txt', 'utf-8', (err, data3) => {
   fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, (err) => {});
  });
 });
});
console.log('Will read file!');
