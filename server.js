const express = require("express")
const port = 8080
const app = express()

app.get("/",(req,res) =>{
    res.send("Hello world!")
})

app.get("/hoang",(req,res) =>{
    res.send("Hello Hoang!")
})

app.listen(port,() =>{
    console.log(`Your app was run at port ${port}`)
})