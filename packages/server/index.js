const express = require('express');

const port = process.env.port || 5000;

const app = express();

app.get('/', (req, res) => {
    res.send("hello from backend server")
})

app.listen(port, (err) => {
    if(err){
        console.log(err);
    }else{
        console.log("server running on 5000");
    }
})