const express = require('express');
const path = require('path');
//const sqlite3 = require('sqlite3').verbose();
const pdfMake = require('pdfmake/build/pdfmake.js');
const vfs_fonts = require('pdfmake/build/vfs_fonts.js');
const fs = require('fs');
const { electron } = require("process");
// const open = require('./dist/open/index')

const appexpress = express();
const port = process.env.port || 3000;

const rawdata = fs.readFileSync(path.join(__dirname,"ownerDetails.json"))
const owner = JSON.parse(rawdata)







//app.use(express.static(__dirname))
appexpress.use(express.static("./"))
appexpress.use(express.static("./frontend"))
appexpress.use(express.static("./backend"))

appexpress.get("/data",(req,res)=>{
    res.json(owner)
})



appexpress.listen(port,()=>{
    console.log(`Listens on: http://localhost:${port}`)
    //open("http://localhost:3000")
})



