const express = require("express");
const dotenv = require("dotenv");

dotenv.config()

const app = express()
const port = process.env.PORT || 5000

app.get('/', (req, res) => {
    return res.send('Hello')
})

const mongoose=require("mongoose");

mongoose.connect(process.env.MONGO_DB).then(()=>{
    console.log("connection success");
});

const db= mongoose.connection.useDb('LapTopStore');



app.listen(port, () => {
    console.log('Server is running in port: ', + port)
})