const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const route = require('./routes/ToDoRoute')

require("dotenv").config()

const app = express()

const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(cors())


mongoose
.connect(process.env.MONGODB_URL)
.then(()=>console.log(`Connected to MONGODB Successfuly`))
.catch((err)=>console.log(err))


app.use(route)

app.listen(PORT,()=>{
    console.log(`The server Running on: ${PORT}`);
})

