import StreamModel from "../models/stream.model.js";

class StreamController {
    // Listar todas as transmissãos
    async getAllStreams(req, res) {
        const title = req.query.title;
        const page = req.query.page || 1;
        const limit = req.query.limit || 10;

        try {
            const streams = await StreamModel.findAll(
                title,
                page,
                limit 
            );
            res.json(streams);
        } catch (error) {
            console.error("Erro ao listar transmissãos:", error);
            res.status(500).json({ error: "Erro ao listar transmissãos" });
        }
    }

    // Criar nova transmissão
    async createStream(req, res) {
        try {
            const {
                title,
                thumbnailUrl,
                isLive,
                userId,
                channelId,
                gameId

            } = req.body;

            // Validação básica
            if (!title|| !userId || !channelId || !gameId ) {
                return res
                    .status(400)
                    .json({
                        error:
                            "Os campos titulo, descrição, plataforma e data de lançamento são obrigatórios!",
                    });
            }
            // Criar objeto da transmissão
            const data = {
                title,
                thumbnailUrl,
                isLive,
                userId,
                channelId,
                gameId
            };

            // Criar transmissão
            const stream = await StreamModel.create(data);

            return res.status(201).json({
                message: "Transmissão criada com sucesso!",
                stream,
            });
        } catch (error) {
            console.error("Erro ao criar uma nova transmissão: ", error);
            res.status(500).json({ error: "Erro ao criar uma nova transmissão" });
        }
    }

}

export default new StreamController();
