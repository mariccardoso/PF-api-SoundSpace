import MusicModel from "../models/music.model.js";

class MusicController {
    async getAllMusics(req, res) {
        const title = req.query.title;
        const description = req.query.description
        const url = req.query.url
        const rating = req.query.rating

        const page = req.query.page || 1;
        const limit = req.query.limit || 10;

        try {
            const musics = await MusicModel.findAll(
                title,
                description,
                url,
                rating,
                page,
                limit 
            );
            res.json(musics);
        } catch (error) {
            console.error("Erro ao listar canals:", error);
            res.status(500).json({ error: "Erro ao listar canals" });
        }
    }

    async getMusicById(req, res) {
        const { id } = req.params;
        try {
            const music = await MusicModel.findById(id);
            if (!music) {
                return res.status(404).json({ error: "Música não encontrada" });
            }   
            res.json(music);
        } catch (error) {
            console.error("Erro ao obter música:", error);
            res.status(500).json({ error: "Erro ao obter música" });
        }
    }

    async createMusic(req, res) {
        try {
            const {
                title,
                description,
                url,
                rating,
                singerId,

            } = req.body;

            // Validação básica
            if (!title || !description || !singerId) {
                return res
                    .status(400)
                    .json({
                        error:
                            "Título, descrição e ID do cantor são obrigatórios.",
                    });
            }
            // Criar objeto do canal
            const data = {
                title,
                description,
                url,
                rating,
                singerId,
            };

            // Criar canal
            const music = await MusicModel.create(data);

            return res.status(201).json({
                message: "Música criada com sucesso!",
                music,
            });
        } catch (error) {
            console.error("Erro ao criar música:", error);
            res.status(500).json({ error: "Erro ao criar música" });
        }
    }

    async updateMusic(req, res) {
        const { id } = req.params;
        const {
            title,
            description,
            url,
            rating,
            singerId,
        } = req.body;
        try {
            const data = {
                title,
                description,
                url,
                rating,
                singerId,
            };
            const music = await MusicModel.update(id, data);
            res.json({
                message: "Música atualizada com sucesso!",
                music,
            });
        } catch (error) {
            console.error("Erro ao atualizar música:", error);
            res.status(500).json({ error: "Erro ao atualizar música" });
        }
    }

    async deleteMusic(req, res) {   
        const { id } = req.params;
        try {   
            await MusicModel.delete(id);
            res.json({ message: "Música excluída com sucesso!" });
        } catch (error) {
            console.error("Erro ao excluir música:", error);
            res.status(500).json({ error: "Erro ao excluir música" });
        }
    }
}

export default new MusicController();
