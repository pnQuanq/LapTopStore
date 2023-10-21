const express = require("express");
const dotenv = require("dotenv");

dotenv.config()

const app = express()
const port = process.env.PORT || 5000

app.get('/', (req, res) => {
    return res.send('Hello')
})

const mongoose=require("mongoose");

mongoose.connect(`mongodb+srv://admin:${process.env.MONGO_DB}@cluster0.63booln.mongodb.net/?retryWrites=true&w=majority`).then(()=>{
    console.log("connection success")
});



console.log(process.env.MONGO_DB);

app.listen(port, () => {
    console.log('Server is running in port: ', + port)
})