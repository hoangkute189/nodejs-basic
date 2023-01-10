import express from "express";
import homeController from '../controller/homeController';

let router = express.Router();

const initWebRoute = (app) => {
    // write to use controller
    router.get("/", homeController.getHomepage);

    // Dùng string query khai báo param id
    router.get("/details/user/:id", homeController.getDetailPage)

    // Dùng post gửi data lên trang mới
    router.post("/create-new-user", homeController.createNewUser)

    router.post("/delete-user", homeController.deleteUser)

    router.get("/update-user/:id", homeController.updateUser)

    router.post("/post-update-user", homeController.postUpdateUser)

    router.get("/hoang", (req, res) => {
        res.send("Hello Hoang!")
    })

    return app.use('/', router)
}

export default initWebRoute;