import express from 'express';
import configViewEngine from './configs/viewEngine';
require('dotenv').config(); // import .env để lấy port

const port = process.env.PORT || 8080; // phuong an backup underfine khi lỗi port 
const app = express();

configViewEngine(app);

app.get("/", (req,res) =>{
    res.render('index.ejs')
})

app.get("/hoang", (req,res) =>{
    res.send("Hello Hoang!")
})

app.listen(port, () =>{
    console.log(`Your app was run at port ${port}`)
})