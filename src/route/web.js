import express from "express";
import homeController from '../controller/homeController';

let router = express.Router();

const initWebRoute = (app) => {
    // write to use controller
    router.get("/",homeController.getHomepage);

    router.get("/hoang", (req,res) =>{
        res.send("Hello Hoang!")
    })

    return app.use('/', router)
}

export default initWebRoute;