//Creating a file and Reading it and Replacing the content using modules....

// const fs = require('fs');

//To read this file
// let text = fs.readFileSync("dele.txt", "utf-8");
// text = text.replace("read", "Rana");


// console.log("The content of the file is as follows: ");
// console.log(text);

// console.log("Creating the new file and writing the things in it: ")
// fs.writeFileSync("rana.txt", text);


// const a = require('a');

// let h = a.readFileSync("dele.txt", "utf-8");
// h = h.replace("we", "us");


//To read and print on the terminal (run by typing node ./node-modules.js);

const fs = require("fs");
let text = fs.readFileSync("dele.txt","utf-8");

text=text.replace("Rana","Read");
//To replace the content of the existing file;

console.log("The content of the file dele.txt is as follows: ")
console.log(text);

console.log("Creating a new file...");
console.log("Created successfully");
fs.writeFileSync("rana.txt",text);