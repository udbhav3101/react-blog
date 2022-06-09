const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

const fs = require('fs');
const PORT = process.env.PORT || 8000;
const routes = require('./routes/routes')(app, fs);

app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname, "public", "index.html"))
})

app.use(express.static("public"))


const server = app.listen(PORT, ()=>{
    console.log("Express Server is running %s", PORT);
})



