import express from "express";

// Importar todas as rotas
import authRouter from "./auth.routes.js";
import authMiddleware from "../middleware/auth.middleware.js";
import gameRouter from "./game.routes.js";
import channelRouter from "./channels.routes.js";
import streamRouter from "./stream.routes.js";

const router = express.Router();

// Rotas públicas
router.use("/auth", authRouter);
router.use("/games", gameRouter)
router.use ("/channels", channelRouter)
router.use("/streams", streamRouter)

// Rotas protegidas
router.use(authMiddleware);


export default router;
