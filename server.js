let app = require('express')();
let express = require('express');
let fs = require('fs');
let index = fs.readFileSync('index.html');

let http = require('http');

app.use(express.static('./'));

app.get('/', (req,res)=>{
    console.log('request in');
    res.status(200).send();
})

http.createServer(app).listen(8080, () =>{
    console.log("Listening on port 8080.");
});