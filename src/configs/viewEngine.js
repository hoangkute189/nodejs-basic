import express from "express";

const configViewEngine = (app) => {
    app.use(express.static('./src/public')) // trỏ đường dẫn đến file public (show các file static cho browser)
    app.set("view engine", "ejs");
    app.set("views", "./src/views")
}

export default configViewEngine;