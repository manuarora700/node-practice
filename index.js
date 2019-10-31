const fs = require ('fs');

const txtIn = fs.readFileSync('./txt/input.txt', 'utf-8');

const txtOut = `Manu Arora is dealing with file system like a pro and the string goes: ${txtIn}\n created on ${Date.now()}`

fs.writeFileSync("./txt/output.txt", txtOut);

console.log("File Written");