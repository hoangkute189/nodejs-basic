import express from 'express';
import configViewEngine from './configs/viewEngine';
import initWebRoute from './route/web';
// import connection from './configs/connectDB';

require('dotenv').config(); // import .env để lấy port

const port = process.env.PORT || 8080; // phuong an backup underfine khi lỗi port 
const app = express();

// setup view engine
configViewEngine(app);

// init web route
initWebRoute(app);

app.listen(port, () =>{
    console.log(`Your app was run at port ${port}`)
})