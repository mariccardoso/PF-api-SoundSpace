import express from "express";
import SingerController from "../controllers/music.controller.js";

const SingerRouter = express.Router();

SingerRouter.get("/", SingerController.getAllSingers);
SingerRouter.post("/", SingerController.createSinger);
SingerRouter.get("/:id", SingerController.getSingerById);
SingerRouter.put("/:id", SingerController.updateSinger);
SingerRouter.delete("/:id", SingerController.deleteSinger);

export default SingerRouter;