import express from "express";
import StreamController from "../controllers/stream.controller.js";

const streamRouter = express.Router();

streamRouter.get("/", StreamController.getAllStreams);
streamRouter.post("/", StreamController.createStream)

export default streamRouter;
