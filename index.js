// * fs module => file system
const fs = require('fs');
const http = require('http');
const url = require('url');

////////////////////////////////////////
// * FILES
// * Blocking, synchronous way
// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
// const textOut = `This is what we know about the avocado: ${textIn}.\nCreated on ${new Date()}`;
// fs.writeFileSync('./txt/output.txt', textOut);

// * Non-blocking, asynchronous way
// fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
//  fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
//   fs.readFile('./txt/append.txt', 'utf-8', (err, data3) => {
//    fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, (err) => {});
//   });
//  });
// });
// console.log('Will read file!');

////////////////////////////////////////
// * SERVER
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
// * convert string to object
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
 const pathName = req.url;
 if (pathName === '/' || pathName === '/overview') {
  res.end('This is OVERVIEW!');
 } else if (pathName === '/product') {
  res.end('This is PRODUCT!');
 } else if (pathName === '/api') {
  res.writeHead(200, {
   'Content-type': 'application/json',
  });
  res.end(data);
 } else {
  res.writeHead(404, {
   'Content-type': 'text/html',
   'my-own-header': 'hello-world',
  });
  res.end('<h1>Page not found!!!</h1>');
 }
});
server.listen(8000, '127.0.0.1', () => {
 console.log('Listening to requests on port 8000');
});
