import express from 'express';
import configViewEngine from './configs/viewEngine';

const port = 8080
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