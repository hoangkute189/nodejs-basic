import express from "express";
import homeController from '../controller/homeController';

let router = express.Router();

const initWebRoute = (app) => {
    // write to use controller
    router.get("/",homeController.getHomepage);

    // Dùng string query khai báo param id
    router.get("/details/user/:id",homeController.getDetailPage)

    router.get("/hoang", (req,res) =>{
        res.send("Hello Hoang!")
    })

    return app.use('/', router)
}

export default initWebRoute;