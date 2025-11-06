
import prisma from "../../prisma/prisma.js";

class GameModel {
    // Obter todos os jogos
    async findAll(title, platform, page, limit) {
        if (Number(page) < 1) {
            page = 1;
        }
        if (Number(limit) < 1 || Number(limit) > 100) {
            limit = 10;
        }
        const skip = (Number(page) - 1) * Number(limit);
        //                4 - 1 = 3 * 10 = 30
        const where = {};

        if (title) {
            where.title = {
                contains: title,
            };
        }

        if (platform) {
            where.platform = {
                contains: platform,
            };
        }

        const games = await prisma.game.findMany({
            skip,
            take: Number(limit),
            where,
            orderBy: {
                createdAt: "desc",
            },
            include: {
                streams: true,
            },
        });

        const totalViews = games.length;
        const grandTotal = await prisma.game.count({
            where,
        })

        return { totalViews, grandTotal, games};
    }

    // Criar um novo jogo
    async create(data) {
        const game = await prisma.game.create({
            data,
        });

        return game;
    }

    // Excluir um jogo
    async delete(id) {
        await prisma.game.delete({
            where: {
                id: Number(id),
            },
        });

        return true;
    }
}

export default new GameModel();
