import GameModel from "../models/game.model.js";

class GameController {
    // Listar todos os jogos
    async getAllGames(req, res) {
        const title = req.query.title;
        const platform = req.query.platform
        const page = req.query.page || 1;
        const limit = req.query.limit || 10;

        try {
            const games = await GameModel.findAll(
                title,
                platform,
                page,
                limit 
            );
            res.json(games);
        } catch (error) {
            console.error("Erro ao listar jogos:", error);
            res.status(500).json({ error: "Erro ao listar jogos" });
        }
    }

    // Criar novo jogo
    async createGame(req, res) {
        try {
            const {
                title,
                description,
                platform,
                releaseDate,
                coverImageUrl,
                genre,
            } = req.body;

            // Validação básica
            if (!title || !description || !platform || !releaseDate) {
                return res
                    .status(400)
                    .json({
                        error:
                            "Os campos titulo, descrição, plataforma e data de lançamento são obrigatórios!",
                    });
            }
            // Criar objeto do jogo
            const data = {
                title,
                description,
                platform,
                releaseDate,
                coverImageUrl,
                genre,
            };

            // Criar jogo
            const game = await GameModel.create(data);

            return res.status(201).json({
                message: "Jogo criado com sucesso!",
                game,
            });
        } catch (error) {
            console.error("Erro ao criar um novo jogo: ", error);
            res.status(500).json({ error: "Erro ao criar um novo jogo" });
        }
    }

}

export default new GameController();
