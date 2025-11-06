import ChannelModel from "../models/channel.model.js";

class ChannelController {
    // Listar todos os canals
    async getAllChannels(req, res) {
        const name = req.query.name;
        const isLive = req.query.isLive
        const page = req.query.page || 1;
        const limit = req.query.limit || 10;

        try {
            const channels = await ChannelModel.findAll(
                name,
                isLive,
                page,
                limit 
            );
            res.json(channels);
        } catch (error) {
            console.error("Erro ao listar canals:", error);
            res.status(500).json({ error: "Erro ao listar canals" });
        }
    }

    // Criar novo canal
    async createChannel(req, res) {
        try {
            const {
                name,
                description,
                isLive,
                bannerUrl,
                logoUrl,
                userId,
            } = req.body;

            // Validação básica
            if (!name || !description || !isLive || !userId) {
                return res
                    .status(400)
                    .json({
                        error:
                            "Os campos nome, descrição, status de live e usuário são obrigatórios!",
                    });
            }
            // Criar objeto do canal
            const data = {
                name,
                description,
                isLive,
                bannerUrl,
                logoUrl,
                userId,
            };

            // Criar canal
            const channel = await ChannelModel.create(data);

            return res.status(201).json({
                message: "Canal criado com sucesso!",
                channel,
            });
        } catch (error) {
            console.error("Erro ao criar um novo canal: ", error);
            res.status(500).json({ error: "Erro ao criar um novo canal" });
        }
    }

}

export default new ChannelController();
