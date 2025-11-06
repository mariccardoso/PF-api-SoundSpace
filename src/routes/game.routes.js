import express from "express";
import GameController from "../controllers/game.controller.js";

const gameRouter = express.Router();

gameRouter.get("/", GameController.getAllGames);
gameRouter.post("/", GameController.createGame)

export default gameRouter;
