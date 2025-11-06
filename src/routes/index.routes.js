import express from "express";


import SingerRouter from "./singers.routes.js";
import MusicRouter from "./musics.routes.js";

const router = express.Router();

// Rotas públicas
router.use("/cantores", SingerRouter);
router.use("/musicas", MusicRouter);


export default router;
