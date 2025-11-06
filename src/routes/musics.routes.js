import express from "express";
import MusicController from "../controllers/music.controller.js";

const MusicRouter = express.Router();

MusicRouter.get("/", MusicController.getAllMusics);
MusicRouter.post("/", MusicController.createMusic);
MusicRouter.get("/:id", MusicController.getMusicById);
MusicRouter.put("/:id", MusicController.updateMusic);
MusicRouter.delete("/:id", MusicController.deleteMusic);

export default MusicRouter;