// Synchronous or blocking
//-line by line execution

// Asynchronous or non-blocking

// -line by line execution not guaranteed
// - callbacks will fire
const fs=require("fs");
fs.readFile("dele.txt","utf-8", (err,data)=>
{
    console.log(err,data);
});
console.log("Here is our message");