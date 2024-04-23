import express from "express"
const router = express.Router();

const controller = require("./demo.controllers");

router.get("/list", controller.getList);

export default router
