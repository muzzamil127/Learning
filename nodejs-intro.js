//console.log("Hello Love");

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) =>{
    res.statusCode = 200;
    res.setHeader('content-type', 'text/html');
    // res.end('Hello love');
    res.end(`
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Box Model</title>
        <style>
            *{
                box-sizing: border-box;
            }
             body{
                background-color: #e6cbf8;
             }
            .container {
                height: 160px;
                width: 500px;
                background-color: rgb(231,230,241);
                border: 3px solid rgb(64,6,119);
                /* padding: 10px; */
                /* margin: 10px; */
                /* padding-right: 20px;
                padding-top: 20px;
                padding-bottom: 20px; */
                padding-left: 20px;
                margin-bottom: 20px;
                border-radius: 33px;
            }
        </style>
    
    </head>
    
    <body>
        <div class="container">
            <h3>
                This is First Heading
            </h3>
            <p id="first">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, sit ab modi ut delectus possimus illum
                placeat ipsum ullam repudiandae eos nisi consequatur totam cupiditate provident sequi aspernatur atque quam
                aliquid! Repudiandae tenetur distinctio assumenda ut dolores, vel quo libero.
            </p>
        </div>
    
        <div class="container">
            <h3>
                This is First Heading
            </h3>
            <p id="second">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, sit ab modi ut delectus possimus illum
                placeat ipsum ullam repudiandae eos nisi consequatur totam cupiditate provident sequi aspernatur atque quam
                aliquid! Repudiandae tenetur distinctio assumenda ut dolores, vel quo libero.
            </p>
        </div>
    
        <div class="container">
            <h3>
                This is First Heading
            </h3>
            <p id="third">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, sit ab modi ut delectus possimus illum
                placeat ipsum ullam repudiandae eos nisi consequatur totam cupiditate provident sequi aspernatur atque quam
                aliquid! Repudiandae tenetur distinctio assumenda ut dolores, vel quo libero.
            </p>
        </div>
    </body>
    
    </html>`);
})

server.listen(port, hostname, () =>{
    console.log(`server running at http://${hostname}:${port}/`);
})