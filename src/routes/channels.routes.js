import express from "express";
import ChannelController from "../controllers/channel.controller.js";

const channelRouter = express.Router();

channelRouter.get("/", ChannelController.getAllChannels);
channelRouter.post("/", ChannelController.createChannel)

export default channelRouter;
